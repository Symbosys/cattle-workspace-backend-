import { db } from "../../../db/db.js";
/**
 * Author fields to include in answer responses.
 */
const AUTHOR_SELECT = {
    id: true,
    name: true,
    avatarUrl: true,
};
export class AnswerRepo {
    /**
     * Create a new answer for a question.
     */
    static async create(questionId, authorId, data) {
        return await db.forumAnswer.create({
            data: {
                questionId,
                authorId,
                content: data.content,
            },
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Find an answer by its ID.
     */
    static async findById(id) {
        return await db.forumAnswer.findUnique({
            where: { id },
            include: {
                author: { select: AUTHOR_SELECT },
                question: { select: { id: true, authorId: true, isLocked: true } },
            },
        });
    }
    /**
     * List answers for a given question with offset pagination and sorting.
     * Accepted answers always appear first.
     */
    static async listByQuestion(params) {
        const { questionId, page, limit, sort } = params;
        const skip = (page - 1) * limit;
        // Secondary sort after isAccepted
        let secondaryOrder;
        switch (sort) {
            case "oldest":
                secondaryOrder = { createdAt: "asc" };
                break;
            case "newest":
                secondaryOrder = { createdAt: "desc" };
                break;
            case "votes":
            default:
                secondaryOrder = { voteScore: "desc" };
                break;
        }
        const where = {
            questionId,
            deletedAt: null,
        };
        const [answers, total] = await Promise.all([
            db.forumAnswer.findMany({
                where,
                orderBy: [
                    { isAccepted: "desc" }, // Accepted answer always first
                    secondaryOrder,
                ],
                skip,
                take: limit,
                include: {
                    author: { select: AUTHOR_SELECT },
                    _count: {
                        select: {
                            comments: {
                                where: { deletedAt: null },
                            },
                        },
                    },
                },
            }),
            db.forumAnswer.count({ where }),
        ]);
        return {
            answers,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    /**
     * Update an answer's fields.
     */
    static async update(id, data) {
        const updateData = {};
        if (data.content !== undefined)
            updateData.content = data.content;
        return await db.forumAnswer.update({
            where: { id },
            data: updateData,
            include: {
                author: { select: AUTHOR_SELECT },
            },
        });
    }
    /**
     * Soft-delete an answer by setting deletedAt.
     */
    static async softDelete(id) {
        return await db.forumAnswer.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
    /**
     * Set or unset the isAccepted flag on an answer.
     */
    static async setAccepted(id, accepted) {
        return await db.forumAnswer.update({
            where: { id },
            data: { isAccepted: accepted },
        });
    }
    /**
     * Find the currently accepted answer for a question (if any).
     */
    static async findAcceptedByQuestion(questionId) {
        return await db.forumAnswer.findFirst({
            where: {
                questionId,
                isAccepted: true,
                deletedAt: null,
            },
            select: { id: true },
        });
    }
    /**
     * Count non-deleted answers for a question.
     */
    static async countByQuestion(questionId) {
        return await db.forumAnswer.count({
            where: {
                questionId,
                deletedAt: null,
            },
        });
    }
}
//# sourceMappingURL=answer.repo.js.map