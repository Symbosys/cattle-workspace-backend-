import { db } from "../../../db/db.js";
import { generateSlug } from "../utils/slug.util.js";
/**
 * Author fields to include in question responses.
 */
const AUTHOR_SELECT = {
    id: true,
    name: true,
    avatarUrl: true,
};
export class QuestionRepo {
    /**
     * Create a new forum question with an auto-generated slug.
     */
    static async create(authorId, data) {
        const slug = generateSlug(data.title);
        return await db.forumQuestion.create({
            data: {
                authorId,
                title: data.title,
                slug,
                content: data.content,
                tags: data.tags ?? [],
            },
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Find a question by its unique slug.
     * Excludes soft-deleted records.
     */
    static async findBySlug(slug) {
        return await db.forumQuestion.findFirst({
            where: {
                slug,
                deletedAt: null,
            },
            include: {
                author: { select: AUTHOR_SELECT },
                _count: {
                    select: {
                        answers: {
                            where: { deletedAt: null },
                        },
                        comments: {
                            where: { deletedAt: null },
                        },
                    },
                },
            },
        });
    }
    /**
     * Find a question by its ID.
     * Does NOT filter soft-deleted (used internally for ownership checks).
     */
    static async findById(id) {
        return await db.forumQuestion.findUnique({
            where: { id },
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Find a question by slug (used for slug collision detection).
     */
    static async findBySlugExact(slug) {
        return await db.forumQuestion.findFirst({
            where: { slug },
            select: { id: true },
        });
    }
    /**
     * List questions with cursor-based pagination, filtering, and sorting.
     */
    static async list(params) {
        const { cursor, limit, tag, search, sort } = params;
        // Build the where clause
        const where = {
            deletedAt: null,
        };
        if (tag) {
            where.tags = { has: tag.toLowerCase() };
        }
        if (search) {
            where.OR = [
                { title: { contains: search, mode: "insensitive" } },
                { content: { contains: search, mode: "insensitive" } },
            ];
        }
        if (sort === "unanswered") {
            where.answerCount = 0;
        }
        // Build the orderBy clause
        let orderBy;
        switch (sort) {
            case "votes":
                orderBy = { voteScore: "desc" };
                break;
            case "unanswered":
            case "recent":
            default:
                orderBy = { createdAt: "desc" };
                break;
        }
        // Cursor-based pagination
        const cursorClause = cursor ? { cursor: { id: cursor }, skip: 1 } : {};
        const questions = await db.forumQuestion.findMany({
            where,
            orderBy,
            take: limit + 1, // Fetch one extra to determine hasMore
            ...cursorClause,
            include: {
                author: { select: AUTHOR_SELECT },
                _count: {
                    select: {
                        answers: {
                            where: { deletedAt: null },
                        },
                        comments: {
                            where: { deletedAt: null },
                        },
                    },
                },
            },
        });
        const hasMore = questions.length > limit;
        const results = hasMore ? questions.slice(0, limit) : questions;
        const nextCursor = hasMore ? results[results.length - 1]?.id : undefined;
        return { questions: results, nextCursor, hasMore };
    }
    /**
     * Update a question's fields.
     */
    static async update(id, data) {
        const updateData = {};
        if (data.title !== undefined)
            updateData.title = data.title;
        if (data.slug !== undefined)
            updateData.slug = data.slug;
        if (data.content !== undefined)
            updateData.content = data.content;
        if (data.tags !== undefined)
            updateData.tags = data.tags;
        return await db.forumQuestion.update({
            where: { id },
            data: updateData,
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Soft-delete a question by setting deletedAt.
     */
    static async softDelete(id) {
        return await db.forumQuestion.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
    /**
     * Increment the view count of a question by 1.
     */
    static async incrementViewCount(id) {
        return await db.forumQuestion.update({
            where: { id },
            data: { viewCount: { increment: 1 } },
        });
    }
}
//# sourceMappingURL=question.repo.js.map