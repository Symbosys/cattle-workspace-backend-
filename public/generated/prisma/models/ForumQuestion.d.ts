import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ForumQuestion
 *
 */
export type ForumQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$ForumQuestionPayload>;
export type AggregateForumQuestion = {
    _count: ForumQuestionCountAggregateOutputType | null;
    _avg: ForumQuestionAvgAggregateOutputType | null;
    _sum: ForumQuestionSumAggregateOutputType | null;
    _min: ForumQuestionMinAggregateOutputType | null;
    _max: ForumQuestionMaxAggregateOutputType | null;
};
export type ForumQuestionAvgAggregateOutputType = {
    viewCount: number | null;
    voteScore: number | null;
    answerCount: number | null;
};
export type ForumQuestionSumAggregateOutputType = {
    viewCount: number | null;
    voteScore: number | null;
    answerCount: number | null;
};
export type ForumQuestionMinAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    viewCount: number | null;
    voteScore: number | null;
    answerCount: number | null;
    isLocked: boolean | null;
    isPinned: boolean | null;
    isSolved: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ForumQuestionMaxAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    viewCount: number | null;
    voteScore: number | null;
    answerCount: number | null;
    isLocked: boolean | null;
    isPinned: boolean | null;
    isSolved: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ForumQuestionCountAggregateOutputType = {
    id: number;
    authorId: number;
    title: number;
    slug: number;
    content: number;
    tags: number;
    viewCount: number;
    voteScore: number;
    answerCount: number;
    isLocked: number;
    isPinned: number;
    isSolved: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ForumQuestionAvgAggregateInputType = {
    viewCount?: true;
    voteScore?: true;
    answerCount?: true;
};
export type ForumQuestionSumAggregateInputType = {
    viewCount?: true;
    voteScore?: true;
    answerCount?: true;
};
export type ForumQuestionMinAggregateInputType = {
    id?: true;
    authorId?: true;
    title?: true;
    slug?: true;
    content?: true;
    viewCount?: true;
    voteScore?: true;
    answerCount?: true;
    isLocked?: true;
    isPinned?: true;
    isSolved?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ForumQuestionMaxAggregateInputType = {
    id?: true;
    authorId?: true;
    title?: true;
    slug?: true;
    content?: true;
    viewCount?: true;
    voteScore?: true;
    answerCount?: true;
    isLocked?: true;
    isPinned?: true;
    isSolved?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ForumQuestionCountAggregateInputType = {
    id?: true;
    authorId?: true;
    title?: true;
    slug?: true;
    content?: true;
    tags?: true;
    viewCount?: true;
    voteScore?: true;
    answerCount?: true;
    isLocked?: true;
    isPinned?: true;
    isSolved?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ForumQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ForumQuestion to aggregate.
     */
    where?: Prisma.ForumQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumQuestions to fetch.
     */
    orderBy?: Prisma.ForumQuestionOrderByWithRelationInput | Prisma.ForumQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ForumQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ForumQuestions
    **/
    _count?: true | ForumQuestionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ForumQuestionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ForumQuestionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ForumQuestionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ForumQuestionMaxAggregateInputType;
};
export type GetForumQuestionAggregateType<T extends ForumQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateForumQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateForumQuestion[P]> : Prisma.GetScalarType<T[P], AggregateForumQuestion[P]>;
};
export type ForumQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumQuestionWhereInput;
    orderBy?: Prisma.ForumQuestionOrderByWithAggregationInput | Prisma.ForumQuestionOrderByWithAggregationInput[];
    by: Prisma.ForumQuestionScalarFieldEnum[] | Prisma.ForumQuestionScalarFieldEnum;
    having?: Prisma.ForumQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ForumQuestionCountAggregateInputType | true;
    _avg?: ForumQuestionAvgAggregateInputType;
    _sum?: ForumQuestionSumAggregateInputType;
    _min?: ForumQuestionMinAggregateInputType;
    _max?: ForumQuestionMaxAggregateInputType;
};
export type ForumQuestionGroupByOutputType = {
    id: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags: string[];
    viewCount: number;
    voteScore: number;
    answerCount: number;
    isLocked: boolean;
    isPinned: boolean;
    isSolved: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ForumQuestionCountAggregateOutputType | null;
    _avg: ForumQuestionAvgAggregateOutputType | null;
    _sum: ForumQuestionSumAggregateOutputType | null;
    _min: ForumQuestionMinAggregateOutputType | null;
    _max: ForumQuestionMaxAggregateOutputType | null;
};
export type GetForumQuestionGroupByPayload<T extends ForumQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ForumQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ForumQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ForumQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ForumQuestionGroupByOutputType[P]>;
}>>;
export type ForumQuestionWhereInput = {
    AND?: Prisma.ForumQuestionWhereInput | Prisma.ForumQuestionWhereInput[];
    OR?: Prisma.ForumQuestionWhereInput[];
    NOT?: Prisma.ForumQuestionWhereInput | Prisma.ForumQuestionWhereInput[];
    id?: Prisma.StringFilter<"ForumQuestion"> | string;
    authorId?: Prisma.StringFilter<"ForumQuestion"> | string;
    title?: Prisma.StringFilter<"ForumQuestion"> | string;
    slug?: Prisma.StringFilter<"ForumQuestion"> | string;
    content?: Prisma.StringFilter<"ForumQuestion"> | string;
    tags?: Prisma.StringNullableListFilter<"ForumQuestion">;
    viewCount?: Prisma.IntFilter<"ForumQuestion"> | number;
    voteScore?: Prisma.IntFilter<"ForumQuestion"> | number;
    answerCount?: Prisma.IntFilter<"ForumQuestion"> | number;
    isLocked?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    isPinned?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    isSolved?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"ForumQuestion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ForumQuestion"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    answers?: Prisma.ForumAnswerListRelationFilter;
    comments?: Prisma.ForumCommentListRelationFilter;
    votes?: Prisma.ForumVoteListRelationFilter;
    reports?: Prisma.ForumReportListRelationFilter;
    bookmarks?: Prisma.ForumBookmarkListRelationFilter;
};
export type ForumQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    answerCount?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    isPinned?: Prisma.SortOrder;
    isSolved?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    answers?: Prisma.ForumAnswerOrderByRelationAggregateInput;
    comments?: Prisma.ForumCommentOrderByRelationAggregateInput;
    votes?: Prisma.ForumVoteOrderByRelationAggregateInput;
    reports?: Prisma.ForumReportOrderByRelationAggregateInput;
    bookmarks?: Prisma.ForumBookmarkOrderByRelationAggregateInput;
};
export type ForumQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ForumQuestionWhereInput | Prisma.ForumQuestionWhereInput[];
    OR?: Prisma.ForumQuestionWhereInput[];
    NOT?: Prisma.ForumQuestionWhereInput | Prisma.ForumQuestionWhereInput[];
    authorId?: Prisma.StringFilter<"ForumQuestion"> | string;
    title?: Prisma.StringFilter<"ForumQuestion"> | string;
    content?: Prisma.StringFilter<"ForumQuestion"> | string;
    tags?: Prisma.StringNullableListFilter<"ForumQuestion">;
    viewCount?: Prisma.IntFilter<"ForumQuestion"> | number;
    voteScore?: Prisma.IntFilter<"ForumQuestion"> | number;
    answerCount?: Prisma.IntFilter<"ForumQuestion"> | number;
    isLocked?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    isPinned?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    isSolved?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"ForumQuestion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ForumQuestion"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    answers?: Prisma.ForumAnswerListRelationFilter;
    comments?: Prisma.ForumCommentListRelationFilter;
    votes?: Prisma.ForumVoteListRelationFilter;
    reports?: Prisma.ForumReportListRelationFilter;
    bookmarks?: Prisma.ForumBookmarkListRelationFilter;
}, "id" | "slug">;
export type ForumQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    answerCount?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    isPinned?: Prisma.SortOrder;
    isSolved?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ForumQuestionCountOrderByAggregateInput;
    _avg?: Prisma.ForumQuestionAvgOrderByAggregateInput;
    _max?: Prisma.ForumQuestionMaxOrderByAggregateInput;
    _min?: Prisma.ForumQuestionMinOrderByAggregateInput;
    _sum?: Prisma.ForumQuestionSumOrderByAggregateInput;
};
export type ForumQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ForumQuestionScalarWhereWithAggregatesInput | Prisma.ForumQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ForumQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ForumQuestionScalarWhereWithAggregatesInput | Prisma.ForumQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ForumQuestion"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"ForumQuestion"> | string;
    title?: Prisma.StringWithAggregatesFilter<"ForumQuestion"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"ForumQuestion"> | string;
    content?: Prisma.StringWithAggregatesFilter<"ForumQuestion"> | string;
    tags?: Prisma.StringNullableListFilter<"ForumQuestion">;
    viewCount?: Prisma.IntWithAggregatesFilter<"ForumQuestion"> | number;
    voteScore?: Prisma.IntWithAggregatesFilter<"ForumQuestion"> | number;
    answerCount?: Prisma.IntWithAggregatesFilter<"ForumQuestion"> | number;
    isLocked?: Prisma.BoolWithAggregatesFilter<"ForumQuestion"> | boolean;
    isPinned?: Prisma.BoolWithAggregatesFilter<"ForumQuestion"> | boolean;
    isSolved?: Prisma.BoolWithAggregatesFilter<"ForumQuestion"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ForumQuestion"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ForumQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ForumQuestion"> | Date | string;
};
export type ForumQuestionCreateInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUncheckedCreateInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionCreateManyInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ForumQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ForumQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    answerCount?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    isPinned?: Prisma.SortOrder;
    isSolved?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ForumQuestionAvgOrderByAggregateInput = {
    viewCount?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    answerCount?: Prisma.SortOrder;
};
export type ForumQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    answerCount?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    isPinned?: Prisma.SortOrder;
    isSolved?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ForumQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    answerCount?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    isPinned?: Prisma.SortOrder;
    isSolved?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ForumQuestionSumOrderByAggregateInput = {
    viewCount?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    answerCount?: Prisma.SortOrder;
};
export type ForumQuestionScalarRelationFilter = {
    is?: Prisma.ForumQuestionWhereInput;
    isNot?: Prisma.ForumQuestionWhereInput;
};
export type ForumQuestionNullableScalarRelationFilter = {
    is?: Prisma.ForumQuestionWhereInput | null;
    isNot?: Prisma.ForumQuestionWhereInput | null;
};
export type ForumQuestionListRelationFilter = {
    every?: Prisma.ForumQuestionWhereInput;
    some?: Prisma.ForumQuestionWhereInput;
    none?: Prisma.ForumQuestionWhereInput;
};
export type ForumQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ForumQuestionCreatetagsInput = {
    set: string[];
};
export type ForumQuestionUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type ForumQuestionCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAnswersInput, Prisma.ForumQuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
};
export type ForumQuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAnswersInput, Prisma.ForumQuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.ForumQuestionUpsertWithoutAnswersInput;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumQuestionUpdateToOneWithWhereWithoutAnswersInput, Prisma.ForumQuestionUpdateWithoutAnswersInput>, Prisma.ForumQuestionUncheckedUpdateWithoutAnswersInput>;
};
export type ForumQuestionCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutCommentsInput, Prisma.ForumQuestionUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
};
export type ForumQuestionUpdateOneWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutCommentsInput, Prisma.ForumQuestionUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.ForumQuestionUpsertWithoutCommentsInput;
    disconnect?: Prisma.ForumQuestionWhereInput | boolean;
    delete?: Prisma.ForumQuestionWhereInput | boolean;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumQuestionUpdateToOneWithWhereWithoutCommentsInput, Prisma.ForumQuestionUpdateWithoutCommentsInput>, Prisma.ForumQuestionUncheckedUpdateWithoutCommentsInput>;
};
export type ForumQuestionCreateNestedOneWithoutVotesInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutVotesInput, Prisma.ForumQuestionUncheckedCreateWithoutVotesInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutVotesInput;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
};
export type ForumQuestionUpdateOneWithoutVotesNestedInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutVotesInput, Prisma.ForumQuestionUncheckedCreateWithoutVotesInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutVotesInput;
    upsert?: Prisma.ForumQuestionUpsertWithoutVotesInput;
    disconnect?: Prisma.ForumQuestionWhereInput | boolean;
    delete?: Prisma.ForumQuestionWhereInput | boolean;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumQuestionUpdateToOneWithWhereWithoutVotesInput, Prisma.ForumQuestionUpdateWithoutVotesInput>, Prisma.ForumQuestionUncheckedUpdateWithoutVotesInput>;
};
export type ForumQuestionCreateNestedOneWithoutBookmarksInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutBookmarksInput, Prisma.ForumQuestionUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutBookmarksInput;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
};
export type ForumQuestionUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutBookmarksInput, Prisma.ForumQuestionUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutBookmarksInput;
    upsert?: Prisma.ForumQuestionUpsertWithoutBookmarksInput;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumQuestionUpdateToOneWithWhereWithoutBookmarksInput, Prisma.ForumQuestionUpdateWithoutBookmarksInput>, Prisma.ForumQuestionUncheckedUpdateWithoutBookmarksInput>;
};
export type ForumQuestionCreateNestedOneWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutReportsInput, Prisma.ForumQuestionUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutReportsInput;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
};
export type ForumQuestionUpdateOneWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutReportsInput, Prisma.ForumQuestionUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutReportsInput;
    upsert?: Prisma.ForumQuestionUpsertWithoutReportsInput;
    disconnect?: Prisma.ForumQuestionWhereInput | boolean;
    delete?: Prisma.ForumQuestionWhereInput | boolean;
    connect?: Prisma.ForumQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumQuestionUpdateToOneWithWhereWithoutReportsInput, Prisma.ForumQuestionUpdateWithoutReportsInput>, Prisma.ForumQuestionUncheckedUpdateWithoutReportsInput>;
};
export type ForumQuestionCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAuthorInput, Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput> | Prisma.ForumQuestionCreateWithoutAuthorInput[] | Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput | Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ForumQuestionCreateManyAuthorInputEnvelope;
    connect?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
};
export type ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAuthorInput, Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput> | Prisma.ForumQuestionCreateWithoutAuthorInput[] | Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput | Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ForumQuestionCreateManyAuthorInputEnvelope;
    connect?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
};
export type ForumQuestionUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAuthorInput, Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput> | Prisma.ForumQuestionCreateWithoutAuthorInput[] | Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput | Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ForumQuestionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ForumQuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ForumQuestionCreateManyAuthorInputEnvelope;
    set?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    disconnect?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    delete?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    connect?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    update?: Prisma.ForumQuestionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ForumQuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ForumQuestionUpdateManyWithWhereWithoutAuthorInput | Prisma.ForumQuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ForumQuestionScalarWhereInput | Prisma.ForumQuestionScalarWhereInput[];
};
export type ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAuthorInput, Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput> | Prisma.ForumQuestionCreateWithoutAuthorInput[] | Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput | Prisma.ForumQuestionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ForumQuestionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ForumQuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ForumQuestionCreateManyAuthorInputEnvelope;
    set?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    disconnect?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    delete?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    connect?: Prisma.ForumQuestionWhereUniqueInput | Prisma.ForumQuestionWhereUniqueInput[];
    update?: Prisma.ForumQuestionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ForumQuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ForumQuestionUpdateManyWithWhereWithoutAuthorInput | Prisma.ForumQuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ForumQuestionScalarWhereInput | Prisma.ForumQuestionScalarWhereInput[];
};
export type ForumQuestionCreateWithoutAnswersInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUncheckedCreateWithoutAnswersInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionCreateOrConnectWithoutAnswersInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAnswersInput, Prisma.ForumQuestionUncheckedCreateWithoutAnswersInput>;
};
export type ForumQuestionUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutAnswersInput, Prisma.ForumQuestionUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAnswersInput, Prisma.ForumQuestionUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.ForumQuestionWhereInput;
};
export type ForumQuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.ForumQuestionWhereInput;
    data: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutAnswersInput, Prisma.ForumQuestionUncheckedUpdateWithoutAnswersInput>;
};
export type ForumQuestionUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUncheckedCreateWithoutCommentsInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionCreateOrConnectWithoutCommentsInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutCommentsInput, Prisma.ForumQuestionUncheckedCreateWithoutCommentsInput>;
};
export type ForumQuestionUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutCommentsInput, Prisma.ForumQuestionUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutCommentsInput, Prisma.ForumQuestionUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.ForumQuestionWhereInput;
};
export type ForumQuestionUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.ForumQuestionWhereInput;
    data: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutCommentsInput, Prisma.ForumQuestionUncheckedUpdateWithoutCommentsInput>;
};
export type ForumQuestionUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionCreateWithoutVotesInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUncheckedCreateWithoutVotesInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionCreateOrConnectWithoutVotesInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutVotesInput, Prisma.ForumQuestionUncheckedCreateWithoutVotesInput>;
};
export type ForumQuestionUpsertWithoutVotesInput = {
    update: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutVotesInput, Prisma.ForumQuestionUncheckedUpdateWithoutVotesInput>;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutVotesInput, Prisma.ForumQuestionUncheckedCreateWithoutVotesInput>;
    where?: Prisma.ForumQuestionWhereInput;
};
export type ForumQuestionUpdateToOneWithWhereWithoutVotesInput = {
    where?: Prisma.ForumQuestionWhereInput;
    data: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutVotesInput, Prisma.ForumQuestionUncheckedUpdateWithoutVotesInput>;
};
export type ForumQuestionUpdateWithoutVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateWithoutVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionCreateWithoutBookmarksInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUncheckedCreateWithoutBookmarksInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionCreateOrConnectWithoutBookmarksInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutBookmarksInput, Prisma.ForumQuestionUncheckedCreateWithoutBookmarksInput>;
};
export type ForumQuestionUpsertWithoutBookmarksInput = {
    update: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutBookmarksInput, Prisma.ForumQuestionUncheckedUpdateWithoutBookmarksInput>;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutBookmarksInput, Prisma.ForumQuestionUncheckedCreateWithoutBookmarksInput>;
    where?: Prisma.ForumQuestionWhereInput;
};
export type ForumQuestionUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: Prisma.ForumQuestionWhereInput;
    data: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutBookmarksInput, Prisma.ForumQuestionUncheckedUpdateWithoutBookmarksInput>;
};
export type ForumQuestionUpdateWithoutBookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateWithoutBookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionCreateWithoutReportsInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUncheckedCreateWithoutReportsInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionCreateOrConnectWithoutReportsInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutReportsInput, Prisma.ForumQuestionUncheckedCreateWithoutReportsInput>;
};
export type ForumQuestionUpsertWithoutReportsInput = {
    update: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutReportsInput, Prisma.ForumQuestionUncheckedUpdateWithoutReportsInput>;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutReportsInput, Prisma.ForumQuestionUncheckedCreateWithoutReportsInput>;
    where?: Prisma.ForumQuestionWhereInput;
};
export type ForumQuestionUpdateToOneWithWhereWithoutReportsInput = {
    where?: Prisma.ForumQuestionWhereInput;
    data: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutReportsInput, Prisma.ForumQuestionUncheckedUpdateWithoutReportsInput>;
};
export type ForumQuestionUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutQuestionInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type ForumQuestionCreateOrConnectWithoutAuthorInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAuthorInput, Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput>;
};
export type ForumQuestionCreateManyAuthorInputEnvelope = {
    data: Prisma.ForumQuestionCreateManyAuthorInput | Prisma.ForumQuestionCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type ForumQuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutAuthorInput, Prisma.ForumQuestionUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.ForumQuestionCreateWithoutAuthorInput, Prisma.ForumQuestionUncheckedCreateWithoutAuthorInput>;
};
export type ForumQuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ForumQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ForumQuestionUpdateWithoutAuthorInput, Prisma.ForumQuestionUncheckedUpdateWithoutAuthorInput>;
};
export type ForumQuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.ForumQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.ForumQuestionUpdateManyMutationInput, Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorInput>;
};
export type ForumQuestionScalarWhereInput = {
    AND?: Prisma.ForumQuestionScalarWhereInput | Prisma.ForumQuestionScalarWhereInput[];
    OR?: Prisma.ForumQuestionScalarWhereInput[];
    NOT?: Prisma.ForumQuestionScalarWhereInput | Prisma.ForumQuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"ForumQuestion"> | string;
    authorId?: Prisma.StringFilter<"ForumQuestion"> | string;
    title?: Prisma.StringFilter<"ForumQuestion"> | string;
    slug?: Prisma.StringFilter<"ForumQuestion"> | string;
    content?: Prisma.StringFilter<"ForumQuestion"> | string;
    tags?: Prisma.StringNullableListFilter<"ForumQuestion">;
    viewCount?: Prisma.IntFilter<"ForumQuestion"> | number;
    voteScore?: Prisma.IntFilter<"ForumQuestion"> | number;
    answerCount?: Prisma.IntFilter<"ForumQuestion"> | number;
    isLocked?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    isPinned?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    isSolved?: Prisma.BoolFilter<"ForumQuestion"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"ForumQuestion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ForumQuestion"> | Date | string;
};
export type ForumQuestionCreateManyAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    tags?: Prisma.ForumQuestionCreatetagsInput | string[];
    viewCount?: number;
    voteScore?: number;
    answerCount?: number;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ForumQuestionUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.ForumAnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutQuestionNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.ForumBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type ForumQuestionUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ForumQuestionUpdatetagsInput | string[];
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    answerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPinned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ForumQuestionCountOutputType
 */
export type ForumQuestionCountOutputType = {
    answers: number;
    comments: number;
    votes: number;
    reports: number;
    bookmarks: number;
};
export type ForumQuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | ForumQuestionCountOutputTypeCountAnswersArgs;
    comments?: boolean | ForumQuestionCountOutputTypeCountCommentsArgs;
    votes?: boolean | ForumQuestionCountOutputTypeCountVotesArgs;
    reports?: boolean | ForumQuestionCountOutputTypeCountReportsArgs;
    bookmarks?: boolean | ForumQuestionCountOutputTypeCountBookmarksArgs;
};
/**
 * ForumQuestionCountOutputType without action
 */
export type ForumQuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestionCountOutputType
     */
    select?: Prisma.ForumQuestionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ForumQuestionCountOutputType without action
 */
export type ForumQuestionCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumAnswerWhereInput;
};
/**
 * ForumQuestionCountOutputType without action
 */
export type ForumQuestionCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumCommentWhereInput;
};
/**
 * ForumQuestionCountOutputType without action
 */
export type ForumQuestionCountOutputTypeCountVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumVoteWhereInput;
};
/**
 * ForumQuestionCountOutputType without action
 */
export type ForumQuestionCountOutputTypeCountReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumReportWhereInput;
};
/**
 * ForumQuestionCountOutputType without action
 */
export type ForumQuestionCountOutputTypeCountBookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumBookmarkWhereInput;
};
export type ForumQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    tags?: boolean;
    viewCount?: boolean;
    voteScore?: boolean;
    answerCount?: boolean;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.ForumQuestion$answersArgs<ExtArgs>;
    comments?: boolean | Prisma.ForumQuestion$commentsArgs<ExtArgs>;
    votes?: boolean | Prisma.ForumQuestion$votesArgs<ExtArgs>;
    reports?: boolean | Prisma.ForumQuestion$reportsArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.ForumQuestion$bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.ForumQuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["forumQuestion"]>;
export type ForumQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    tags?: boolean;
    viewCount?: boolean;
    voteScore?: boolean;
    answerCount?: boolean;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["forumQuestion"]>;
export type ForumQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    tags?: boolean;
    viewCount?: boolean;
    voteScore?: boolean;
    answerCount?: boolean;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["forumQuestion"]>;
export type ForumQuestionSelectScalar = {
    id?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    tags?: boolean;
    viewCount?: boolean;
    voteScore?: boolean;
    answerCount?: boolean;
    isLocked?: boolean;
    isPinned?: boolean;
    isSolved?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ForumQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "authorId" | "title" | "slug" | "content" | "tags" | "viewCount" | "voteScore" | "answerCount" | "isLocked" | "isPinned" | "isSolved" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["forumQuestion"]>;
export type ForumQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.ForumQuestion$answersArgs<ExtArgs>;
    comments?: boolean | Prisma.ForumQuestion$commentsArgs<ExtArgs>;
    votes?: boolean | Prisma.ForumQuestion$votesArgs<ExtArgs>;
    reports?: boolean | Prisma.ForumQuestion$reportsArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.ForumQuestion$bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.ForumQuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ForumQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ForumQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ForumQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ForumQuestion";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        answers: Prisma.$ForumAnswerPayload<ExtArgs>[];
        comments: Prisma.$ForumCommentPayload<ExtArgs>[];
        votes: Prisma.$ForumVotePayload<ExtArgs>[];
        reports: Prisma.$ForumReportPayload<ExtArgs>[];
        bookmarks: Prisma.$ForumBookmarkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        authorId: string;
        title: string;
        slug: string;
        content: string;
        tags: string[];
        viewCount: number;
        voteScore: number;
        answerCount: number;
        isLocked: boolean;
        isPinned: boolean;
        isSolved: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["forumQuestion"]>;
    composites: {};
};
export type ForumQuestionGetPayload<S extends boolean | null | undefined | ForumQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload, S>;
export type ForumQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ForumQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ForumQuestionCountAggregateInputType | true;
};
export interface ForumQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ForumQuestion'];
        meta: {
            name: 'ForumQuestion';
        };
    };
    /**
     * Find zero or one ForumQuestion that matches the filter.
     * @param {ForumQuestionFindUniqueArgs} args - Arguments to find a ForumQuestion
     * @example
     * // Get one ForumQuestion
     * const forumQuestion = await prisma.forumQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, ForumQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ForumQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumQuestionFindUniqueOrThrowArgs} args - Arguments to find a ForumQuestion
     * @example
     * // Get one ForumQuestion
     * const forumQuestion = await prisma.forumQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ForumQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ForumQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumQuestionFindFirstArgs} args - Arguments to find a ForumQuestion
     * @example
     * // Get one ForumQuestion
     * const forumQuestion = await prisma.forumQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, ForumQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ForumQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumQuestionFindFirstOrThrowArgs} args - Arguments to find a ForumQuestion
     * @example
     * // Get one ForumQuestion
     * const forumQuestion = await prisma.forumQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ForumQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ForumQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumQuestions
     * const forumQuestions = await prisma.forumQuestion.findMany()
     *
     * // Get first 10 ForumQuestions
     * const forumQuestions = await prisma.forumQuestion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const forumQuestionWithIdOnly = await prisma.forumQuestion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ForumQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, ForumQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ForumQuestion.
     * @param {ForumQuestionCreateArgs} args - Arguments to create a ForumQuestion.
     * @example
     * // Create one ForumQuestion
     * const ForumQuestion = await prisma.forumQuestion.create({
     *   data: {
     *     // ... data to create a ForumQuestion
     *   }
     * })
     *
     */
    create<T extends ForumQuestionCreateArgs>(args: Prisma.SelectSubset<T, ForumQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ForumQuestions.
     * @param {ForumQuestionCreateManyArgs} args - Arguments to create many ForumQuestions.
     * @example
     * // Create many ForumQuestions
     * const forumQuestion = await prisma.forumQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ForumQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, ForumQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ForumQuestions and returns the data saved in the database.
     * @param {ForumQuestionCreateManyAndReturnArgs} args - Arguments to create many ForumQuestions.
     * @example
     * // Create many ForumQuestions
     * const forumQuestion = await prisma.forumQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ForumQuestions and only return the `id`
     * const forumQuestionWithIdOnly = await prisma.forumQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ForumQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ForumQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ForumQuestion.
     * @param {ForumQuestionDeleteArgs} args - Arguments to delete one ForumQuestion.
     * @example
     * // Delete one ForumQuestion
     * const ForumQuestion = await prisma.forumQuestion.delete({
     *   where: {
     *     // ... filter to delete one ForumQuestion
     *   }
     * })
     *
     */
    delete<T extends ForumQuestionDeleteArgs>(args: Prisma.SelectSubset<T, ForumQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ForumQuestion.
     * @param {ForumQuestionUpdateArgs} args - Arguments to update one ForumQuestion.
     * @example
     * // Update one ForumQuestion
     * const forumQuestion = await prisma.forumQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ForumQuestionUpdateArgs>(args: Prisma.SelectSubset<T, ForumQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ForumQuestions.
     * @param {ForumQuestionDeleteManyArgs} args - Arguments to filter ForumQuestions to delete.
     * @example
     * // Delete a few ForumQuestions
     * const { count } = await prisma.forumQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ForumQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ForumQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ForumQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumQuestions
     * const forumQuestion = await prisma.forumQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ForumQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, ForumQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ForumQuestions and returns the data updated in the database.
     * @param {ForumQuestionUpdateManyAndReturnArgs} args - Arguments to update many ForumQuestions.
     * @example
     * // Update many ForumQuestions
     * const forumQuestion = await prisma.forumQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ForumQuestions and only return the `id`
     * const forumQuestionWithIdOnly = await prisma.forumQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ForumQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ForumQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ForumQuestion.
     * @param {ForumQuestionUpsertArgs} args - Arguments to update or create a ForumQuestion.
     * @example
     * // Update or create a ForumQuestion
     * const forumQuestion = await prisma.forumQuestion.upsert({
     *   create: {
     *     // ... data to create a ForumQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumQuestion we want to update
     *   }
     * })
     */
    upsert<T extends ForumQuestionUpsertArgs>(args: Prisma.SelectSubset<T, ForumQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ForumQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumQuestionCountArgs} args - Arguments to filter ForumQuestions to count.
     * @example
     * // Count the number of ForumQuestions
     * const count = await prisma.forumQuestion.count({
     *   where: {
     *     // ... the filter for the ForumQuestions we want to count
     *   }
     * })
    **/
    count<T extends ForumQuestionCountArgs>(args?: Prisma.Subset<T, ForumQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ForumQuestionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ForumQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumQuestionAggregateArgs>(args: Prisma.Subset<T, ForumQuestionAggregateArgs>): Prisma.PrismaPromise<GetForumQuestionAggregateType<T>>;
    /**
     * Group by ForumQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ForumQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ForumQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: ForumQuestionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ForumQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ForumQuestion model
     */
    readonly fields: ForumQuestionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ForumQuestion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ForumQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.ForumQuestion$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumQuestion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.ForumQuestion$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumQuestion$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    votes<T extends Prisma.ForumQuestion$votesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumQuestion$votesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reports<T extends Prisma.ForumQuestion$reportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumQuestion$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookmarks<T extends Prisma.ForumQuestion$bookmarksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumQuestion$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ForumQuestion model
 */
export interface ForumQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"ForumQuestion", 'String'>;
    readonly authorId: Prisma.FieldRef<"ForumQuestion", 'String'>;
    readonly title: Prisma.FieldRef<"ForumQuestion", 'String'>;
    readonly slug: Prisma.FieldRef<"ForumQuestion", 'String'>;
    readonly content: Prisma.FieldRef<"ForumQuestion", 'String'>;
    readonly tags: Prisma.FieldRef<"ForumQuestion", 'String[]'>;
    readonly viewCount: Prisma.FieldRef<"ForumQuestion", 'Int'>;
    readonly voteScore: Prisma.FieldRef<"ForumQuestion", 'Int'>;
    readonly answerCount: Prisma.FieldRef<"ForumQuestion", 'Int'>;
    readonly isLocked: Prisma.FieldRef<"ForumQuestion", 'Boolean'>;
    readonly isPinned: Prisma.FieldRef<"ForumQuestion", 'Boolean'>;
    readonly isSolved: Prisma.FieldRef<"ForumQuestion", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"ForumQuestion", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ForumQuestion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ForumQuestion", 'DateTime'>;
}
/**
 * ForumQuestion findUnique
 */
export type ForumQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which ForumQuestion to fetch.
     */
    where: Prisma.ForumQuestionWhereUniqueInput;
};
/**
 * ForumQuestion findUniqueOrThrow
 */
export type ForumQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which ForumQuestion to fetch.
     */
    where: Prisma.ForumQuestionWhereUniqueInput;
};
/**
 * ForumQuestion findFirst
 */
export type ForumQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which ForumQuestion to fetch.
     */
    where?: Prisma.ForumQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumQuestions to fetch.
     */
    orderBy?: Prisma.ForumQuestionOrderByWithRelationInput | Prisma.ForumQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ForumQuestions.
     */
    cursor?: Prisma.ForumQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumQuestions.
     */
    distinct?: Prisma.ForumQuestionScalarFieldEnum | Prisma.ForumQuestionScalarFieldEnum[];
};
/**
 * ForumQuestion findFirstOrThrow
 */
export type ForumQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which ForumQuestion to fetch.
     */
    where?: Prisma.ForumQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumQuestions to fetch.
     */
    orderBy?: Prisma.ForumQuestionOrderByWithRelationInput | Prisma.ForumQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ForumQuestions.
     */
    cursor?: Prisma.ForumQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumQuestions.
     */
    distinct?: Prisma.ForumQuestionScalarFieldEnum | Prisma.ForumQuestionScalarFieldEnum[];
};
/**
 * ForumQuestion findMany
 */
export type ForumQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which ForumQuestions to fetch.
     */
    where?: Prisma.ForumQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumQuestions to fetch.
     */
    orderBy?: Prisma.ForumQuestionOrderByWithRelationInput | Prisma.ForumQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ForumQuestions.
     */
    cursor?: Prisma.ForumQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumQuestions.
     */
    distinct?: Prisma.ForumQuestionScalarFieldEnum | Prisma.ForumQuestionScalarFieldEnum[];
};
/**
 * ForumQuestion create
 */
export type ForumQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * The data needed to create a ForumQuestion.
     */
    data: Prisma.XOR<Prisma.ForumQuestionCreateInput, Prisma.ForumQuestionUncheckedCreateInput>;
};
/**
 * ForumQuestion createMany
 */
export type ForumQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumQuestions.
     */
    data: Prisma.ForumQuestionCreateManyInput | Prisma.ForumQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ForumQuestion createManyAndReturn
 */
export type ForumQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * The data used to create many ForumQuestions.
     */
    data: Prisma.ForumQuestionCreateManyInput | Prisma.ForumQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ForumQuestion update
 */
export type ForumQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * The data needed to update a ForumQuestion.
     */
    data: Prisma.XOR<Prisma.ForumQuestionUpdateInput, Prisma.ForumQuestionUncheckedUpdateInput>;
    /**
     * Choose, which ForumQuestion to update.
     */
    where: Prisma.ForumQuestionWhereUniqueInput;
};
/**
 * ForumQuestion updateMany
 */
export type ForumQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumQuestions.
     */
    data: Prisma.XOR<Prisma.ForumQuestionUpdateManyMutationInput, Prisma.ForumQuestionUncheckedUpdateManyInput>;
    /**
     * Filter which ForumQuestions to update
     */
    where?: Prisma.ForumQuestionWhereInput;
    /**
     * Limit how many ForumQuestions to update.
     */
    limit?: number;
};
/**
 * ForumQuestion updateManyAndReturn
 */
export type ForumQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * The data used to update ForumQuestions.
     */
    data: Prisma.XOR<Prisma.ForumQuestionUpdateManyMutationInput, Prisma.ForumQuestionUncheckedUpdateManyInput>;
    /**
     * Filter which ForumQuestions to update
     */
    where?: Prisma.ForumQuestionWhereInput;
    /**
     * Limit how many ForumQuestions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ForumQuestion upsert
 */
export type ForumQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * The filter to search for the ForumQuestion to update in case it exists.
     */
    where: Prisma.ForumQuestionWhereUniqueInput;
    /**
     * In case the ForumQuestion found by the `where` argument doesn't exist, create a new ForumQuestion with this data.
     */
    create: Prisma.XOR<Prisma.ForumQuestionCreateInput, Prisma.ForumQuestionUncheckedCreateInput>;
    /**
     * In case the ForumQuestion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ForumQuestionUpdateInput, Prisma.ForumQuestionUncheckedUpdateInput>;
};
/**
 * ForumQuestion delete
 */
export type ForumQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
    /**
     * Filter which ForumQuestion to delete.
     */
    where: Prisma.ForumQuestionWhereUniqueInput;
};
/**
 * ForumQuestion deleteMany
 */
export type ForumQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ForumQuestions to delete
     */
    where?: Prisma.ForumQuestionWhereInput;
    /**
     * Limit how many ForumQuestions to delete.
     */
    limit?: number;
};
/**
 * ForumQuestion.answers
 */
export type ForumQuestion$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumAnswer
     */
    select?: Prisma.ForumAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumAnswer
     */
    omit?: Prisma.ForumAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumAnswerInclude<ExtArgs> | null;
    where?: Prisma.ForumAnswerWhereInput;
    orderBy?: Prisma.ForumAnswerOrderByWithRelationInput | Prisma.ForumAnswerOrderByWithRelationInput[];
    cursor?: Prisma.ForumAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ForumAnswerScalarFieldEnum | Prisma.ForumAnswerScalarFieldEnum[];
};
/**
 * ForumQuestion.comments
 */
export type ForumQuestion$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: Prisma.ForumCommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: Prisma.ForumCommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumCommentInclude<ExtArgs> | null;
    where?: Prisma.ForumCommentWhereInput;
    orderBy?: Prisma.ForumCommentOrderByWithRelationInput | Prisma.ForumCommentOrderByWithRelationInput[];
    cursor?: Prisma.ForumCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ForumCommentScalarFieldEnum | Prisma.ForumCommentScalarFieldEnum[];
};
/**
 * ForumQuestion.votes
 */
export type ForumQuestion$votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumVote
     */
    select?: Prisma.ForumVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumVote
     */
    omit?: Prisma.ForumVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumVoteInclude<ExtArgs> | null;
    where?: Prisma.ForumVoteWhereInput;
    orderBy?: Prisma.ForumVoteOrderByWithRelationInput | Prisma.ForumVoteOrderByWithRelationInput[];
    cursor?: Prisma.ForumVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ForumVoteScalarFieldEnum | Prisma.ForumVoteScalarFieldEnum[];
};
/**
 * ForumQuestion.reports
 */
export type ForumQuestion$reportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReport
     */
    select?: Prisma.ForumReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumReport
     */
    omit?: Prisma.ForumReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumReportInclude<ExtArgs> | null;
    where?: Prisma.ForumReportWhereInput;
    orderBy?: Prisma.ForumReportOrderByWithRelationInput | Prisma.ForumReportOrderByWithRelationInput[];
    cursor?: Prisma.ForumReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ForumReportScalarFieldEnum | Prisma.ForumReportScalarFieldEnum[];
};
/**
 * ForumQuestion.bookmarks
 */
export type ForumQuestion$bookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumBookmark
     */
    select?: Prisma.ForumBookmarkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumBookmark
     */
    omit?: Prisma.ForumBookmarkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumBookmarkInclude<ExtArgs> | null;
    where?: Prisma.ForumBookmarkWhereInput;
    orderBy?: Prisma.ForumBookmarkOrderByWithRelationInput | Prisma.ForumBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.ForumBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ForumBookmarkScalarFieldEnum | Prisma.ForumBookmarkScalarFieldEnum[];
};
/**
 * ForumQuestion without action
 */
export type ForumQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumQuestion
     */
    select?: Prisma.ForumQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumQuestion
     */
    omit?: Prisma.ForumQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumQuestionInclude<ExtArgs> | null;
};
//# sourceMappingURL=ForumQuestion.d.ts.map