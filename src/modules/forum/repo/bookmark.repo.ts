import { db } from "../../../db/db.js";

/**
 * Author fields included in bookmark question details.
 */
const QUESTION_INCLUDE = {
  author: {
    select: {
      id: true,
      name: true,
      avatarUrl: true,
    },
  },
} as const;

export class BookmarkRepo {
  /**
   * Find an existing bookmark by user and question.
   */
  public static async findByUserAndQuestion(
    userId: string,
    questionId: string,
  ) {
    return await db.forumBookmark.findFirst({
      where: { userId, questionId },
    });
  }

  /**
   * Create a new bookmark.
   */
  public static async create(userId: string, questionId: string) {
    return await db.forumBookmark.create({
      data: { userId, questionId },
    });
  }

  /**
   * Delete a bookmark by ID.
   */
  public static async delete(id: string) {
    return await db.forumBookmark.delete({
      where: { id },
    });
  }

  /**
   * List bookmarks for a user with offset pagination.
   * Includes question details for display.
   */
  public static async listByUser(
    userId: string,
    page: number,
    limit: number,
  ) {
    const skip = (page - 1) * limit;

    const [bookmarks, total] = await Promise.all([
      db.forumBookmark.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          question: {
            select: {
              id: true,
              title: true,
              slug: true,
              tags: true,
              viewCount: true,
              voteScore: true,
              answerCount: true,
              isSolved: true,
              createdAt: true,
              deletedAt: true,
              ...QUESTION_INCLUDE,
            },
          },
        },
      }),
      db.forumBookmark.count({ where: { userId } }),
    ]);

    return {
      bookmarks,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  }

  /**
   * Check if a user has bookmarked a specific question.
   */
  public static async isBookmarked(
    userId: string,
    questionId: string,
  ): Promise<boolean> {
    const bookmark = await db.forumBookmark.findFirst({
      where: { userId, questionId },
      select: { id: true },
    });

    return bookmark !== null;
  }
}
