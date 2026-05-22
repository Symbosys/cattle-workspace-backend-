import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
    role: $Enums.UserRole | null;
    status: $Enums.UserStatus | null;
    lastLoginAt: Date | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
    role: $Enums.UserRole | null;
    status: $Enums.UserStatus | null;
    lastLoginAt: Date | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    phone: number;
    avatarUrl: number;
    role: number;
    status: number;
    lastLoginAt: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phone?: true;
    role?: true;
    status?: true;
    lastLoginAt?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phone?: true;
    role?: true;
    status?: true;
    lastLoginAt?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phone?: true;
    avatarUrl?: true;
    role?: true;
    status?: true;
    lastLoginAt?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string | null;
    name: string | null;
    phone: string;
    avatarUrl: runtime.JsonValue | null;
    role: $Enums.UserRole;
    status: $Enums.UserStatus;
    lastLoginAt: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.JsonNullableFilter<"User">;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    animals?: Prisma.AnimalListRelationFilter;
    listings?: Prisma.CattleListingListRelationFilter;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileNullableScalarRelationFilter, Prisma.DoctorProfileWhereInput> | null;
    breederProfile?: Prisma.XOR<Prisma.BreederProfileNullableScalarRelationFilter, Prisma.BreederProfileWhereInput> | null;
    brandProfile?: Prisma.XOR<Prisma.BrandProfileNullableScalarRelationFilter, Prisma.BrandProfileWhereInput> | null;
    appointments?: Prisma.DoctorAppointmentListRelationFilter;
    orders?: Prisma.MarketplaceOrderListRelationFilter;
    questions?: Prisma.ForumQuestionListRelationFilter;
    answers?: Prisma.ForumAnswerListRelationFilter;
    questionVotes?: Prisma.QuestionVoteListRelationFilter;
    answerVotes?: Prisma.AnswerVoteListRelationFilter;
    reportsFiled?: Prisma.ForumReportListRelationFilter;
    reportsReviewed?: Prisma.ForumReportListRelationFilter;
    subscriptions?: Prisma.SubscriptionListRelationFilter;
    ledgerEntries?: Prisma.PlatformLedgerListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    animals?: Prisma.AnimalOrderByRelationAggregateInput;
    listings?: Prisma.CattleListingOrderByRelationAggregateInput;
    doctorProfile?: Prisma.DoctorProfileOrderByWithRelationInput;
    breederProfile?: Prisma.BreederProfileOrderByWithRelationInput;
    brandProfile?: Prisma.BrandProfileOrderByWithRelationInput;
    appointments?: Prisma.DoctorAppointmentOrderByRelationAggregateInput;
    orders?: Prisma.MarketplaceOrderOrderByRelationAggregateInput;
    questions?: Prisma.ForumQuestionOrderByRelationAggregateInput;
    answers?: Prisma.ForumAnswerOrderByRelationAggregateInput;
    questionVotes?: Prisma.QuestionVoteOrderByRelationAggregateInput;
    answerVotes?: Prisma.AnswerVoteOrderByRelationAggregateInput;
    reportsFiled?: Prisma.ForumReportOrderByRelationAggregateInput;
    reportsReviewed?: Prisma.ForumReportOrderByRelationAggregateInput;
    subscriptions?: Prisma.SubscriptionOrderByRelationAggregateInput;
    ledgerEntries?: Prisma.PlatformLedgerOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    phone?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.JsonNullableFilter<"User">;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    animals?: Prisma.AnimalListRelationFilter;
    listings?: Prisma.CattleListingListRelationFilter;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileNullableScalarRelationFilter, Prisma.DoctorProfileWhereInput> | null;
    breederProfile?: Prisma.XOR<Prisma.BreederProfileNullableScalarRelationFilter, Prisma.BreederProfileWhereInput> | null;
    brandProfile?: Prisma.XOR<Prisma.BrandProfileNullableScalarRelationFilter, Prisma.BrandProfileWhereInput> | null;
    appointments?: Prisma.DoctorAppointmentListRelationFilter;
    orders?: Prisma.MarketplaceOrderListRelationFilter;
    questions?: Prisma.ForumQuestionListRelationFilter;
    answers?: Prisma.ForumAnswerListRelationFilter;
    questionVotes?: Prisma.QuestionVoteListRelationFilter;
    answerVotes?: Prisma.AnswerVoteListRelationFilter;
    reportsFiled?: Prisma.ForumReportListRelationFilter;
    reportsReviewed?: Prisma.ForumReportListRelationFilter;
    subscriptions?: Prisma.SubscriptionListRelationFilter;
    ledgerEntries?: Prisma.PlatformLedgerListRelationFilter;
}, "id" | "email" | "phone">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phone?: Prisma.StringWithAggregatesFilter<"User"> | string;
    avatarUrl?: Prisma.JsonNullableWithAggregatesFilter<"User">;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutAnimalsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnimalsInput, Prisma.UserUncheckedCreateWithoutAnimalsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnimalsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnimalsInput, Prisma.UserUncheckedCreateWithoutAnimalsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnimalsInput;
    upsert?: Prisma.UserUpsertWithoutAnimalsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAnimalsInput, Prisma.UserUpdateWithoutAnimalsInput>, Prisma.UserUncheckedUpdateWithoutAnimalsInput>;
};
export type UserCreateNestedOneWithoutBreederProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBreederProfileInput, Prisma.UserUncheckedCreateWithoutBreederProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBreederProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBreederProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBreederProfileInput, Prisma.UserUncheckedCreateWithoutBreederProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBreederProfileInput;
    upsert?: Prisma.UserUpsertWithoutBreederProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBreederProfileInput, Prisma.UserUpdateWithoutBreederProfileInput>, Prisma.UserUncheckedUpdateWithoutBreederProfileInput>;
};
export type UserCreateNestedOneWithoutDoctorProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDoctorProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDoctorProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDoctorProfileInput;
    upsert?: Prisma.UserUpsertWithoutDoctorProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDoctorProfileInput, Prisma.UserUpdateWithoutDoctorProfileInput>, Prisma.UserUncheckedUpdateWithoutDoctorProfileInput>;
};
export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAppointmentsInput, Prisma.UserUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAppointmentsInput, Prisma.UserUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.UserUpsertWithoutAppointmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.UserUpdateWithoutAppointmentsInput>, Prisma.UserUncheckedUpdateWithoutAppointmentsInput>;
};
export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.UserUpsertWithoutQuestionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutQuestionsInput, Prisma.UserUpdateWithoutQuestionsInput>, Prisma.UserUncheckedUpdateWithoutQuestionsInput>;
};
export type UserCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.UserUpsertWithoutAnswersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAnswersInput, Prisma.UserUpdateWithoutAnswersInput>, Prisma.UserUncheckedUpdateWithoutAnswersInput>;
};
export type UserCreateNestedOneWithoutQuestionVotesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionVotesInput, Prisma.UserUncheckedCreateWithoutQuestionVotesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionVotesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutQuestionVotesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionVotesInput, Prisma.UserUncheckedCreateWithoutQuestionVotesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionVotesInput;
    upsert?: Prisma.UserUpsertWithoutQuestionVotesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutQuestionVotesInput, Prisma.UserUpdateWithoutQuestionVotesInput>, Prisma.UserUncheckedUpdateWithoutQuestionVotesInput>;
};
export type UserCreateNestedOneWithoutAnswerVotesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswerVotesInput, Prisma.UserUncheckedCreateWithoutAnswerVotesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswerVotesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAnswerVotesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswerVotesInput, Prisma.UserUncheckedCreateWithoutAnswerVotesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswerVotesInput;
    upsert?: Prisma.UserUpsertWithoutAnswerVotesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAnswerVotesInput, Prisma.UserUpdateWithoutAnswerVotesInput>, Prisma.UserUncheckedUpdateWithoutAnswerVotesInput>;
};
export type UserCreateNestedOneWithoutReportsFiledInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsFiledInput, Prisma.UserUncheckedCreateWithoutReportsFiledInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsFiledInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReportsReviewedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsReviewedInput, Prisma.UserUncheckedCreateWithoutReportsReviewedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsReviewedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReportsFiledNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsFiledInput, Prisma.UserUncheckedCreateWithoutReportsFiledInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsFiledInput;
    upsert?: Prisma.UserUpsertWithoutReportsFiledInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReportsFiledInput, Prisma.UserUpdateWithoutReportsFiledInput>, Prisma.UserUncheckedUpdateWithoutReportsFiledInput>;
};
export type UserUpdateOneWithoutReportsReviewedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsReviewedInput, Prisma.UserUncheckedCreateWithoutReportsReviewedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsReviewedInput;
    upsert?: Prisma.UserUpsertWithoutReportsReviewedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReportsReviewedInput, Prisma.UserUpdateWithoutReportsReviewedInput>, Prisma.UserUncheckedUpdateWithoutReportsReviewedInput>;
};
export type UserCreateNestedOneWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListingsInput, Prisma.UserUncheckedCreateWithoutListingsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListingsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListingsInput, Prisma.UserUncheckedCreateWithoutListingsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListingsInput;
    upsert?: Prisma.UserUpsertWithoutListingsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutListingsInput, Prisma.UserUpdateWithoutListingsInput>, Prisma.UserUncheckedUpdateWithoutListingsInput>;
};
export type UserCreateNestedOneWithoutBrandProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBrandProfileInput, Prisma.UserUncheckedCreateWithoutBrandProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBrandProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBrandProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBrandProfileInput, Prisma.UserUncheckedCreateWithoutBrandProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBrandProfileInput;
    upsert?: Prisma.UserUpsertWithoutBrandProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBrandProfileInput, Prisma.UserUpdateWithoutBrandProfileInput>, Prisma.UserUncheckedUpdateWithoutBrandProfileInput>;
};
export type UserCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.UserUpsertWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, Prisma.UserUpdateWithoutOrdersInput>, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubscriptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubscriptionsInput;
    upsert?: Prisma.UserUpsertWithoutSubscriptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSubscriptionsInput, Prisma.UserUpdateWithoutSubscriptionsInput>, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
};
export type UserCreateNestedOneWithoutLedgerEntriesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntriesInput, Prisma.UserUncheckedCreateWithoutLedgerEntriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedgerEntriesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntriesInput, Prisma.UserUncheckedCreateWithoutLedgerEntriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedgerEntriesInput;
    upsert?: Prisma.UserUpsertWithoutLedgerEntriesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLedgerEntriesInput, Prisma.UserUpdateWithoutLedgerEntriesInput>, Prisma.UserUncheckedUpdateWithoutLedgerEntriesInput>;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type UserCreateWithoutAnimalsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAnimalsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAnimalsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnimalsInput, Prisma.UserUncheckedCreateWithoutAnimalsInput>;
};
export type UserUpsertWithoutAnimalsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAnimalsInput, Prisma.UserUncheckedUpdateWithoutAnimalsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnimalsInput, Prisma.UserUncheckedCreateWithoutAnimalsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAnimalsInput, Prisma.UserUncheckedUpdateWithoutAnimalsInput>;
};
export type UserUpdateWithoutAnimalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAnimalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBreederProfileInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBreederProfileInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBreederProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBreederProfileInput, Prisma.UserUncheckedCreateWithoutBreederProfileInput>;
};
export type UserUpsertWithoutBreederProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBreederProfileInput, Prisma.UserUncheckedUpdateWithoutBreederProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBreederProfileInput, Prisma.UserUncheckedCreateWithoutBreederProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBreederProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBreederProfileInput, Prisma.UserUncheckedUpdateWithoutBreederProfileInput>;
};
export type UserUpdateWithoutBreederProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBreederProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutDoctorProfileInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutDoctorProfileInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutDoctorProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
};
export type UserUpsertWithoutDoctorProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDoctorProfileInput, Prisma.UserUncheckedUpdateWithoutDoctorProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDoctorProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDoctorProfileInput, Prisma.UserUncheckedUpdateWithoutDoctorProfileInput>;
};
export type UserUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAppointmentsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAppointmentsInput, Prisma.UserUncheckedCreateWithoutAppointmentsInput>;
};
export type UserUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAppointmentsInput, Prisma.UserUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAppointmentsInput, Prisma.UserUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAppointmentsInput, Prisma.UserUncheckedUpdateWithoutAppointmentsInput>;
};
export type UserUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutQuestionsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
};
export type UserUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutQuestionsInput, Prisma.UserUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutQuestionsInput, Prisma.UserUncheckedUpdateWithoutQuestionsInput>;
};
export type UserUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAnswersInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAnswersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
};
export type UserUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAnswersInput, Prisma.UserUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAnswersInput, Prisma.UserUncheckedUpdateWithoutAnswersInput>;
};
export type UserUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutQuestionVotesInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutQuestionVotesInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutQuestionVotesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionVotesInput, Prisma.UserUncheckedCreateWithoutQuestionVotesInput>;
};
export type UserUpsertWithoutQuestionVotesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutQuestionVotesInput, Prisma.UserUncheckedUpdateWithoutQuestionVotesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionVotesInput, Prisma.UserUncheckedCreateWithoutQuestionVotesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutQuestionVotesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutQuestionVotesInput, Prisma.UserUncheckedUpdateWithoutQuestionVotesInput>;
};
export type UserUpdateWithoutQuestionVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutQuestionVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAnswerVotesInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAnswerVotesInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAnswerVotesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswerVotesInput, Prisma.UserUncheckedCreateWithoutAnswerVotesInput>;
};
export type UserUpsertWithoutAnswerVotesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAnswerVotesInput, Prisma.UserUncheckedUpdateWithoutAnswerVotesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswerVotesInput, Prisma.UserUncheckedCreateWithoutAnswerVotesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAnswerVotesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAnswerVotesInput, Prisma.UserUncheckedUpdateWithoutAnswerVotesInput>;
};
export type UserUpdateWithoutAnswerVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAnswerVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReportsFiledInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReportsFiledInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReportsFiledInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsFiledInput, Prisma.UserUncheckedCreateWithoutReportsFiledInput>;
};
export type UserCreateWithoutReportsReviewedInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReportsReviewedInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReportsReviewedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsReviewedInput, Prisma.UserUncheckedCreateWithoutReportsReviewedInput>;
};
export type UserUpsertWithoutReportsFiledInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReportsFiledInput, Prisma.UserUncheckedUpdateWithoutReportsFiledInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsFiledInput, Prisma.UserUncheckedCreateWithoutReportsFiledInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReportsFiledInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReportsFiledInput, Prisma.UserUncheckedUpdateWithoutReportsFiledInput>;
};
export type UserUpdateWithoutReportsFiledInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReportsFiledInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutReportsReviewedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReportsReviewedInput, Prisma.UserUncheckedUpdateWithoutReportsReviewedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsReviewedInput, Prisma.UserUncheckedCreateWithoutReportsReviewedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReportsReviewedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReportsReviewedInput, Prisma.UserUncheckedUpdateWithoutReportsReviewedInput>;
};
export type UserUpdateWithoutReportsReviewedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReportsReviewedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutListingsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutListingsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutListingsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutListingsInput, Prisma.UserUncheckedCreateWithoutListingsInput>;
};
export type UserUpsertWithoutListingsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutListingsInput, Prisma.UserUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutListingsInput, Prisma.UserUncheckedCreateWithoutListingsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutListingsInput, Prisma.UserUncheckedUpdateWithoutListingsInput>;
};
export type UserUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBrandProfileInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBrandProfileInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBrandProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBrandProfileInput, Prisma.UserUncheckedCreateWithoutBrandProfileInput>;
};
export type UserUpsertWithoutBrandProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBrandProfileInput, Prisma.UserUncheckedUpdateWithoutBrandProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBrandProfileInput, Prisma.UserUncheckedCreateWithoutBrandProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBrandProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBrandProfileInput, Prisma.UserUncheckedUpdateWithoutBrandProfileInput>;
};
export type UserUpdateWithoutBrandProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBrandProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOrdersInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
};
export type UserUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSubscriptionsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    ledgerEntries?: Prisma.PlatformLedgerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
};
export type UserUpsertWithoutSubscriptionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSubscriptionsInput, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSubscriptionsInput, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
};
export type UserUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    ledgerEntries?: Prisma.PlatformLedgerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLedgerEntriesInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    phone: string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    lastLoginAt?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutOwnerInput;
    listings?: Prisma.CattleListingUncheckedCreateNestedManyWithoutOwnerInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    breederProfile?: Prisma.BreederProfileUncheckedCreateNestedOneWithoutUserInput;
    brandProfile?: Prisma.BrandProfileUncheckedCreateNestedOneWithoutUserInput;
    appointments?: Prisma.DoctorAppointmentUncheckedCreateNestedManyWithoutPatientInput;
    orders?: Prisma.MarketplaceOrderUncheckedCreateNestedManyWithoutBuyerInput;
    questions?: Prisma.ForumQuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionVotes?: Prisma.QuestionVoteUncheckedCreateNestedManyWithoutUserInput;
    answerVotes?: Prisma.AnswerVoteUncheckedCreateNestedManyWithoutUserInput;
    reportsFiled?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReporterInput;
    reportsReviewed?: Prisma.ForumReportUncheckedCreateNestedManyWithoutReviewerInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLedgerEntriesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntriesInput, Prisma.UserUncheckedCreateWithoutLedgerEntriesInput>;
};
export type UserUpsertWithoutLedgerEntriesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLedgerEntriesInput, Prisma.UserUncheckedUpdateWithoutLedgerEntriesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntriesInput, Prisma.UserUncheckedCreateWithoutLedgerEntriesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLedgerEntriesInput, Prisma.UserUncheckedUpdateWithoutLedgerEntriesInput>;
};
export type UserUpdateWithoutLedgerEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutOwnerNestedInput;
    listings?: Prisma.CattleListingUncheckedUpdateManyWithoutOwnerNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    breederProfile?: Prisma.BreederProfileUncheckedUpdateOneWithoutUserNestedInput;
    brandProfile?: Prisma.BrandProfileUncheckedUpdateOneWithoutUserNestedInput;
    appointments?: Prisma.DoctorAppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    orders?: Prisma.MarketplaceOrderUncheckedUpdateManyWithoutBuyerNestedInput;
    questions?: Prisma.ForumQuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.ForumAnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionVotes?: Prisma.QuestionVoteUncheckedUpdateManyWithoutUserNestedInput;
    answerVotes?: Prisma.AnswerVoteUncheckedUpdateManyWithoutUserNestedInput;
    reportsFiled?: Prisma.ForumReportUncheckedUpdateManyWithoutReporterNestedInput;
    reportsReviewed?: Prisma.ForumReportUncheckedUpdateManyWithoutReviewerNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    animals: number;
    listings: number;
    appointments: number;
    orders: number;
    questions: number;
    answers: number;
    questionVotes: number;
    answerVotes: number;
    reportsFiled: number;
    reportsReviewed: number;
    subscriptions: number;
    ledgerEntries: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    animals?: boolean | UserCountOutputTypeCountAnimalsArgs;
    listings?: boolean | UserCountOutputTypeCountListingsArgs;
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs;
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs;
    answers?: boolean | UserCountOutputTypeCountAnswersArgs;
    questionVotes?: boolean | UserCountOutputTypeCountQuestionVotesArgs;
    answerVotes?: boolean | UserCountOutputTypeCountAnswerVotesArgs;
    reportsFiled?: boolean | UserCountOutputTypeCountReportsFiledArgs;
    reportsReviewed?: boolean | UserCountOutputTypeCountReportsReviewedArgs;
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs;
    ledgerEntries?: boolean | UserCountOutputTypeCountLedgerEntriesArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAnimalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimalWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountListingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CattleListingWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorAppointmentWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketplaceOrderWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumQuestionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumAnswerWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountQuestionVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionVoteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAnswerVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerVoteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReportsFiledArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumReportWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReportsReviewedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ForumReportWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlatformLedgerWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    status?: boolean;
    lastLoginAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    animals?: boolean | Prisma.User$animalsArgs<ExtArgs>;
    listings?: boolean | Prisma.User$listingsArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.User$doctorProfileArgs<ExtArgs>;
    breederProfile?: boolean | Prisma.User$breederProfileArgs<ExtArgs>;
    brandProfile?: boolean | Prisma.User$brandProfileArgs<ExtArgs>;
    appointments?: boolean | Prisma.User$appointmentsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    questions?: boolean | Prisma.User$questionsArgs<ExtArgs>;
    answers?: boolean | Prisma.User$answersArgs<ExtArgs>;
    questionVotes?: boolean | Prisma.User$questionVotesArgs<ExtArgs>;
    answerVotes?: boolean | Prisma.User$answerVotesArgs<ExtArgs>;
    reportsFiled?: boolean | Prisma.User$reportsFiledArgs<ExtArgs>;
    reportsReviewed?: boolean | Prisma.User$reportsReviewedArgs<ExtArgs>;
    subscriptions?: boolean | Prisma.User$subscriptionsArgs<ExtArgs>;
    ledgerEntries?: boolean | Prisma.User$ledgerEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    status?: boolean;
    lastLoginAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    status?: boolean;
    lastLoginAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    status?: boolean;
    lastLoginAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "phone" | "avatarUrl" | "role" | "status" | "lastLoginAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    animals?: boolean | Prisma.User$animalsArgs<ExtArgs>;
    listings?: boolean | Prisma.User$listingsArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.User$doctorProfileArgs<ExtArgs>;
    breederProfile?: boolean | Prisma.User$breederProfileArgs<ExtArgs>;
    brandProfile?: boolean | Prisma.User$brandProfileArgs<ExtArgs>;
    appointments?: boolean | Prisma.User$appointmentsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    questions?: boolean | Prisma.User$questionsArgs<ExtArgs>;
    answers?: boolean | Prisma.User$answersArgs<ExtArgs>;
    questionVotes?: boolean | Prisma.User$questionVotesArgs<ExtArgs>;
    answerVotes?: boolean | Prisma.User$answerVotesArgs<ExtArgs>;
    reportsFiled?: boolean | Prisma.User$reportsFiledArgs<ExtArgs>;
    reportsReviewed?: boolean | Prisma.User$reportsReviewedArgs<ExtArgs>;
    subscriptions?: boolean | Prisma.User$subscriptionsArgs<ExtArgs>;
    ledgerEntries?: boolean | Prisma.User$ledgerEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        animals: Prisma.$AnimalPayload<ExtArgs>[];
        listings: Prisma.$CattleListingPayload<ExtArgs>[];
        doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs> | null;
        breederProfile: Prisma.$BreederProfilePayload<ExtArgs> | null;
        brandProfile: Prisma.$BrandProfilePayload<ExtArgs> | null;
        appointments: Prisma.$DoctorAppointmentPayload<ExtArgs>[];
        orders: Prisma.$MarketplaceOrderPayload<ExtArgs>[];
        questions: Prisma.$ForumQuestionPayload<ExtArgs>[];
        answers: Prisma.$ForumAnswerPayload<ExtArgs>[];
        questionVotes: Prisma.$QuestionVotePayload<ExtArgs>[];
        answerVotes: Prisma.$AnswerVotePayload<ExtArgs>[];
        reportsFiled: Prisma.$ForumReportPayload<ExtArgs>[];
        reportsReviewed: Prisma.$ForumReportPayload<ExtArgs>[];
        subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[];
        ledgerEntries: Prisma.$PlatformLedgerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string | null;
        name: string | null;
        phone: string;
        avatarUrl: runtime.JsonValue | null;
        role: $Enums.UserRole;
        status: $Enums.UserStatus;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    animals<T extends Prisma.User$animalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listings<T extends Prisma.User$listingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    doctorProfile<T extends Prisma.User$doctorProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$doctorProfileArgs<ExtArgs>>): Prisma.Prisma__DoctorProfileClient<runtime.Types.Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    breederProfile<T extends Prisma.User$breederProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$breederProfileArgs<ExtArgs>>): Prisma.Prisma__BreederProfileClient<runtime.Types.Result.GetResult<Prisma.$BreederProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    brandProfile<T extends Prisma.User$brandProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$brandProfileArgs<ExtArgs>>): Prisma.Prisma__BrandProfileClient<runtime.Types.Result.GetResult<Prisma.$BrandProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    appointments<T extends Prisma.User$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.User$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketplaceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    questions<T extends Prisma.User$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    answers<T extends Prisma.User$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    questionVotes<T extends Prisma.User$questionVotesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$questionVotesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    answerVotes<T extends Prisma.User$answerVotesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$answerVotesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportsFiled<T extends Prisma.User$reportsFiledArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reportsFiledArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportsReviewed<T extends Prisma.User$reportsReviewedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reportsReviewedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ForumReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subscriptions<T extends Prisma.User$subscriptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ledgerEntries<T extends Prisma.User$ledgerEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlatformLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'Json'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly status: Prisma.FieldRef<"User", 'UserStatus'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.animals
 */
export type User$animalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Animal
     */
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where?: Prisma.AnimalWhereInput;
    orderBy?: Prisma.AnimalOrderByWithRelationInput | Prisma.AnimalOrderByWithRelationInput[];
    cursor?: Prisma.AnimalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimalScalarFieldEnum | Prisma.AnimalScalarFieldEnum[];
};
/**
 * User.listings
 */
export type User$listingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CattleListing
     */
    select?: Prisma.CattleListingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CattleListing
     */
    omit?: Prisma.CattleListingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CattleListingInclude<ExtArgs> | null;
    where?: Prisma.CattleListingWhereInput;
    orderBy?: Prisma.CattleListingOrderByWithRelationInput | Prisma.CattleListingOrderByWithRelationInput[];
    cursor?: Prisma.CattleListingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CattleListingScalarFieldEnum | Prisma.CattleListingScalarFieldEnum[];
};
/**
 * User.doctorProfile
 */
export type User$doctorProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: Prisma.DoctorProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: Prisma.DoctorProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorProfileInclude<ExtArgs> | null;
    where?: Prisma.DoctorProfileWhereInput;
};
/**
 * User.breederProfile
 */
export type User$breederProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreederProfile
     */
    select?: Prisma.BreederProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreederProfile
     */
    omit?: Prisma.BreederProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreederProfileInclude<ExtArgs> | null;
    where?: Prisma.BreederProfileWhereInput;
};
/**
 * User.brandProfile
 */
export type User$brandProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandProfile
     */
    select?: Prisma.BrandProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandProfile
     */
    omit?: Prisma.BrandProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandProfileInclude<ExtArgs> | null;
    where?: Prisma.BrandProfileWhereInput;
};
/**
 * User.appointments
 */
export type User$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAppointment
     */
    select?: Prisma.DoctorAppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorAppointment
     */
    omit?: Prisma.DoctorAppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorAppointmentInclude<ExtArgs> | null;
    where?: Prisma.DoctorAppointmentWhereInput;
    orderBy?: Prisma.DoctorAppointmentOrderByWithRelationInput | Prisma.DoctorAppointmentOrderByWithRelationInput[];
    cursor?: Prisma.DoctorAppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorAppointmentScalarFieldEnum | Prisma.DoctorAppointmentScalarFieldEnum[];
};
/**
 * User.orders
 */
export type User$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceOrder
     */
    select?: Prisma.MarketplaceOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceOrder
     */
    omit?: Prisma.MarketplaceOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceOrderInclude<ExtArgs> | null;
    where?: Prisma.MarketplaceOrderWhereInput;
    orderBy?: Prisma.MarketplaceOrderOrderByWithRelationInput | Prisma.MarketplaceOrderOrderByWithRelationInput[];
    cursor?: Prisma.MarketplaceOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketplaceOrderScalarFieldEnum | Prisma.MarketplaceOrderScalarFieldEnum[];
};
/**
 * User.questions
 */
export type User$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ForumQuestionOrderByWithRelationInput | Prisma.ForumQuestionOrderByWithRelationInput[];
    cursor?: Prisma.ForumQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ForumQuestionScalarFieldEnum | Prisma.ForumQuestionScalarFieldEnum[];
};
/**
 * User.answers
 */
export type User$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.questionVotes
 */
export type User$questionVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionVote
     */
    select?: Prisma.QuestionVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionVote
     */
    omit?: Prisma.QuestionVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionVoteInclude<ExtArgs> | null;
    where?: Prisma.QuestionVoteWhereInput;
    orderBy?: Prisma.QuestionVoteOrderByWithRelationInput | Prisma.QuestionVoteOrderByWithRelationInput[];
    cursor?: Prisma.QuestionVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionVoteScalarFieldEnum | Prisma.QuestionVoteScalarFieldEnum[];
};
/**
 * User.answerVotes
 */
export type User$answerVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerVote
     */
    select?: Prisma.AnswerVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnswerVote
     */
    omit?: Prisma.AnswerVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AnswerVoteInclude<ExtArgs> | null;
    where?: Prisma.AnswerVoteWhereInput;
    orderBy?: Prisma.AnswerVoteOrderByWithRelationInput | Prisma.AnswerVoteOrderByWithRelationInput[];
    cursor?: Prisma.AnswerVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnswerVoteScalarFieldEnum | Prisma.AnswerVoteScalarFieldEnum[];
};
/**
 * User.reportsFiled
 */
export type User$reportsFiledArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.reportsReviewed
 */
export type User$reportsReviewedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.subscriptions
 */
export type User$subscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
/**
 * User.ledgerEntries
 */
export type User$ledgerEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLedger
     */
    select?: Prisma.PlatformLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformLedger
     */
    omit?: Prisma.PlatformLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlatformLedgerInclude<ExtArgs> | null;
    where?: Prisma.PlatformLedgerWhereInput;
    orderBy?: Prisma.PlatformLedgerOrderByWithRelationInput | Prisma.PlatformLedgerOrderByWithRelationInput[];
    cursor?: Prisma.PlatformLedgerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlatformLedgerScalarFieldEnum | Prisma.PlatformLedgerScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map