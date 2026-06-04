import { db } from "../../../db/db.js";
import type { Prisma } from "../../../types/types.js";
import type { CreateQuestionDto, UpdateQuestionDto } from "../schema/question.schema.js";
import { generateSlug } from "../utils/slug.util.js";

/**
 * Author fields to include in question responses.
 */
const AUTHOR_SELECT = {
  id: true,
  name: true,
  avatarUrl: true,
} as const;

export class QuestionRepo {
  /**
   * Create a new forum question with an auto-generated slug.
   */
  public static async create(authorId: string, data: CreateQuestionDto) {
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
  public static async findBySlug(slug: string) {
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
  public static async findById(id: string) {
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
  public static async findBySlugExact(slug: string) {
    return await db.forumQuestion.findFirst({
      where: { slug },
      select: { id: true },
    });
  }

  /**
   * List questions with cursor-based pagination, filtering, and sorting.
   */
  public static async list(params: {
    cursor?: string | undefined;
    limit: number;
    tag?: string | undefined;
    search?: string | undefined;
    sort: "recent" | "votes" | "unanswered";
  }) {
    const { cursor, limit, tag, search, sort } = params;

    // Build the where clause
    const where: Prisma.ForumQuestionWhereInput = {
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
    let orderBy: Prisma.ForumQuestionOrderByWithRelationInput;
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

    // Build findMany args with conditional cursor
    const findArgs: Prisma.ForumQuestionFindManyArgs = {
      where,
      orderBy,
      take: limit + 1, // Fetch one extra to determine hasMore
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
    };

    if (cursor) {
      findArgs.cursor = { id: cursor };
      findArgs.skip = 1;
    }

    const questions = await db.forumQuestion.findMany(findArgs);

    const hasMore = questions.length > limit;
    const results = hasMore ? questions.slice(0, limit) : questions;
    const nextCursor = hasMore ? results[results.length - 1]?.id : undefined;

    return { questions: results, nextCursor, hasMore };
  }

  /**
   * Update a question's fields.
   */
  public static async update(
    id: string,
    data: UpdateQuestionDto & { slug?: string | undefined },
  ) {
    const updateData: Prisma.ForumQuestionUpdateInput = {};

    if (data.title !== undefined) updateData.title = data.title;
    if (data.slug !== undefined) updateData.slug = data.slug;
    if (data.content !== undefined) updateData.content = data.content;
    if (data.tags !== undefined) updateData.tags = data.tags;

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
  public static async softDelete(id: string) {
    return await db.forumQuestion.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  /**
   * Increment the view count of a question by 1.
   */
  public static async incrementViewCount(id: string) {
    return await db.forumQuestion.update({
      where: { id },
      data: { viewCount: { increment: 1 } },
    });
  }
}
