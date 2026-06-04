import { db } from "../../../db/db.js";
import type { Prisma } from "../../../types/types.js";
import type { CreateCommentDto, UpdateCommentDto } from "../schema/comment.schema.js";

/**
 * Author fields to include in comment responses.
 */
const AUTHOR_SELECT = {
  id: true,
  name: true,
  avatarUrl: true,
} as const;

export class CommentRepo {
  /**
   * Create a comment on a question or an answer.
   * Exactly one of questionId or answerId must be provided.
   */
  public static async create(
    authorId: string,
    parent: { questionId?: string; answerId?: string },
    data: CreateCommentDto,
  ) {
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
  public static async findById(id: string) {
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
  public static async listByQuestion(questionId: string) {
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
  public static async listByAnswer(answerId: string) {
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
  public static async update(id: string, data: UpdateCommentDto) {
    const updateData: Prisma.ForumCommentUpdateInput = {};

    if (data.content !== undefined) updateData.content = data.content;

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
  public static async softDelete(id: string) {
    return await db.forumComment.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
