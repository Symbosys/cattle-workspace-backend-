import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ForumAnswer
 *
 */
export type ForumAnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$ForumAnswerPayload>;
export type AggregateForumAnswer = {
    _count: ForumAnswerCountAggregateOutputType | null;
    _avg: ForumAnswerAvgAggregateOutputType | null;
    _sum: ForumAnswerSumAggregateOutputType | null;
    _min: ForumAnswerMinAggregateOutputType | null;
    _max: ForumAnswerMaxAggregateOutputType | null;
};
export type ForumAnswerAvgAggregateOutputType = {
    voteScore: number | null;
};
export type ForumAnswerSumAggregateOutputType = {
    voteScore: number | null;
};
export type ForumAnswerMinAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    authorId: string | null;
    content: string | null;
    isAccepted: boolean | null;
    voteScore: number | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ForumAnswerMaxAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    authorId: string | null;
    content: string | null;
    isAccepted: boolean | null;
    voteScore: number | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ForumAnswerCountAggregateOutputType = {
    id: number;
    questionId: number;
    authorId: number;
    content: number;
    isAccepted: number;
    voteScore: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ForumAnswerAvgAggregateInputType = {
    voteScore?: true;
};
export type ForumAnswerSumAggregateInputType = {
    voteScore?: true;
};
export type ForumAnswerMinAggregateInputType = {
    id?: true;
    questionId?: true;
    authorId?: true;
    content?: true;
    isAccepted?: true;
    voteScore?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ForumAnswerMaxAggregateInputType = {
    id?: true;
    questionId?: true;
    authorId?: true;
    content?: true;
    isAccepted?: true;
    voteScore?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ForumAnswerCountAggregateInputType = {
    id?: true;
    questionId?: true;
    authorId?: true;
    content?: true;
    isAccepted?: true;
    voteScore?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ForumAnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ForumAnswer to aggregate.
     */
    where?: Prisma.ForumAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumAnswers to fetch.
     */
    orderBy?: Prisma.ForumAnswerOrderByWithRelationInput | Prisma.ForumAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ForumAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ForumAnswers
    **/
    _count?: true | ForumAnswerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ForumAnswerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ForumAnswerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ForumAnswerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ForumAnswerMaxAggregateInputType;
};
export type GetForumAnswerAggregateType<T extends ForumAnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateForumAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateForumAnswer[P]> : Prisma.GetScalarType<T[P], AggregateForumAnswer[P]>;
};
export type ForumAnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumAnswerWhereInput;
    orderBy?: Prisma.ForumAnswerOrderByWithAggregationInput | Prisma.ForumAnswerOrderByWithAggregationInput[];
    by: Prisma.ForumAnswerScalarFieldEnum[] | Prisma.ForumAnswerScalarFieldEnum;
    having?: Prisma.ForumAnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ForumAnswerCountAggregateInputType | true;
    _avg?: ForumAnswerAvgAggregateInputType;
    _sum?: ForumAnswerSumAggregateInputType;
    _min?: ForumAnswerMinAggregateInputType;
    _max?: ForumAnswerMaxAggregateInputType;
};
export type ForumAnswerGroupByOutputType = {
    id: string;
    questionId: string;
    authorId: string;
    content: string;
    isAccepted: boolean;
    voteScore: number;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ForumAnswerCountAggregateOutputType | null;
    _avg: ForumAnswerAvgAggregateOutputType | null;
    _sum: ForumAnswerSumAggregateOutputType | null;
    _min: ForumAnswerMinAggregateOutputType | null;
    _max: ForumAnswerMaxAggregateOutputType | null;
};
export type GetForumAnswerGroupByPayload<T extends ForumAnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ForumAnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ForumAnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ForumAnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ForumAnswerGroupByOutputType[P]>;
}>>;
export type ForumAnswerWhereInput = {
    AND?: Prisma.ForumAnswerWhereInput | Prisma.ForumAnswerWhereInput[];
    OR?: Prisma.ForumAnswerWhereInput[];
    NOT?: Prisma.ForumAnswerWhereInput | Prisma.ForumAnswerWhereInput[];
    id?: Prisma.StringFilter<"ForumAnswer"> | string;
    questionId?: Prisma.StringFilter<"ForumAnswer"> | string;
    authorId?: Prisma.StringFilter<"ForumAnswer"> | string;
    content?: Prisma.StringFilter<"ForumAnswer"> | string;
    isAccepted?: Prisma.BoolFilter<"ForumAnswer"> | boolean;
    voteScore?: Prisma.IntFilter<"ForumAnswer"> | number;
    deletedAt?: Prisma.DateTimeNullableFilter<"ForumAnswer"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ForumAnswer"> | Date | string;
    question?: Prisma.XOR<Prisma.ForumQuestionScalarRelationFilter, Prisma.ForumQuestionWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    comments?: Prisma.ForumCommentListRelationFilter;
    votes?: Prisma.ForumVoteListRelationFilter;
    reports?: Prisma.ForumReportListRelationFilter;
};
export type ForumAnswerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isAccepted?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    question?: Prisma.ForumQuestionOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
    comments?: Prisma.ForumCommentOrderByRelationAggregateInput;
    votes?: Prisma.ForumVoteOrderByRelationAggregateInput;
    reports?: Prisma.ForumReportOrderByRelationAggregateInput;
};
export type ForumAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ForumAnswerWhereInput | Prisma.ForumAnswerWhereInput[];
    OR?: Prisma.ForumAnswerWhereInput[];
    NOT?: Prisma.ForumAnswerWhereInput | Prisma.ForumAnswerWhereInput[];
    questionId?: Prisma.StringFilter<"ForumAnswer"> | string;
    authorId?: Prisma.StringFilter<"ForumAnswer"> | string;
    content?: Prisma.StringFilter<"ForumAnswer"> | string;
    isAccepted?: Prisma.BoolFilter<"ForumAnswer"> | boolean;
    voteScore?: Prisma.IntFilter<"ForumAnswer"> | number;
    deletedAt?: Prisma.DateTimeNullableFilter<"ForumAnswer"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ForumAnswer"> | Date | string;
    question?: Prisma.XOR<Prisma.ForumQuestionScalarRelationFilter, Prisma.ForumQuestionWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    comments?: Prisma.ForumCommentListRelationFilter;
    votes?: Prisma.ForumVoteListRelationFilter;
    reports?: Prisma.ForumReportListRelationFilter;
}, "id">;
export type ForumAnswerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isAccepted?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ForumAnswerCountOrderByAggregateInput;
    _avg?: Prisma.ForumAnswerAvgOrderByAggregateInput;
    _max?: Prisma.ForumAnswerMaxOrderByAggregateInput;
    _min?: Prisma.ForumAnswerMinOrderByAggregateInput;
    _sum?: Prisma.ForumAnswerSumOrderByAggregateInput;
};
export type ForumAnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.ForumAnswerScalarWhereWithAggregatesInput | Prisma.ForumAnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.ForumAnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ForumAnswerScalarWhereWithAggregatesInput | Prisma.ForumAnswerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ForumAnswer"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"ForumAnswer"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"ForumAnswer"> | string;
    content?: Prisma.StringWithAggregatesFilter<"ForumAnswer"> | string;
    isAccepted?: Prisma.BoolWithAggregatesFilter<"ForumAnswer"> | boolean;
    voteScore?: Prisma.IntWithAggregatesFilter<"ForumAnswer"> | number;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ForumAnswer"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ForumAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ForumAnswer"> | Date | string;
};
export type ForumAnswerCreateInput = {
    id?: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    question: Prisma.ForumQuestionCreateNestedOneWithoutAnswersInput;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerUncheckedCreateInput = {
    id?: string;
    questionId: string;
    authorId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.ForumQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerCreateManyInput = {
    id?: string;
    questionId: string;
    authorId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ForumAnswerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumAnswerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumAnswerListRelationFilter = {
    every?: Prisma.ForumAnswerWhereInput;
    some?: Prisma.ForumAnswerWhereInput;
    none?: Prisma.ForumAnswerWhereInput;
};
export type ForumAnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ForumAnswerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isAccepted?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ForumAnswerAvgOrderByAggregateInput = {
    voteScore?: Prisma.SortOrder;
};
export type ForumAnswerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isAccepted?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ForumAnswerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isAccepted?: Prisma.SortOrder;
    voteScore?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ForumAnswerSumOrderByAggregateInput = {
    voteScore?: Prisma.SortOrder;
};
export type ForumAnswerNullableScalarRelationFilter = {
    is?: Prisma.ForumAnswerWhereInput | null;
    isNot?: Prisma.ForumAnswerWhereInput | null;
};
export type ForumAnswerCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutQuestionInput, Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput> | Prisma.ForumAnswerCreateWithoutQuestionInput[] | Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput | Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.ForumAnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
};
export type ForumAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutQuestionInput, Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput> | Prisma.ForumAnswerCreateWithoutQuestionInput[] | Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput | Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.ForumAnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
};
export type ForumAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutQuestionInput, Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput> | Prisma.ForumAnswerCreateWithoutQuestionInput[] | Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput | Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.ForumAnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.ForumAnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.ForumAnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    disconnect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    delete?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    update?: Prisma.ForumAnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.ForumAnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.ForumAnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.ForumAnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.ForumAnswerScalarWhereInput | Prisma.ForumAnswerScalarWhereInput[];
};
export type ForumAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutQuestionInput, Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput> | Prisma.ForumAnswerCreateWithoutQuestionInput[] | Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput | Prisma.ForumAnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.ForumAnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.ForumAnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.ForumAnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    disconnect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    delete?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    update?: Prisma.ForumAnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.ForumAnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.ForumAnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.ForumAnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.ForumAnswerScalarWhereInput | Prisma.ForumAnswerScalarWhereInput[];
};
export type ForumAnswerCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutCommentsInput, Prisma.ForumAnswerUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.ForumAnswerWhereUniqueInput;
};
export type ForumAnswerUpdateOneWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutCommentsInput, Prisma.ForumAnswerUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.ForumAnswerUpsertWithoutCommentsInput;
    disconnect?: Prisma.ForumAnswerWhereInput | boolean;
    delete?: Prisma.ForumAnswerWhereInput | boolean;
    connect?: Prisma.ForumAnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumAnswerUpdateToOneWithWhereWithoutCommentsInput, Prisma.ForumAnswerUpdateWithoutCommentsInput>, Prisma.ForumAnswerUncheckedUpdateWithoutCommentsInput>;
};
export type ForumAnswerCreateNestedOneWithoutVotesInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutVotesInput, Prisma.ForumAnswerUncheckedCreateWithoutVotesInput>;
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutVotesInput;
    connect?: Prisma.ForumAnswerWhereUniqueInput;
};
export type ForumAnswerUpdateOneWithoutVotesNestedInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutVotesInput, Prisma.ForumAnswerUncheckedCreateWithoutVotesInput>;
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutVotesInput;
    upsert?: Prisma.ForumAnswerUpsertWithoutVotesInput;
    disconnect?: Prisma.ForumAnswerWhereInput | boolean;
    delete?: Prisma.ForumAnswerWhereInput | boolean;
    connect?: Prisma.ForumAnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumAnswerUpdateToOneWithWhereWithoutVotesInput, Prisma.ForumAnswerUpdateWithoutVotesInput>, Prisma.ForumAnswerUncheckedUpdateWithoutVotesInput>;
};
export type ForumAnswerCreateNestedOneWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutReportsInput, Prisma.ForumAnswerUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutReportsInput;
    connect?: Prisma.ForumAnswerWhereUniqueInput;
};
export type ForumAnswerUpdateOneWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutReportsInput, Prisma.ForumAnswerUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutReportsInput;
    upsert?: Prisma.ForumAnswerUpsertWithoutReportsInput;
    disconnect?: Prisma.ForumAnswerWhereInput | boolean;
    delete?: Prisma.ForumAnswerWhereInput | boolean;
    connect?: Prisma.ForumAnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ForumAnswerUpdateToOneWithWhereWithoutReportsInput, Prisma.ForumAnswerUpdateWithoutReportsInput>, Prisma.ForumAnswerUncheckedUpdateWithoutReportsInput>;
};
export type ForumAnswerCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutAuthorInput, Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput> | Prisma.ForumAnswerCreateWithoutAuthorInput[] | Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput | Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ForumAnswerCreateManyAuthorInputEnvelope;
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
};
export type ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutAuthorInput, Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput> | Prisma.ForumAnswerCreateWithoutAuthorInput[] | Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput | Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ForumAnswerCreateManyAuthorInputEnvelope;
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
};
export type ForumAnswerUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutAuthorInput, Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput> | Prisma.ForumAnswerCreateWithoutAuthorInput[] | Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput | Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ForumAnswerCreateManyAuthorInputEnvelope;
    set?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    disconnect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    delete?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    update?: Prisma.ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ForumAnswerUpdateManyWithWhereWithoutAuthorInput | Prisma.ForumAnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ForumAnswerScalarWhereInput | Prisma.ForumAnswerScalarWhereInput[];
};
export type ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ForumAnswerCreateWithoutAuthorInput, Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput> | Prisma.ForumAnswerCreateWithoutAuthorInput[] | Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput | Prisma.ForumAnswerCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ForumAnswerCreateManyAuthorInputEnvelope;
    set?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    disconnect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    delete?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    connect?: Prisma.ForumAnswerWhereUniqueInput | Prisma.ForumAnswerWhereUniqueInput[];
    update?: Prisma.ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ForumAnswerUpdateManyWithWhereWithoutAuthorInput | Prisma.ForumAnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ForumAnswerScalarWhereInput | Prisma.ForumAnswerScalarWhereInput[];
};
export type ForumAnswerCreateWithoutQuestionInput = {
    id?: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string;
    authorId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerCreateOrConnectWithoutQuestionInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutQuestionInput, Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput>;
};
export type ForumAnswerCreateManyQuestionInputEnvelope = {
    data: Prisma.ForumAnswerCreateManyQuestionInput | Prisma.ForumAnswerCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type ForumAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutQuestionInput, Prisma.ForumAnswerUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutQuestionInput, Prisma.ForumAnswerUncheckedCreateWithoutQuestionInput>;
};
export type ForumAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutQuestionInput, Prisma.ForumAnswerUncheckedUpdateWithoutQuestionInput>;
};
export type ForumAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.ForumAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.ForumAnswerUpdateManyMutationInput, Prisma.ForumAnswerUncheckedUpdateManyWithoutQuestionInput>;
};
export type ForumAnswerScalarWhereInput = {
    AND?: Prisma.ForumAnswerScalarWhereInput | Prisma.ForumAnswerScalarWhereInput[];
    OR?: Prisma.ForumAnswerScalarWhereInput[];
    NOT?: Prisma.ForumAnswerScalarWhereInput | Prisma.ForumAnswerScalarWhereInput[];
    id?: Prisma.StringFilter<"ForumAnswer"> | string;
    questionId?: Prisma.StringFilter<"ForumAnswer"> | string;
    authorId?: Prisma.StringFilter<"ForumAnswer"> | string;
    content?: Prisma.StringFilter<"ForumAnswer"> | string;
    isAccepted?: Prisma.BoolFilter<"ForumAnswer"> | boolean;
    voteScore?: Prisma.IntFilter<"ForumAnswer"> | number;
    deletedAt?: Prisma.DateTimeNullableFilter<"ForumAnswer"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ForumAnswer"> | Date | string;
};
export type ForumAnswerCreateWithoutCommentsInput = {
    id?: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    question: Prisma.ForumQuestionCreateNestedOneWithoutAnswersInput;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerUncheckedCreateWithoutCommentsInput = {
    id?: string;
    questionId: string;
    authorId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerCreateOrConnectWithoutCommentsInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutCommentsInput, Prisma.ForumAnswerUncheckedCreateWithoutCommentsInput>;
};
export type ForumAnswerUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutCommentsInput, Prisma.ForumAnswerUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutCommentsInput, Prisma.ForumAnswerUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.ForumAnswerWhereInput;
};
export type ForumAnswerUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.ForumAnswerWhereInput;
    data: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutCommentsInput, Prisma.ForumAnswerUncheckedUpdateWithoutCommentsInput>;
};
export type ForumAnswerUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.ForumQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerCreateWithoutVotesInput = {
    id?: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    question: Prisma.ForumQuestionCreateNestedOneWithoutAnswersInput;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerUncheckedCreateWithoutVotesInput = {
    id?: string;
    questionId: string;
    authorId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerCreateOrConnectWithoutVotesInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutVotesInput, Prisma.ForumAnswerUncheckedCreateWithoutVotesInput>;
};
export type ForumAnswerUpsertWithoutVotesInput = {
    update: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutVotesInput, Prisma.ForumAnswerUncheckedUpdateWithoutVotesInput>;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutVotesInput, Prisma.ForumAnswerUncheckedCreateWithoutVotesInput>;
    where?: Prisma.ForumAnswerWhereInput;
};
export type ForumAnswerUpdateToOneWithWhereWithoutVotesInput = {
    where?: Prisma.ForumAnswerWhereInput;
    data: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutVotesInput, Prisma.ForumAnswerUncheckedUpdateWithoutVotesInput>;
};
export type ForumAnswerUpdateWithoutVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.ForumQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateWithoutVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerCreateWithoutReportsInput = {
    id?: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    question: Prisma.ForumQuestionCreateNestedOneWithoutAnswersInput;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerUncheckedCreateWithoutReportsInput = {
    id?: string;
    questionId: string;
    authorId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerCreateOrConnectWithoutReportsInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutReportsInput, Prisma.ForumAnswerUncheckedCreateWithoutReportsInput>;
};
export type ForumAnswerUpsertWithoutReportsInput = {
    update: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutReportsInput, Prisma.ForumAnswerUncheckedUpdateWithoutReportsInput>;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutReportsInput, Prisma.ForumAnswerUncheckedCreateWithoutReportsInput>;
    where?: Prisma.ForumAnswerWhereInput;
};
export type ForumAnswerUpdateToOneWithWhereWithoutReportsInput = {
    where?: Prisma.ForumAnswerWhereInput;
    data: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutReportsInput, Prisma.ForumAnswerUncheckedUpdateWithoutReportsInput>;
};
export type ForumAnswerUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.ForumQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    question: Prisma.ForumQuestionCreateNestedOneWithoutAnswersInput;
    comments?: Prisma.ForumCommentCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerUncheckedCreateWithoutAuthorInput = {
    id?: string;
    questionId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.ForumCommentUncheckedCreateNestedManyWithoutAnswerInput;
    votes?: Prisma.ForumVoteUncheckedCreateNestedManyWithoutAnswerInput;
    reports?: Prisma.ForumReportUncheckedCreateNestedManyWithoutAnswerInput;
};
export type ForumAnswerCreateOrConnectWithoutAuthorInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutAuthorInput, Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput>;
};
export type ForumAnswerCreateManyAuthorInputEnvelope = {
    data: Prisma.ForumAnswerCreateManyAuthorInput | Prisma.ForumAnswerCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutAuthorInput, Prisma.ForumAnswerUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.ForumAnswerCreateWithoutAuthorInput, Prisma.ForumAnswerUncheckedCreateWithoutAuthorInput>;
};
export type ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ForumAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ForumAnswerUpdateWithoutAuthorInput, Prisma.ForumAnswerUncheckedUpdateWithoutAuthorInput>;
};
export type ForumAnswerUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.ForumAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.ForumAnswerUpdateManyMutationInput, Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
};
export type ForumAnswerCreateManyQuestionInput = {
    id?: string;
    authorId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ForumAnswerUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumAnswerCreateManyAuthorInput = {
    id?: string;
    questionId: string;
    content: string;
    isAccepted?: boolean;
    voteScore?: number;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ForumAnswerUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.ForumQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    comments?: Prisma.ForumCommentUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.ForumCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    votes?: Prisma.ForumVoteUncheckedUpdateManyWithoutAnswerNestedInput;
    reports?: Prisma.ForumReportUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type ForumAnswerUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    voteScore?: Prisma.IntFieldUpdateOperationsInput | number;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ForumAnswerCountOutputType
 */
export type ForumAnswerCountOutputType = {
    comments: number;
    votes: number;
    reports: number;
};
export type ForumAnswerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | ForumAnswerCountOutputTypeCountCommentsArgs;
    votes?: boolean | ForumAnswerCountOutputTypeCountVotesArgs;
    reports?: boolean | ForumAnswerCountOutputTypeCountReportsArgs;
};
/**
 * ForumAnswerCountOutputType without action
 */
export type ForumAnswerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumAnswerCountOutputType
     */
    select?: Prisma.ForumAnswerCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ForumAnswerCountOutputType without action
 */
export type ForumAnswerCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumCommentWhereInput;
};
/**
 * ForumAnswerCountOutputType without action
 */
export type ForumAnswerCountOutputTypeCountVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumVoteWhereInput;
};
/**
 * ForumAnswerCountOutputType without action
 */
export type ForumAnswerCountOutputTypeCountReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumReportWhereInput;
};
export type ForumAnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    authorId?: boolean;
    content?: boolean;
    isAccepted?: boolean;
    voteScore?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    question?: boolean | Prisma.ForumQuestionDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    comments?: boolean | Prisma.ForumAnswer$commentsArgs<ExtArgs>;
    votes?: boolean | Prisma.ForumAnswer$votesArgs<ExtArgs>;
    reports?: boolean | Prisma.ForumAnswer$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.ForumAnswerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["forumAnswer"]>;
export type ForumAnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    authorId?: boolean;
    content?: boolean;
    isAccepted?: boolean;
    voteScore?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    question?: boolean | Prisma.ForumQuestionDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["forumAnswer"]>;
export type ForumAnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    authorId?: boolean;
    content?: boolean;
    isAccepted?: boolean;
    voteScore?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    question?: boolean | Prisma.ForumQuestionDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["forumAnswer"]>;
export type ForumAnswerSelectScalar = {
    id?: boolean;
    questionId?: boolean;
    authorId?: boolean;
    content?: boolean;
    isAccepted?: boolean;
    voteScore?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ForumAnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "questionId" | "authorId" | "content" | "isAccepted" | "voteScore" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["forumAnswer"]>;
export type ForumAnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.ForumQuestionDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    comments?: boolean | Prisma.ForumAnswer$commentsArgs<ExtArgs>;
    votes?: boolean | Prisma.ForumAnswer$votesArgs<ExtArgs>;
    reports?: boolean | Prisma.ForumAnswer$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.ForumAnswerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ForumAnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.ForumQuestionDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ForumAnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.ForumQuestionDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ForumAnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ForumAnswer";
    objects: {
        question: Prisma.$ForumQuestionPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
        comments: Prisma.$ForumCommentPayload<ExtArgs>[];
        votes: Prisma.$ForumVotePayload<ExtArgs>[];
        reports: Prisma.$ForumReportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        questionId: string;
        authorId: string;
        content: string;
        isAccepted: boolean;
        voteScore: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["forumAnswer"]>;
    composites: {};
};
export type ForumAnswerGetPayload<S extends boolean | null | undefined | ForumAnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload, S>;
export type ForumAnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ForumAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ForumAnswerCountAggregateInputType | true;
};
export interface ForumAnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ForumAnswer'];
        meta: {
            name: 'ForumAnswer';
        };
    };
    /**
     * Find zero or one ForumAnswer that matches the filter.
     * @param {ForumAnswerFindUniqueArgs} args - Arguments to find a ForumAnswer
     * @example
     * // Get one ForumAnswer
     * const forumAnswer = await prisma.forumAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumAnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, ForumAnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ForumAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumAnswerFindUniqueOrThrowArgs} args - Arguments to find a ForumAnswer
     * @example
     * // Get one ForumAnswer
     * const forumAnswer = await prisma.forumAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumAnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ForumAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ForumAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAnswerFindFirstArgs} args - Arguments to find a ForumAnswer
     * @example
     * // Get one ForumAnswer
     * const forumAnswer = await prisma.forumAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumAnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, ForumAnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ForumAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAnswerFindFirstOrThrowArgs} args - Arguments to find a ForumAnswer
     * @example
     * // Get one ForumAnswer
     * const forumAnswer = await prisma.forumAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumAnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ForumAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ForumAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumAnswers
     * const forumAnswers = await prisma.forumAnswer.findMany()
     *
     * // Get first 10 ForumAnswers
     * const forumAnswers = await prisma.forumAnswer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const forumAnswerWithIdOnly = await prisma.forumAnswer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ForumAnswerFindManyArgs>(args?: Prisma.SelectSubset<T, ForumAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ForumAnswer.
     * @param {ForumAnswerCreateArgs} args - Arguments to create a ForumAnswer.
     * @example
     * // Create one ForumAnswer
     * const ForumAnswer = await prisma.forumAnswer.create({
     *   data: {
     *     // ... data to create a ForumAnswer
     *   }
     * })
     *
     */
    create<T extends ForumAnswerCreateArgs>(args: Prisma.SelectSubset<T, ForumAnswerCreateArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ForumAnswers.
     * @param {ForumAnswerCreateManyArgs} args - Arguments to create many ForumAnswers.
     * @example
     * // Create many ForumAnswers
     * const forumAnswer = await prisma.forumAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ForumAnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, ForumAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ForumAnswers and returns the data saved in the database.
     * @param {ForumAnswerCreateManyAndReturnArgs} args - Arguments to create many ForumAnswers.
     * @example
     * // Create many ForumAnswers
     * const forumAnswer = await prisma.forumAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ForumAnswers and only return the `id`
     * const forumAnswerWithIdOnly = await prisma.forumAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ForumAnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ForumAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ForumAnswer.
     * @param {ForumAnswerDeleteArgs} args - Arguments to delete one ForumAnswer.
     * @example
     * // Delete one ForumAnswer
     * const ForumAnswer = await prisma.forumAnswer.delete({
     *   where: {
     *     // ... filter to delete one ForumAnswer
     *   }
     * })
     *
     */
    delete<T extends ForumAnswerDeleteArgs>(args: Prisma.SelectSubset<T, ForumAnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ForumAnswer.
     * @param {ForumAnswerUpdateArgs} args - Arguments to update one ForumAnswer.
     * @example
     * // Update one ForumAnswer
     * const forumAnswer = await prisma.forumAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ForumAnswerUpdateArgs>(args: Prisma.SelectSubset<T, ForumAnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ForumAnswers.
     * @param {ForumAnswerDeleteManyArgs} args - Arguments to filter ForumAnswers to delete.
     * @example
     * // Delete a few ForumAnswers
     * const { count } = await prisma.forumAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ForumAnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ForumAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ForumAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumAnswers
     * const forumAnswer = await prisma.forumAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ForumAnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, ForumAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ForumAnswers and returns the data updated in the database.
     * @param {ForumAnswerUpdateManyAndReturnArgs} args - Arguments to update many ForumAnswers.
     * @example
     * // Update many ForumAnswers
     * const forumAnswer = await prisma.forumAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ForumAnswers and only return the `id`
     * const forumAnswerWithIdOnly = await prisma.forumAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumAnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ForumAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ForumAnswer.
     * @param {ForumAnswerUpsertArgs} args - Arguments to update or create a ForumAnswer.
     * @example
     * // Update or create a ForumAnswer
     * const forumAnswer = await prisma.forumAnswer.upsert({
     *   create: {
     *     // ... data to create a ForumAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumAnswer we want to update
     *   }
     * })
     */
    upsert<T extends ForumAnswerUpsertArgs>(args: Prisma.SelectSubset<T, ForumAnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ForumAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAnswerCountArgs} args - Arguments to filter ForumAnswers to count.
     * @example
     * // Count the number of ForumAnswers
     * const count = await prisma.forumAnswer.count({
     *   where: {
     *     // ... the filter for the ForumAnswers we want to count
     *   }
     * })
    **/
    count<T extends ForumAnswerCountArgs>(args?: Prisma.Subset<T, ForumAnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ForumAnswerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ForumAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumAnswerAggregateArgs>(args: Prisma.Subset<T, ForumAnswerAggregateArgs>): Prisma.PrismaPromise<GetForumAnswerAggregateType<T>>;
    /**
     * Group by ForumAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAnswerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ForumAnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ForumAnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: ForumAnswerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ForumAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ForumAnswer model
     */
    readonly fields: ForumAnswerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ForumAnswer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ForumAnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    question<T extends Prisma.ForumQuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumQuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comments<T extends Prisma.ForumAnswer$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumAnswer$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    votes<T extends Prisma.ForumAnswer$votesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumAnswer$votesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reports<T extends Prisma.ForumAnswer$reportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumAnswer$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ForumAnswer model
 */
export interface ForumAnswerFieldRefs {
    readonly id: Prisma.FieldRef<"ForumAnswer", 'String'>;
    readonly questionId: Prisma.FieldRef<"ForumAnswer", 'String'>;
    readonly authorId: Prisma.FieldRef<"ForumAnswer", 'String'>;
    readonly content: Prisma.FieldRef<"ForumAnswer", 'String'>;
    readonly isAccepted: Prisma.FieldRef<"ForumAnswer", 'Boolean'>;
    readonly voteScore: Prisma.FieldRef<"ForumAnswer", 'Int'>;
    readonly deletedAt: Prisma.FieldRef<"ForumAnswer", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ForumAnswer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ForumAnswer", 'DateTime'>;
}
/**
 * ForumAnswer findUnique
 */
export type ForumAnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumAnswer to fetch.
     */
    where: Prisma.ForumAnswerWhereUniqueInput;
};
/**
 * ForumAnswer findUniqueOrThrow
 */
export type ForumAnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumAnswer to fetch.
     */
    where: Prisma.ForumAnswerWhereUniqueInput;
};
/**
 * ForumAnswer findFirst
 */
export type ForumAnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumAnswer to fetch.
     */
    where?: Prisma.ForumAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumAnswers to fetch.
     */
    orderBy?: Prisma.ForumAnswerOrderByWithRelationInput | Prisma.ForumAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ForumAnswers.
     */
    cursor?: Prisma.ForumAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumAnswers.
     */
    distinct?: Prisma.ForumAnswerScalarFieldEnum | Prisma.ForumAnswerScalarFieldEnum[];
};
/**
 * ForumAnswer findFirstOrThrow
 */
export type ForumAnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumAnswer to fetch.
     */
    where?: Prisma.ForumAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumAnswers to fetch.
     */
    orderBy?: Prisma.ForumAnswerOrderByWithRelationInput | Prisma.ForumAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ForumAnswers.
     */
    cursor?: Prisma.ForumAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumAnswers.
     */
    distinct?: Prisma.ForumAnswerScalarFieldEnum | Prisma.ForumAnswerScalarFieldEnum[];
};
/**
 * ForumAnswer findMany
 */
export type ForumAnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumAnswers to fetch.
     */
    where?: Prisma.ForumAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumAnswers to fetch.
     */
    orderBy?: Prisma.ForumAnswerOrderByWithRelationInput | Prisma.ForumAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ForumAnswers.
     */
    cursor?: Prisma.ForumAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumAnswers.
     */
    distinct?: Prisma.ForumAnswerScalarFieldEnum | Prisma.ForumAnswerScalarFieldEnum[];
};
/**
 * ForumAnswer create
 */
export type ForumAnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ForumAnswer.
     */
    data: Prisma.XOR<Prisma.ForumAnswerCreateInput, Prisma.ForumAnswerUncheckedCreateInput>;
};
/**
 * ForumAnswer createMany
 */
export type ForumAnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumAnswers.
     */
    data: Prisma.ForumAnswerCreateManyInput | Prisma.ForumAnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ForumAnswer createManyAndReturn
 */
export type ForumAnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumAnswer
     */
    select?: Prisma.ForumAnswerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumAnswer
     */
    omit?: Prisma.ForumAnswerOmit<ExtArgs> | null;
    /**
     * The data used to create many ForumAnswers.
     */
    data: Prisma.ForumAnswerCreateManyInput | Prisma.ForumAnswerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumAnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ForumAnswer update
 */
export type ForumAnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ForumAnswer.
     */
    data: Prisma.XOR<Prisma.ForumAnswerUpdateInput, Prisma.ForumAnswerUncheckedUpdateInput>;
    /**
     * Choose, which ForumAnswer to update.
     */
    where: Prisma.ForumAnswerWhereUniqueInput;
};
/**
 * ForumAnswer updateMany
 */
export type ForumAnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumAnswers.
     */
    data: Prisma.XOR<Prisma.ForumAnswerUpdateManyMutationInput, Prisma.ForumAnswerUncheckedUpdateManyInput>;
    /**
     * Filter which ForumAnswers to update
     */
    where?: Prisma.ForumAnswerWhereInput;
    /**
     * Limit how many ForumAnswers to update.
     */
    limit?: number;
};
/**
 * ForumAnswer updateManyAndReturn
 */
export type ForumAnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumAnswer
     */
    select?: Prisma.ForumAnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumAnswer
     */
    omit?: Prisma.ForumAnswerOmit<ExtArgs> | null;
    /**
     * The data used to update ForumAnswers.
     */
    data: Prisma.XOR<Prisma.ForumAnswerUpdateManyMutationInput, Prisma.ForumAnswerUncheckedUpdateManyInput>;
    /**
     * Filter which ForumAnswers to update
     */
    where?: Prisma.ForumAnswerWhereInput;
    /**
     * Limit how many ForumAnswers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumAnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ForumAnswer upsert
 */
export type ForumAnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ForumAnswer to update in case it exists.
     */
    where: Prisma.ForumAnswerWhereUniqueInput;
    /**
     * In case the ForumAnswer found by the `where` argument doesn't exist, create a new ForumAnswer with this data.
     */
    create: Prisma.XOR<Prisma.ForumAnswerCreateInput, Prisma.ForumAnswerUncheckedCreateInput>;
    /**
     * In case the ForumAnswer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ForumAnswerUpdateInput, Prisma.ForumAnswerUncheckedUpdateInput>;
};
/**
 * ForumAnswer delete
 */
export type ForumAnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ForumAnswer to delete.
     */
    where: Prisma.ForumAnswerWhereUniqueInput;
};
/**
 * ForumAnswer deleteMany
 */
export type ForumAnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ForumAnswers to delete
     */
    where?: Prisma.ForumAnswerWhereInput;
    /**
     * Limit how many ForumAnswers to delete.
     */
    limit?: number;
};
/**
 * ForumAnswer.comments
 */
export type ForumAnswer$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ForumAnswer.votes
 */
export type ForumAnswer$votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ForumAnswer.reports
 */
export type ForumAnswer$reportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ForumAnswer without action
 */
export type ForumAnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ForumAnswer.d.ts.map