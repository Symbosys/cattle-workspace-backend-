import { ErrorResponse } from "../../../utils/response.util.js";
import { QuestionRepo } from "../repo/question.repo.js";
import { generateSlug } from "../utils/slug.util.js";
const MAX_SLUG_RETRIES = 3;
export class QuestionService {
    /**
     * Create a new forum question.
     * Generates a unique slug with collision retry.
     */
    static async createQuestion(authorId, dto) {
        // Generate a unique slug (retry on collision)
        let slug = generateSlug(dto.title);
        let retries = 0;
        while (retries < MAX_SLUG_RETRIES) {
            const existing = await QuestionRepo.findBySlugExact(slug);
            if (!existing)
                break;
            slug = generateSlug(dto.title);
            retries++;
        }
        if (retries >= MAX_SLUG_RETRIES) {
            // Extremely unlikely with 8-char random suffix, but handle gracefully
            throw new ErrorResponse("Failed to generate a unique slug. Please try again.", 500);
        }
        return await QuestionRepo.create(authorId, dto);
    }
    /**
     * Get a single question by slug.
     * Increments view count in the background (fire-and-forget).
     */
    static async getQuestionBySlug(slug) {
        const question = await QuestionRepo.findBySlug(slug);
        if (!question) {
            throw new ErrorResponse("Question not found", 404);
        }
        // Fire-and-forget view count increment
        QuestionRepo.incrementViewCount(question.id).catch(() => {
            // Silently ignore — view count is not critical
        });
        return question;
    }
    /**
     * List questions with cursor pagination, filtering, and sorting.
     */
    static async listQuestions(query) {
        return await QuestionRepo.list({
            cursor: query.cursor,
            limit: query.limit,
            tag: query.tag,
            search: query.search,
            sort: query.sort,
        });
    }
    /**
     * Update a question.
     * Only the original author can update.
     * Re-generates slug if the title changes.
     */
    static async updateQuestion(userId, questionId, dto) {
        const question = await QuestionRepo.findById(questionId);
        if (!question) {
            throw new ErrorResponse("Question not found", 404);
        }
        if (question.deletedAt) {
            throw new ErrorResponse("Cannot update a deleted question", 400);
        }
        if (question.authorId !== userId) {
            throw new ErrorResponse("You are not authorized to update this question", 403);
        }
        // Re-generate slug if title is being changed
        let newSlug;
        if (dto.title && dto.title !== question.title) {
            newSlug = generateSlug(dto.title);
            // Check for slug collision
            let retries = 0;
            while (retries < MAX_SLUG_RETRIES) {
                const existing = await QuestionRepo.findBySlugExact(newSlug);
                if (!existing)
                    break;
                newSlug = generateSlug(dto.title);
                retries++;
            }
        }
        return await QuestionRepo.update(questionId, { ...dto, slug: newSlug });
    }
    /**
     * Soft-delete a question.
     * Allowed for the original author or ADMIN users.
     */
    static async deleteQuestion(userId, userRole, questionId) {
        const question = await QuestionRepo.findById(questionId);
        if (!question) {
            throw new ErrorResponse("Question not found", 404);
        }
        if (question.deletedAt) {
            throw new ErrorResponse("Question is already deleted", 400);
        }
        const isAuthor = question.authorId === userId;
        const isAdmin = userRole === "ADMIN";
        if (!isAuthor && !isAdmin) {
            throw new ErrorResponse("You are not authorized to delete this question", 403);
        }
        await QuestionRepo.softDelete(questionId);
        return { id: questionId };
    }
}
//# sourceMappingURL=question.service.js.map