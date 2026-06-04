import { db } from "../../../db/db.js";
/**
 * Author fields to include in comment responses.
 */
const AUTHOR_SELECT = {
    id: true,
    name: true,
    avatarUrl: true,
};
export class CommentRepo {
    /**
     * Create a comment on a question or an answer.
     * Exactly one of questionId or answerId must be provided.
     */
    static async create(authorId, parent, data) {
        return await db.forumComment.create({
            data: {
                authorId,
                questionId: parent.questionId ?? null,
                answerId: parent.answerId ?? null,
                content: data.content,
            },
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Find a comment by its ID.
     */
    static async findById(id) {
        return await db.forumComment.findUnique({
            where: { id },
            include: {
                author: { select: AUTHOR_SELECT },
                question: { select: { id: true, isLocked: true } },
                answer: {
                    select: {
                        id: true,
                        question: { select: { id: true, isLocked: true } },
                    },
                },
            },
        });
    }
    /**
     * List all non-deleted comments for a specific question.
     * Ordered chronologically (oldest first).
     */
    static async listByQuestion(questionId) {
        return await db.forumComment.findMany({
            where: {
                questionId,
                deletedAt: null,
            },
            orderBy: { createdAt: "asc" },
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * List all non-deleted comments for a specific answer.
     * Ordered chronologically (oldest first).
     */
    static async listByAnswer(answerId) {
        return await db.forumComment.findMany({
            where: {
                answerId,
                deletedAt: null,
            },
            orderBy: { createdAt: "asc" },
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Update a comment's content.
     */
    static async update(id, data) {
        const updateData = {};
        if (data.content !== undefined)
            updateData.content = data.content;
        return await db.forumComment.update({
            where: { id },
            data: updateData,
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Soft-delete a comment by setting deletedAt.
     */
    static async softDelete(id) {
        return await db.forumComment.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
}
//# sourceMappingURL=comment.repo.js.map