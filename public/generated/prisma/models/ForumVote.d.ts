import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ForumVote
 *
 */
export type ForumVoteModel = runtime.Types.Result.DefaultSelection<Prisma.$ForumVotePayload>;
export type AggregateForumVote = {
    _count: ForumVoteCountAggregateOutputType | null;
    _min: ForumVoteMinAggregateOutputType | null;
    _max: ForumVoteMaxAggregateOutputType | null;
};
export type ForumVoteMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    voteType: $Enums.VoteType | null;
    questionId: string | null;
    answerId: string | null;
    createdAt: Date | null;
};
export type ForumVoteMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    voteType: $Enums.VoteType | null;
    questionId: string | null;
    answerId: string | null;
    createdAt: Date | null;
};
export type ForumVoteCountAggregateOutputType = {
    id: number;
    userId: number;
    voteType: number;
    questionId: number;
    answerId: number;
    createdAt: number;
    _all: number;
};
export type ForumVoteMinAggregateInputType = {
    id?: true;
    userId?: true;
    voteType?: true;
    questionId?: true;
    answerId?: true;
    createdAt?: true;
};
export type ForumVoteMaxAggregateInputType = {
    id?: true;
    userId?: true;
    voteType?: true;
    questionId?: true;
    answerId?: true;
    createdAt?: true;
};
export type ForumVoteCountAggregateInputType = {
    id?: true;
    userId?: true;
    voteType?: true;
    questionId?: true;
    answerId?: true;
    createdAt?: true;
    _all?: true;
};
export type ForumVoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ForumVote to aggregate.
     */
    where?: Prisma.ForumVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumVotes to fetch.
     */
    orderBy?: Prisma.ForumVoteOrderByWithRelationInput | Prisma.ForumVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ForumVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ForumVotes
    **/
    _count?: true | ForumVoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ForumVoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ForumVoteMaxAggregateInputType;
};
export type GetForumVoteAggregateType<T extends ForumVoteAggregateArgs> = {
    [P in keyof T & keyof AggregateForumVote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateForumVote[P]> : Prisma.GetScalarType<T[P], AggregateForumVote[P]>;
};
export type ForumVoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumVoteWhereInput;
    orderBy?: Prisma.ForumVoteOrderByWithAggregationInput | Prisma.ForumVoteOrderByWithAggregationInput[];
    by: Prisma.ForumVoteScalarFieldEnum[] | Prisma.ForumVoteScalarFieldEnum;
    having?: Prisma.ForumVoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ForumVoteCountAggregateInputType | true;
    _min?: ForumVoteMinAggregateInputType;
    _max?: ForumVoteMaxAggregateInputType;
};
export type ForumVoteGroupByOutputType = {
    id: string;
    userId: string;
    voteType: $Enums.VoteType;
    questionId: string | null;
    answerId: string | null;
    createdAt: Date;
    _count: ForumVoteCountAggregateOutputType | null;
    _min: ForumVoteMinAggregateOutputType | null;
    _max: ForumVoteMaxAggregateOutputType | null;
};
export type GetForumVoteGroupByPayload<T extends ForumVoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ForumVoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ForumVoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ForumVoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ForumVoteGroupByOutputType[P]>;
}>>;
export type ForumVoteWhereInput = {
    AND?: Prisma.ForumVoteWhereInput | Prisma.ForumVoteWhereInput[];
    OR?: Prisma.ForumVoteWhereInput[];
    NOT?: Prisma.ForumVoteWhereInput | Prisma.ForumVoteWhereInput[];
    id?: Prisma.StringFilter<"ForumVote"> | string;
    userId?: Prisma.StringFilter<"ForumVote"> | string;
    voteType?: Prisma.EnumVoteTypeFilter<"ForumVote"> | $Enums.VoteType;
    questionId?: Prisma.StringNullableFilter<"ForumVote"> | string | null;
    answerId?: Prisma.StringNullableFilter<"ForumVote"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumVote"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.ForumQuestionNullableScalarRelationFilter, Prisma.ForumQuestionWhereInput> | null;
    answer?: Prisma.XOR<Prisma.ForumAnswerNullableScalarRelationFilter, Prisma.ForumAnswerWhereInput> | null;
};
export type ForumVoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    voteType?: Prisma.SortOrder;
    questionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    answerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    question?: Prisma.ForumQuestionOrderByWithRelationInput;
    answer?: Prisma.ForumAnswerOrderByWithRelationInput;
};
export type ForumVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_questionId?: Prisma.ForumVoteUserIdQuestionIdCompoundUniqueInput;
    userId_answerId?: Prisma.ForumVoteUserIdAnswerIdCompoundUniqueInput;
    AND?: Prisma.ForumVoteWhereInput | Prisma.ForumVoteWhereInput[];
    OR?: Prisma.ForumVoteWhereInput[];
    NOT?: Prisma.ForumVoteWhereInput | Prisma.ForumVoteWhereInput[];
    userId?: Prisma.StringFilter<"ForumVote"> | string;
    voteType?: Prisma.EnumVoteTypeFilter<"ForumVote"> | $Enums.VoteType;
    questionId?: Prisma.StringNullableFilter<"ForumVote"> | string | null;
    answerId?: Prisma.StringNullableFilter<"ForumVote"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumVote"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.ForumQuestionNullableScalarRelationFilter, Prisma.ForumQuestionWhereInput> | null;
    answer?: Prisma.XOR<Prisma.ForumAnswerNullableScalarRelationFilter, Prisma.ForumAnswerWhereInput> | null;
}, "id" | "userId_questionId" | "userId_answerId">;
export type ForumVoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    voteType?: Prisma.SortOrder;
    questionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    answerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ForumVoteCountOrderByAggregateInput;
    _max?: Prisma.ForumVoteMaxOrderByAggregateInput;
    _min?: Prisma.ForumVoteMinOrderByAggregateInput;
};
export type ForumVoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ForumVoteScalarWhereWithAggregatesInput | Prisma.ForumVoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ForumVoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ForumVoteScalarWhereWithAggregatesInput | Prisma.ForumVoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ForumVote"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ForumVote"> | string;
    voteType?: Prisma.EnumVoteTypeWithAggregatesFilter<"ForumVote"> | $Enums.VoteType;
    questionId?: Prisma.StringNullableWithAggregatesFilter<"ForumVote"> | string | null;
    answerId?: Prisma.StringNullableWithAggregatesFilter<"ForumVote"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ForumVote"> | Date | string;
};
export type ForumVoteCreateInput = {
    id?: string;
    voteType: $Enums.VoteType;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutForumVotesInput;
    question?: Prisma.ForumQuestionCreateNestedOneWithoutVotesInput;
    answer?: Prisma.ForumAnswerCreateNestedOneWithoutVotesInput;
};
export type ForumVoteUncheckedCreateInput = {
    id?: string;
    userId: string;
    voteType: $Enums.VoteType;
    questionId?: string | null;
    answerId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutForumVotesNestedInput;
    question?: Prisma.ForumQuestionUpdateOneWithoutVotesNestedInput;
    answer?: Prisma.ForumAnswerUpdateOneWithoutVotesNestedInput;
};
export type ForumVoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    questionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteCreateManyInput = {
    id?: string;
    userId: string;
    voteType: $Enums.VoteType;
    questionId?: string | null;
    answerId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    questionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteListRelationFilter = {
    every?: Prisma.ForumVoteWhereInput;
    some?: Prisma.ForumVoteWhereInput;
    none?: Prisma.ForumVoteWhereInput;
};
export type ForumVoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ForumVoteUserIdQuestionIdCompoundUniqueInput = {
    userId: string;
    questionId: string;
};
export type ForumVoteUserIdAnswerIdCompoundUniqueInput = {
    userId: string;
    answerId: string;
};
export type ForumVoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    voteType?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ForumVoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    voteType?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ForumVoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    voteType?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ForumVoteCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutQuestionInput, Prisma.ForumVoteUncheckedCreateWithoutQuestionInput> | Prisma.ForumVoteCreateWithoutQuestionInput[] | Prisma.ForumVoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutQuestionInput | Prisma.ForumVoteCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.ForumVoteCreateManyQuestionInputEnvelope;
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
};
export type ForumVoteUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutQuestionInput, Prisma.ForumVoteUncheckedCreateWithoutQuestionInput> | Prisma.ForumVoteCreateWithoutQuestionInput[] | Prisma.ForumVoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutQuestionInput | Prisma.ForumVoteCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.ForumVoteCreateManyQuestionInputEnvelope;
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
};
export type ForumVoteUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutQuestionInput, Prisma.ForumVoteUncheckedCreateWithoutQuestionInput> | Prisma.ForumVoteCreateWithoutQuestionInput[] | Prisma.ForumVoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutQuestionInput | Prisma.ForumVoteCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.ForumVoteUpsertWithWhereUniqueWithoutQuestionInput | Prisma.ForumVoteUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.ForumVoteCreateManyQuestionInputEnvelope;
    set?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    disconnect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    delete?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    update?: Prisma.ForumVoteUpdateWithWhereUniqueWithoutQuestionInput | Prisma.ForumVoteUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.ForumVoteUpdateManyWithWhereWithoutQuestionInput | Prisma.ForumVoteUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
};
export type ForumVoteUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutQuestionInput, Prisma.ForumVoteUncheckedCreateWithoutQuestionInput> | Prisma.ForumVoteCreateWithoutQuestionInput[] | Prisma.ForumVoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutQuestionInput | Prisma.ForumVoteCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.ForumVoteUpsertWithWhereUniqueWithoutQuestionInput | Prisma.ForumVoteUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.ForumVoteCreateManyQuestionInputEnvelope;
    set?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    disconnect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    delete?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    update?: Prisma.ForumVoteUpdateWithWhereUniqueWithoutQuestionInput | Prisma.ForumVoteUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.ForumVoteUpdateManyWithWhereWithoutQuestionInput | Prisma.ForumVoteUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
};
export type ForumVoteCreateNestedManyWithoutAnswerInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutAnswerInput, Prisma.ForumVoteUncheckedCreateWithoutAnswerInput> | Prisma.ForumVoteCreateWithoutAnswerInput[] | Prisma.ForumVoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutAnswerInput | Prisma.ForumVoteCreateOrConnectWithoutAnswerInput[];
    createMany?: Prisma.ForumVoteCreateManyAnswerInputEnvelope;
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
};
export type ForumVoteUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutAnswerInput, Prisma.ForumVoteUncheckedCreateWithoutAnswerInput> | Prisma.ForumVoteCreateWithoutAnswerInput[] | Prisma.ForumVoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutAnswerInput | Prisma.ForumVoteCreateOrConnectWithoutAnswerInput[];
    createMany?: Prisma.ForumVoteCreateManyAnswerInputEnvelope;
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
};
export type ForumVoteUpdateManyWithoutAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutAnswerInput, Prisma.ForumVoteUncheckedCreateWithoutAnswerInput> | Prisma.ForumVoteCreateWithoutAnswerInput[] | Prisma.ForumVoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutAnswerInput | Prisma.ForumVoteCreateOrConnectWithoutAnswerInput[];
    upsert?: Prisma.ForumVoteUpsertWithWhereUniqueWithoutAnswerInput | Prisma.ForumVoteUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: Prisma.ForumVoteCreateManyAnswerInputEnvelope;
    set?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    disconnect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    delete?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    update?: Prisma.ForumVoteUpdateWithWhereUniqueWithoutAnswerInput | Prisma.ForumVoteUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?: Prisma.ForumVoteUpdateManyWithWhereWithoutAnswerInput | Prisma.ForumVoteUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
};
export type ForumVoteUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutAnswerInput, Prisma.ForumVoteUncheckedCreateWithoutAnswerInput> | Prisma.ForumVoteCreateWithoutAnswerInput[] | Prisma.ForumVoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutAnswerInput | Prisma.ForumVoteCreateOrConnectWithoutAnswerInput[];
    upsert?: Prisma.ForumVoteUpsertWithWhereUniqueWithoutAnswerInput | Prisma.ForumVoteUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: Prisma.ForumVoteCreateManyAnswerInputEnvelope;
    set?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    disconnect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    delete?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    update?: Prisma.ForumVoteUpdateWithWhereUniqueWithoutAnswerInput | Prisma.ForumVoteUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?: Prisma.ForumVoteUpdateManyWithWhereWithoutAnswerInput | Prisma.ForumVoteUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
};
export type EnumVoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.VoteType;
};
export type ForumVoteCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutUserInput, Prisma.ForumVoteUncheckedCreateWithoutUserInput> | Prisma.ForumVoteCreateWithoutUserInput[] | Prisma.ForumVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutUserInput | Prisma.ForumVoteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ForumVoteCreateManyUserInputEnvelope;
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
};
export type ForumVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutUserInput, Prisma.ForumVoteUncheckedCreateWithoutUserInput> | Prisma.ForumVoteCreateWithoutUserInput[] | Prisma.ForumVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutUserInput | Prisma.ForumVoteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ForumVoteCreateManyUserInputEnvelope;
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
};
export type ForumVoteUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutUserInput, Prisma.ForumVoteUncheckedCreateWithoutUserInput> | Prisma.ForumVoteCreateWithoutUserInput[] | Prisma.ForumVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutUserInput | Prisma.ForumVoteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ForumVoteUpsertWithWhereUniqueWithoutUserInput | Prisma.ForumVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ForumVoteCreateManyUserInputEnvelope;
    set?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    disconnect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    delete?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    update?: Prisma.ForumVoteUpdateWithWhereUniqueWithoutUserInput | Prisma.ForumVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ForumVoteUpdateManyWithWhereWithoutUserInput | Prisma.ForumVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
};
export type ForumVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ForumVoteCreateWithoutUserInput, Prisma.ForumVoteUncheckedCreateWithoutUserInput> | Prisma.ForumVoteCreateWithoutUserInput[] | Prisma.ForumVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ForumVoteCreateOrConnectWithoutUserInput | Prisma.ForumVoteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ForumVoteUpsertWithWhereUniqueWithoutUserInput | Prisma.ForumVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ForumVoteCreateManyUserInputEnvelope;
    set?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    disconnect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    delete?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    connect?: Prisma.ForumVoteWhereUniqueInput | Prisma.ForumVoteWhereUniqueInput[];
    update?: Prisma.ForumVoteUpdateWithWhereUniqueWithoutUserInput | Prisma.ForumVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ForumVoteUpdateManyWithWhereWithoutUserInput | Prisma.ForumVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
};
export type ForumVoteCreateWithoutQuestionInput = {
    id?: string;
    voteType: $Enums.VoteType;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutForumVotesInput;
    answer?: Prisma.ForumAnswerCreateNestedOneWithoutVotesInput;
};
export type ForumVoteUncheckedCreateWithoutQuestionInput = {
    id?: string;
    userId: string;
    voteType: $Enums.VoteType;
    answerId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteCreateOrConnectWithoutQuestionInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumVoteCreateWithoutQuestionInput, Prisma.ForumVoteUncheckedCreateWithoutQuestionInput>;
};
export type ForumVoteCreateManyQuestionInputEnvelope = {
    data: Prisma.ForumVoteCreateManyQuestionInput | Prisma.ForumVoteCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type ForumVoteUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ForumVoteUpdateWithoutQuestionInput, Prisma.ForumVoteUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.ForumVoteCreateWithoutQuestionInput, Prisma.ForumVoteUncheckedCreateWithoutQuestionInput>;
};
export type ForumVoteUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ForumVoteUpdateWithoutQuestionInput, Prisma.ForumVoteUncheckedUpdateWithoutQuestionInput>;
};
export type ForumVoteUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.ForumVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ForumVoteUpdateManyMutationInput, Prisma.ForumVoteUncheckedUpdateManyWithoutQuestionInput>;
};
export type ForumVoteScalarWhereInput = {
    AND?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
    OR?: Prisma.ForumVoteScalarWhereInput[];
    NOT?: Prisma.ForumVoteScalarWhereInput | Prisma.ForumVoteScalarWhereInput[];
    id?: Prisma.StringFilter<"ForumVote"> | string;
    userId?: Prisma.StringFilter<"ForumVote"> | string;
    voteType?: Prisma.EnumVoteTypeFilter<"ForumVote"> | $Enums.VoteType;
    questionId?: Prisma.StringNullableFilter<"ForumVote"> | string | null;
    answerId?: Prisma.StringNullableFilter<"ForumVote"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ForumVote"> | Date | string;
};
export type ForumVoteCreateWithoutAnswerInput = {
    id?: string;
    voteType: $Enums.VoteType;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutForumVotesInput;
    question?: Prisma.ForumQuestionCreateNestedOneWithoutVotesInput;
};
export type ForumVoteUncheckedCreateWithoutAnswerInput = {
    id?: string;
    userId: string;
    voteType: $Enums.VoteType;
    questionId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteCreateOrConnectWithoutAnswerInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumVoteCreateWithoutAnswerInput, Prisma.ForumVoteUncheckedCreateWithoutAnswerInput>;
};
export type ForumVoteCreateManyAnswerInputEnvelope = {
    data: Prisma.ForumVoteCreateManyAnswerInput | Prisma.ForumVoteCreateManyAnswerInput[];
    skipDuplicates?: boolean;
};
export type ForumVoteUpsertWithWhereUniqueWithoutAnswerInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ForumVoteUpdateWithoutAnswerInput, Prisma.ForumVoteUncheckedUpdateWithoutAnswerInput>;
    create: Prisma.XOR<Prisma.ForumVoteCreateWithoutAnswerInput, Prisma.ForumVoteUncheckedCreateWithoutAnswerInput>;
};
export type ForumVoteUpdateWithWhereUniqueWithoutAnswerInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ForumVoteUpdateWithoutAnswerInput, Prisma.ForumVoteUncheckedUpdateWithoutAnswerInput>;
};
export type ForumVoteUpdateManyWithWhereWithoutAnswerInput = {
    where: Prisma.ForumVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ForumVoteUpdateManyMutationInput, Prisma.ForumVoteUncheckedUpdateManyWithoutAnswerInput>;
};
export type ForumVoteCreateWithoutUserInput = {
    id?: string;
    voteType: $Enums.VoteType;
    createdAt?: Date | string;
    question?: Prisma.ForumQuestionCreateNestedOneWithoutVotesInput;
    answer?: Prisma.ForumAnswerCreateNestedOneWithoutVotesInput;
};
export type ForumVoteUncheckedCreateWithoutUserInput = {
    id?: string;
    voteType: $Enums.VoteType;
    questionId?: string | null;
    answerId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteCreateOrConnectWithoutUserInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ForumVoteCreateWithoutUserInput, Prisma.ForumVoteUncheckedCreateWithoutUserInput>;
};
export type ForumVoteCreateManyUserInputEnvelope = {
    data: Prisma.ForumVoteCreateManyUserInput | Prisma.ForumVoteCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ForumVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ForumVoteUpdateWithoutUserInput, Prisma.ForumVoteUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ForumVoteCreateWithoutUserInput, Prisma.ForumVoteUncheckedCreateWithoutUserInput>;
};
export type ForumVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ForumVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ForumVoteUpdateWithoutUserInput, Prisma.ForumVoteUncheckedUpdateWithoutUserInput>;
};
export type ForumVoteUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ForumVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ForumVoteUpdateManyMutationInput, Prisma.ForumVoteUncheckedUpdateManyWithoutUserInput>;
};
export type ForumVoteCreateManyQuestionInput = {
    id?: string;
    userId: string;
    voteType: $Enums.VoteType;
    answerId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutForumVotesNestedInput;
    answer?: Prisma.ForumAnswerUpdateOneWithoutVotesNestedInput;
};
export type ForumVoteUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    answerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    answerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteCreateManyAnswerInput = {
    id?: string;
    userId: string;
    voteType: $Enums.VoteType;
    questionId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteUpdateWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutForumVotesNestedInput;
    question?: Prisma.ForumQuestionUpdateOneWithoutVotesNestedInput;
};
export type ForumVoteUncheckedUpdateWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    questionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteUncheckedUpdateManyWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    questionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteCreateManyUserInput = {
    id?: string;
    voteType: $Enums.VoteType;
    questionId?: string | null;
    answerId?: string | null;
    createdAt?: Date | string;
};
export type ForumVoteUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.ForumQuestionUpdateOneWithoutVotesNestedInput;
    answer?: Prisma.ForumAnswerUpdateOneWithoutVotesNestedInput;
};
export type ForumVoteUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    questionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voteType?: Prisma.EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    questionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ForumVoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    voteType?: boolean;
    questionId?: boolean;
    answerId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.ForumVote$questionArgs<ExtArgs>;
    answer?: boolean | Prisma.ForumVote$answerArgs<ExtArgs>;
}, ExtArgs["result"]["forumVote"]>;
export type ForumVoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    voteType?: boolean;
    questionId?: boolean;
    answerId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.ForumVote$questionArgs<ExtArgs>;
    answer?: boolean | Prisma.ForumVote$answerArgs<ExtArgs>;
}, ExtArgs["result"]["forumVote"]>;
export type ForumVoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    voteType?: boolean;
    questionId?: boolean;
    answerId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.ForumVote$questionArgs<ExtArgs>;
    answer?: boolean | Prisma.ForumVote$answerArgs<ExtArgs>;
}, ExtArgs["result"]["forumVote"]>;
export type ForumVoteSelectScalar = {
    id?: boolean;
    userId?: boolean;
    voteType?: boolean;
    questionId?: boolean;
    answerId?: boolean;
    createdAt?: boolean;
};
export type ForumVoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "voteType" | "questionId" | "answerId" | "createdAt", ExtArgs["result"]["forumVote"]>;
export type ForumVoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.ForumVote$questionArgs<ExtArgs>;
    answer?: boolean | Prisma.ForumVote$answerArgs<ExtArgs>;
};
export type ForumVoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.ForumVote$questionArgs<ExtArgs>;
    answer?: boolean | Prisma.ForumVote$answerArgs<ExtArgs>;
};
export type ForumVoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.ForumVote$questionArgs<ExtArgs>;
    answer?: boolean | Prisma.ForumVote$answerArgs<ExtArgs>;
};
export type $ForumVotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ForumVote";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        question: Prisma.$ForumQuestionPayload<ExtArgs> | null;
        answer: Prisma.$ForumAnswerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        voteType: $Enums.VoteType;
        questionId: string | null;
        answerId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["forumVote"]>;
    composites: {};
};
export type ForumVoteGetPayload<S extends boolean | null | undefined | ForumVoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ForumVotePayload, S>;
export type ForumVoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ForumVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ForumVoteCountAggregateInputType | true;
};
export interface ForumVoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ForumVote'];
        meta: {
            name: 'ForumVote';
        };
    };
    /**
     * Find zero or one ForumVote that matches the filter.
     * @param {ForumVoteFindUniqueArgs} args - Arguments to find a ForumVote
     * @example
     * // Get one ForumVote
     * const forumVote = await prisma.forumVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumVoteFindUniqueArgs>(args: Prisma.SelectSubset<T, ForumVoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ForumVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumVoteFindUniqueOrThrowArgs} args - Arguments to find a ForumVote
     * @example
     * // Get one ForumVote
     * const forumVote = await prisma.forumVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumVoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ForumVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ForumVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumVoteFindFirstArgs} args - Arguments to find a ForumVote
     * @example
     * // Get one ForumVote
     * const forumVote = await prisma.forumVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumVoteFindFirstArgs>(args?: Prisma.SelectSubset<T, ForumVoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ForumVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumVoteFindFirstOrThrowArgs} args - Arguments to find a ForumVote
     * @example
     * // Get one ForumVote
     * const forumVote = await prisma.forumVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumVoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ForumVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ForumVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumVotes
     * const forumVotes = await prisma.forumVote.findMany()
     *
     * // Get first 10 ForumVotes
     * const forumVotes = await prisma.forumVote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const forumVoteWithIdOnly = await prisma.forumVote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ForumVoteFindManyArgs>(args?: Prisma.SelectSubset<T, ForumVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ForumVote.
     * @param {ForumVoteCreateArgs} args - Arguments to create a ForumVote.
     * @example
     * // Create one ForumVote
     * const ForumVote = await prisma.forumVote.create({
     *   data: {
     *     // ... data to create a ForumVote
     *   }
     * })
     *
     */
    create<T extends ForumVoteCreateArgs>(args: Prisma.SelectSubset<T, ForumVoteCreateArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ForumVotes.
     * @param {ForumVoteCreateManyArgs} args - Arguments to create many ForumVotes.
     * @example
     * // Create many ForumVotes
     * const forumVote = await prisma.forumVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ForumVoteCreateManyArgs>(args?: Prisma.SelectSubset<T, ForumVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ForumVotes and returns the data saved in the database.
     * @param {ForumVoteCreateManyAndReturnArgs} args - Arguments to create many ForumVotes.
     * @example
     * // Create many ForumVotes
     * const forumVote = await prisma.forumVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ForumVotes and only return the `id`
     * const forumVoteWithIdOnly = await prisma.forumVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ForumVoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ForumVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ForumVote.
     * @param {ForumVoteDeleteArgs} args - Arguments to delete one ForumVote.
     * @example
     * // Delete one ForumVote
     * const ForumVote = await prisma.forumVote.delete({
     *   where: {
     *     // ... filter to delete one ForumVote
     *   }
     * })
     *
     */
    delete<T extends ForumVoteDeleteArgs>(args: Prisma.SelectSubset<T, ForumVoteDeleteArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ForumVote.
     * @param {ForumVoteUpdateArgs} args - Arguments to update one ForumVote.
     * @example
     * // Update one ForumVote
     * const forumVote = await prisma.forumVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ForumVoteUpdateArgs>(args: Prisma.SelectSubset<T, ForumVoteUpdateArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ForumVotes.
     * @param {ForumVoteDeleteManyArgs} args - Arguments to filter ForumVotes to delete.
     * @example
     * // Delete a few ForumVotes
     * const { count } = await prisma.forumVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ForumVoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ForumVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ForumVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumVotes
     * const forumVote = await prisma.forumVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ForumVoteUpdateManyArgs>(args: Prisma.SelectSubset<T, ForumVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ForumVotes and returns the data updated in the database.
     * @param {ForumVoteUpdateManyAndReturnArgs} args - Arguments to update many ForumVotes.
     * @example
     * // Update many ForumVotes
     * const forumVote = await prisma.forumVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ForumVotes and only return the `id`
     * const forumVoteWithIdOnly = await prisma.forumVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumVoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ForumVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ForumVote.
     * @param {ForumVoteUpsertArgs} args - Arguments to update or create a ForumVote.
     * @example
     * // Update or create a ForumVote
     * const forumVote = await prisma.forumVote.upsert({
     *   create: {
     *     // ... data to create a ForumVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumVote we want to update
     *   }
     * })
     */
    upsert<T extends ForumVoteUpsertArgs>(args: Prisma.SelectSubset<T, ForumVoteUpsertArgs<ExtArgs>>): Prisma.Prisma__ForumVoteClient<runtime.Types.Result.GetResult<Prisma.$ForumVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ForumVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumVoteCountArgs} args - Arguments to filter ForumVotes to count.
     * @example
     * // Count the number of ForumVotes
     * const count = await prisma.forumVote.count({
     *   where: {
     *     // ... the filter for the ForumVotes we want to count
     *   }
     * })
    **/
    count<T extends ForumVoteCountArgs>(args?: Prisma.Subset<T, ForumVoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ForumVoteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ForumVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumVoteAggregateArgs>(args: Prisma.Subset<T, ForumVoteAggregateArgs>): Prisma.PrismaPromise<GetForumVoteAggregateType<T>>;
    /**
     * Group by ForumVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumVoteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ForumVoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ForumVoteGroupByArgs['orderBy'];
    } : {
        orderBy?: ForumVoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ForumVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ForumVote model
     */
    readonly fields: ForumVoteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ForumVote.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ForumVoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.ForumVote$questionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumVote$questionArgs<ExtArgs>>): Prisma.Prisma__ForumQuestionClient<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    answer<T extends Prisma.ForumVote$answerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ForumVote$answerArgs<ExtArgs>>): Prisma.Prisma__ForumAnswerClient<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ForumVote model
 */
export interface ForumVoteFieldRefs {
    readonly id: Prisma.FieldRef<"ForumVote", 'String'>;
    readonly userId: Prisma.FieldRef<"ForumVote", 'String'>;
    readonly voteType: Prisma.FieldRef<"ForumVote", 'VoteType'>;
    readonly questionId: Prisma.FieldRef<"ForumVote", 'String'>;
    readonly answerId: Prisma.FieldRef<"ForumVote", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ForumVote", 'DateTime'>;
}
/**
 * ForumVote findUnique
 */
export type ForumVoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumVote to fetch.
     */
    where: Prisma.ForumVoteWhereUniqueInput;
};
/**
 * ForumVote findUniqueOrThrow
 */
export type ForumVoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumVote to fetch.
     */
    where: Prisma.ForumVoteWhereUniqueInput;
};
/**
 * ForumVote findFirst
 */
export type ForumVoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumVote to fetch.
     */
    where?: Prisma.ForumVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumVotes to fetch.
     */
    orderBy?: Prisma.ForumVoteOrderByWithRelationInput | Prisma.ForumVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ForumVotes.
     */
    cursor?: Prisma.ForumVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumVotes.
     */
    distinct?: Prisma.ForumVoteScalarFieldEnum | Prisma.ForumVoteScalarFieldEnum[];
};
/**
 * ForumVote findFirstOrThrow
 */
export type ForumVoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumVote to fetch.
     */
    where?: Prisma.ForumVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumVotes to fetch.
     */
    orderBy?: Prisma.ForumVoteOrderByWithRelationInput | Prisma.ForumVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ForumVotes.
     */
    cursor?: Prisma.ForumVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumVotes.
     */
    distinct?: Prisma.ForumVoteScalarFieldEnum | Prisma.ForumVoteScalarFieldEnum[];
};
/**
 * ForumVote findMany
 */
export type ForumVoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ForumVotes to fetch.
     */
    where?: Prisma.ForumVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ForumVotes to fetch.
     */
    orderBy?: Prisma.ForumVoteOrderByWithRelationInput | Prisma.ForumVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ForumVotes.
     */
    cursor?: Prisma.ForumVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ForumVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ForumVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ForumVotes.
     */
    distinct?: Prisma.ForumVoteScalarFieldEnum | Prisma.ForumVoteScalarFieldEnum[];
};
/**
 * ForumVote create
 */
export type ForumVoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ForumVote.
     */
    data: Prisma.XOR<Prisma.ForumVoteCreateInput, Prisma.ForumVoteUncheckedCreateInput>;
};
/**
 * ForumVote createMany
 */
export type ForumVoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumVotes.
     */
    data: Prisma.ForumVoteCreateManyInput | Prisma.ForumVoteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ForumVote createManyAndReturn
 */
export type ForumVoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumVote
     */
    select?: Prisma.ForumVoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumVote
     */
    omit?: Prisma.ForumVoteOmit<ExtArgs> | null;
    /**
     * The data used to create many ForumVotes.
     */
    data: Prisma.ForumVoteCreateManyInput | Prisma.ForumVoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumVoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ForumVote update
 */
export type ForumVoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ForumVote.
     */
    data: Prisma.XOR<Prisma.ForumVoteUpdateInput, Prisma.ForumVoteUncheckedUpdateInput>;
    /**
     * Choose, which ForumVote to update.
     */
    where: Prisma.ForumVoteWhereUniqueInput;
};
/**
 * ForumVote updateMany
 */
export type ForumVoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumVotes.
     */
    data: Prisma.XOR<Prisma.ForumVoteUpdateManyMutationInput, Prisma.ForumVoteUncheckedUpdateManyInput>;
    /**
     * Filter which ForumVotes to update
     */
    where?: Prisma.ForumVoteWhereInput;
    /**
     * Limit how many ForumVotes to update.
     */
    limit?: number;
};
/**
 * ForumVote updateManyAndReturn
 */
export type ForumVoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumVote
     */
    select?: Prisma.ForumVoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ForumVote
     */
    omit?: Prisma.ForumVoteOmit<ExtArgs> | null;
    /**
     * The data used to update ForumVotes.
     */
    data: Prisma.XOR<Prisma.ForumVoteUpdateManyMutationInput, Prisma.ForumVoteUncheckedUpdateManyInput>;
    /**
     * Filter which ForumVotes to update
     */
    where?: Prisma.ForumVoteWhereInput;
    /**
     * Limit how many ForumVotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ForumVoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ForumVote upsert
 */
export type ForumVoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ForumVote to update in case it exists.
     */
    where: Prisma.ForumVoteWhereUniqueInput;
    /**
     * In case the ForumVote found by the `where` argument doesn't exist, create a new ForumVote with this data.
     */
    create: Prisma.XOR<Prisma.ForumVoteCreateInput, Prisma.ForumVoteUncheckedCreateInput>;
    /**
     * In case the ForumVote was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ForumVoteUpdateInput, Prisma.ForumVoteUncheckedUpdateInput>;
};
/**
 * ForumVote delete
 */
export type ForumVoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ForumVote to delete.
     */
    where: Prisma.ForumVoteWhereUniqueInput;
};
/**
 * ForumVote deleteMany
 */
export type ForumVoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ForumVotes to delete
     */
    where?: Prisma.ForumVoteWhereInput;
    /**
     * Limit how many ForumVotes to delete.
     */
    limit?: number;
};
/**
 * ForumVote.question
 */
export type ForumVote$questionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ForumQuestionWhereInput;
};
/**
 * ForumVote.answer
 */
export type ForumVote$answerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * ForumVote without action
 */
export type ForumVoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ForumVote.d.ts.map