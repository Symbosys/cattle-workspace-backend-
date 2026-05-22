import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BreedingRequest
 *
 */
export type BreedingRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$BreedingRequestPayload>;
export type AggregateBreedingRequest = {
    _count: BreedingRequestCountAggregateOutputType | null;
    _avg: BreedingRequestAvgAggregateOutputType | null;
    _sum: BreedingRequestSumAggregateOutputType | null;
    _min: BreedingRequestMinAggregateOutputType | null;
    _max: BreedingRequestMaxAggregateOutputType | null;
};
export type BreedingRequestAvgAggregateOutputType = {
    agreedPrice: runtime.Decimal | null;
};
export type BreedingRequestSumAggregateOutputType = {
    agreedPrice: runtime.Decimal | null;
};
export type BreedingRequestMinAggregateOutputType = {
    id: string | null;
    breederId: string | null;
    requesterId: string | null;
    requesterAnimalId: string | null;
    breederAnimalId: string | null;
    status: $Enums.AppointmentStatus | null;
    agreedPrice: runtime.Decimal | null;
    paymentIntentId: string | null;
    breedingDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BreedingRequestMaxAggregateOutputType = {
    id: string | null;
    breederId: string | null;
    requesterId: string | null;
    requesterAnimalId: string | null;
    breederAnimalId: string | null;
    status: $Enums.AppointmentStatus | null;
    agreedPrice: runtime.Decimal | null;
    paymentIntentId: string | null;
    breedingDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BreedingRequestCountAggregateOutputType = {
    id: number;
    breederId: number;
    requesterId: number;
    requesterAnimalId: number;
    breederAnimalId: number;
    status: number;
    agreedPrice: number;
    paymentIntentId: number;
    breedingDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BreedingRequestAvgAggregateInputType = {
    agreedPrice?: true;
};
export type BreedingRequestSumAggregateInputType = {
    agreedPrice?: true;
};
export type BreedingRequestMinAggregateInputType = {
    id?: true;
    breederId?: true;
    requesterId?: true;
    requesterAnimalId?: true;
    breederAnimalId?: true;
    status?: true;
    agreedPrice?: true;
    paymentIntentId?: true;
    breedingDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BreedingRequestMaxAggregateInputType = {
    id?: true;
    breederId?: true;
    requesterId?: true;
    requesterAnimalId?: true;
    breederAnimalId?: true;
    status?: true;
    agreedPrice?: true;
    paymentIntentId?: true;
    breedingDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BreedingRequestCountAggregateInputType = {
    id?: true;
    breederId?: true;
    requesterId?: true;
    requesterAnimalId?: true;
    breederAnimalId?: true;
    status?: true;
    agreedPrice?: true;
    paymentIntentId?: true;
    breedingDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BreedingRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BreedingRequest to aggregate.
     */
    where?: Prisma.BreedingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BreedingRequests to fetch.
     */
    orderBy?: Prisma.BreedingRequestOrderByWithRelationInput | Prisma.BreedingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BreedingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BreedingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BreedingRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BreedingRequests
    **/
    _count?: true | BreedingRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BreedingRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BreedingRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BreedingRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BreedingRequestMaxAggregateInputType;
};
export type GetBreedingRequestAggregateType<T extends BreedingRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateBreedingRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBreedingRequest[P]> : Prisma.GetScalarType<T[P], AggregateBreedingRequest[P]>;
};
export type BreedingRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreedingRequestWhereInput;
    orderBy?: Prisma.BreedingRequestOrderByWithAggregationInput | Prisma.BreedingRequestOrderByWithAggregationInput[];
    by: Prisma.BreedingRequestScalarFieldEnum[] | Prisma.BreedingRequestScalarFieldEnum;
    having?: Prisma.BreedingRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BreedingRequestCountAggregateInputType | true;
    _avg?: BreedingRequestAvgAggregateInputType;
    _sum?: BreedingRequestSumAggregateInputType;
    _min?: BreedingRequestMinAggregateInputType;
    _max?: BreedingRequestMaxAggregateInputType;
};
export type BreedingRequestGroupByOutputType = {
    id: string;
    breederId: string;
    requesterId: string;
    requesterAnimalId: string;
    breederAnimalId: string;
    status: $Enums.AppointmentStatus;
    agreedPrice: runtime.Decimal;
    paymentIntentId: string | null;
    breedingDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BreedingRequestCountAggregateOutputType | null;
    _avg: BreedingRequestAvgAggregateOutputType | null;
    _sum: BreedingRequestSumAggregateOutputType | null;
    _min: BreedingRequestMinAggregateOutputType | null;
    _max: BreedingRequestMaxAggregateOutputType | null;
};
export type GetBreedingRequestGroupByPayload<T extends BreedingRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BreedingRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BreedingRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BreedingRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BreedingRequestGroupByOutputType[P]>;
}>>;
export type BreedingRequestWhereInput = {
    AND?: Prisma.BreedingRequestWhereInput | Prisma.BreedingRequestWhereInput[];
    OR?: Prisma.BreedingRequestWhereInput[];
    NOT?: Prisma.BreedingRequestWhereInput | Prisma.BreedingRequestWhereInput[];
    id?: Prisma.StringFilter<"BreedingRequest"> | string;
    breederId?: Prisma.StringFilter<"BreedingRequest"> | string;
    requesterId?: Prisma.StringFilter<"BreedingRequest"> | string;
    requesterAnimalId?: Prisma.StringFilter<"BreedingRequest"> | string;
    breederAnimalId?: Prisma.StringFilter<"BreedingRequest"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"BreedingRequest"> | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFilter<"BreedingRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.StringNullableFilter<"BreedingRequest"> | string | null;
    breedingDate?: Prisma.DateTimeNullableFilter<"BreedingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BreedingRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BreedingRequest"> | Date | string;
    breeder?: Prisma.XOR<Prisma.BreederProfileScalarRelationFilter, Prisma.BreederProfileWhereInput>;
};
export type BreedingRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    breederId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    requesterAnimalId?: Prisma.SortOrder;
    breederAnimalId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreedPrice?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    breedingDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    breeder?: Prisma.BreederProfileOrderByWithRelationInput;
};
export type BreedingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    paymentIntentId?: string;
    AND?: Prisma.BreedingRequestWhereInput | Prisma.BreedingRequestWhereInput[];
    OR?: Prisma.BreedingRequestWhereInput[];
    NOT?: Prisma.BreedingRequestWhereInput | Prisma.BreedingRequestWhereInput[];
    breederId?: Prisma.StringFilter<"BreedingRequest"> | string;
    requesterId?: Prisma.StringFilter<"BreedingRequest"> | string;
    requesterAnimalId?: Prisma.StringFilter<"BreedingRequest"> | string;
    breederAnimalId?: Prisma.StringFilter<"BreedingRequest"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"BreedingRequest"> | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFilter<"BreedingRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    breedingDate?: Prisma.DateTimeNullableFilter<"BreedingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BreedingRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BreedingRequest"> | Date | string;
    breeder?: Prisma.XOR<Prisma.BreederProfileScalarRelationFilter, Prisma.BreederProfileWhereInput>;
}, "id" | "paymentIntentId">;
export type BreedingRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    breederId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    requesterAnimalId?: Prisma.SortOrder;
    breederAnimalId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreedPrice?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    breedingDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BreedingRequestCountOrderByAggregateInput;
    _avg?: Prisma.BreedingRequestAvgOrderByAggregateInput;
    _max?: Prisma.BreedingRequestMaxOrderByAggregateInput;
    _min?: Prisma.BreedingRequestMinOrderByAggregateInput;
    _sum?: Prisma.BreedingRequestSumOrderByAggregateInput;
};
export type BreedingRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.BreedingRequestScalarWhereWithAggregatesInput | Prisma.BreedingRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.BreedingRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BreedingRequestScalarWhereWithAggregatesInput | Prisma.BreedingRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BreedingRequest"> | string;
    breederId?: Prisma.StringWithAggregatesFilter<"BreedingRequest"> | string;
    requesterId?: Prisma.StringWithAggregatesFilter<"BreedingRequest"> | string;
    requesterAnimalId?: Prisma.StringWithAggregatesFilter<"BreedingRequest"> | string;
    breederAnimalId?: Prisma.StringWithAggregatesFilter<"BreedingRequest"> | string;
    status?: Prisma.EnumAppointmentStatusWithAggregatesFilter<"BreedingRequest"> | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalWithAggregatesFilter<"BreedingRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.StringNullableWithAggregatesFilter<"BreedingRequest"> | string | null;
    breedingDate?: Prisma.DateTimeNullableWithAggregatesFilter<"BreedingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BreedingRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BreedingRequest"> | Date | string;
};
export type BreedingRequestCreateInput = {
    id?: string;
    requesterId: string;
    requesterAnimalId: string;
    breederAnimalId: string;
    status?: $Enums.AppointmentStatus;
    agreedPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: string | null;
    breedingDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breeder: Prisma.BreederProfileCreateNestedOneWithoutBreedingRequestsInput;
};
export type BreedingRequestUncheckedCreateInput = {
    id?: string;
    breederId: string;
    requesterId: string;
    requesterAnimalId: string;
    breederAnimalId: string;
    status?: $Enums.AppointmentStatus;
    agreedPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: string | null;
    breedingDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BreedingRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    breederAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breedingDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breeder?: Prisma.BreederProfileUpdateOneRequiredWithoutBreedingRequestsNestedInput;
};
export type BreedingRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    breederId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    breederAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breedingDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreedingRequestCreateManyInput = {
    id?: string;
    breederId: string;
    requesterId: string;
    requesterAnimalId: string;
    breederAnimalId: string;
    status?: $Enums.AppointmentStatus;
    agreedPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: string | null;
    breedingDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BreedingRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    breederAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breedingDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreedingRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    breederId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    breederAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breedingDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreedingRequestListRelationFilter = {
    every?: Prisma.BreedingRequestWhereInput;
    some?: Prisma.BreedingRequestWhereInput;
    none?: Prisma.BreedingRequestWhereInput;
};
export type BreedingRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BreedingRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    breederId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    requesterAnimalId?: Prisma.SortOrder;
    breederAnimalId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreedPrice?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrder;
    breedingDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BreedingRequestAvgOrderByAggregateInput = {
    agreedPrice?: Prisma.SortOrder;
};
export type BreedingRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    breederId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    requesterAnimalId?: Prisma.SortOrder;
    breederAnimalId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreedPrice?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrder;
    breedingDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BreedingRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    breederId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    requesterAnimalId?: Prisma.SortOrder;
    breederAnimalId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreedPrice?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrder;
    breedingDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BreedingRequestSumOrderByAggregateInput = {
    agreedPrice?: Prisma.SortOrder;
};
export type BreedingRequestCreateNestedManyWithoutBreederInput = {
    create?: Prisma.XOR<Prisma.BreedingRequestCreateWithoutBreederInput, Prisma.BreedingRequestUncheckedCreateWithoutBreederInput> | Prisma.BreedingRequestCreateWithoutBreederInput[] | Prisma.BreedingRequestUncheckedCreateWithoutBreederInput[];
    connectOrCreate?: Prisma.BreedingRequestCreateOrConnectWithoutBreederInput | Prisma.BreedingRequestCreateOrConnectWithoutBreederInput[];
    createMany?: Prisma.BreedingRequestCreateManyBreederInputEnvelope;
    connect?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
};
export type BreedingRequestUncheckedCreateNestedManyWithoutBreederInput = {
    create?: Prisma.XOR<Prisma.BreedingRequestCreateWithoutBreederInput, Prisma.BreedingRequestUncheckedCreateWithoutBreederInput> | Prisma.BreedingRequestCreateWithoutBreederInput[] | Prisma.BreedingRequestUncheckedCreateWithoutBreederInput[];
    connectOrCreate?: Prisma.BreedingRequestCreateOrConnectWithoutBreederInput | Prisma.BreedingRequestCreateOrConnectWithoutBreederInput[];
    createMany?: Prisma.BreedingRequestCreateManyBreederInputEnvelope;
    connect?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
};
export type BreedingRequestUpdateManyWithoutBreederNestedInput = {
    create?: Prisma.XOR<Prisma.BreedingRequestCreateWithoutBreederInput, Prisma.BreedingRequestUncheckedCreateWithoutBreederInput> | Prisma.BreedingRequestCreateWithoutBreederInput[] | Prisma.BreedingRequestUncheckedCreateWithoutBreederInput[];
    connectOrCreate?: Prisma.BreedingRequestCreateOrConnectWithoutBreederInput | Prisma.BreedingRequestCreateOrConnectWithoutBreederInput[];
    upsert?: Prisma.BreedingRequestUpsertWithWhereUniqueWithoutBreederInput | Prisma.BreedingRequestUpsertWithWhereUniqueWithoutBreederInput[];
    createMany?: Prisma.BreedingRequestCreateManyBreederInputEnvelope;
    set?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    disconnect?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    delete?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    connect?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    update?: Prisma.BreedingRequestUpdateWithWhereUniqueWithoutBreederInput | Prisma.BreedingRequestUpdateWithWhereUniqueWithoutBreederInput[];
    updateMany?: Prisma.BreedingRequestUpdateManyWithWhereWithoutBreederInput | Prisma.BreedingRequestUpdateManyWithWhereWithoutBreederInput[];
    deleteMany?: Prisma.BreedingRequestScalarWhereInput | Prisma.BreedingRequestScalarWhereInput[];
};
export type BreedingRequestUncheckedUpdateManyWithoutBreederNestedInput = {
    create?: Prisma.XOR<Prisma.BreedingRequestCreateWithoutBreederInput, Prisma.BreedingRequestUncheckedCreateWithoutBreederInput> | Prisma.BreedingRequestCreateWithoutBreederInput[] | Prisma.BreedingRequestUncheckedCreateWithoutBreederInput[];
    connectOrCreate?: Prisma.BreedingRequestCreateOrConnectWithoutBreederInput | Prisma.BreedingRequestCreateOrConnectWithoutBreederInput[];
    upsert?: Prisma.BreedingRequestUpsertWithWhereUniqueWithoutBreederInput | Prisma.BreedingRequestUpsertWithWhereUniqueWithoutBreederInput[];
    createMany?: Prisma.BreedingRequestCreateManyBreederInputEnvelope;
    set?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    disconnect?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    delete?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    connect?: Prisma.BreedingRequestWhereUniqueInput | Prisma.BreedingRequestWhereUniqueInput[];
    update?: Prisma.BreedingRequestUpdateWithWhereUniqueWithoutBreederInput | Prisma.BreedingRequestUpdateWithWhereUniqueWithoutBreederInput[];
    updateMany?: Prisma.BreedingRequestUpdateManyWithWhereWithoutBreederInput | Prisma.BreedingRequestUpdateManyWithWhereWithoutBreederInput[];
    deleteMany?: Prisma.BreedingRequestScalarWhereInput | Prisma.BreedingRequestScalarWhereInput[];
};
export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus;
};
export type BreedingRequestCreateWithoutBreederInput = {
    id?: string;
    requesterId: string;
    requesterAnimalId: string;
    breederAnimalId: string;
    status?: $Enums.AppointmentStatus;
    agreedPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: string | null;
    breedingDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BreedingRequestUncheckedCreateWithoutBreederInput = {
    id?: string;
    requesterId: string;
    requesterAnimalId: string;
    breederAnimalId: string;
    status?: $Enums.AppointmentStatus;
    agreedPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: string | null;
    breedingDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BreedingRequestCreateOrConnectWithoutBreederInput = {
    where: Prisma.BreedingRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.BreedingRequestCreateWithoutBreederInput, Prisma.BreedingRequestUncheckedCreateWithoutBreederInput>;
};
export type BreedingRequestCreateManyBreederInputEnvelope = {
    data: Prisma.BreedingRequestCreateManyBreederInput | Prisma.BreedingRequestCreateManyBreederInput[];
    skipDuplicates?: boolean;
};
export type BreedingRequestUpsertWithWhereUniqueWithoutBreederInput = {
    where: Prisma.BreedingRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.BreedingRequestUpdateWithoutBreederInput, Prisma.BreedingRequestUncheckedUpdateWithoutBreederInput>;
    create: Prisma.XOR<Prisma.BreedingRequestCreateWithoutBreederInput, Prisma.BreedingRequestUncheckedCreateWithoutBreederInput>;
};
export type BreedingRequestUpdateWithWhereUniqueWithoutBreederInput = {
    where: Prisma.BreedingRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.BreedingRequestUpdateWithoutBreederInput, Prisma.BreedingRequestUncheckedUpdateWithoutBreederInput>;
};
export type BreedingRequestUpdateManyWithWhereWithoutBreederInput = {
    where: Prisma.BreedingRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.BreedingRequestUpdateManyMutationInput, Prisma.BreedingRequestUncheckedUpdateManyWithoutBreederInput>;
};
export type BreedingRequestScalarWhereInput = {
    AND?: Prisma.BreedingRequestScalarWhereInput | Prisma.BreedingRequestScalarWhereInput[];
    OR?: Prisma.BreedingRequestScalarWhereInput[];
    NOT?: Prisma.BreedingRequestScalarWhereInput | Prisma.BreedingRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"BreedingRequest"> | string;
    breederId?: Prisma.StringFilter<"BreedingRequest"> | string;
    requesterId?: Prisma.StringFilter<"BreedingRequest"> | string;
    requesterAnimalId?: Prisma.StringFilter<"BreedingRequest"> | string;
    breederAnimalId?: Prisma.StringFilter<"BreedingRequest"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"BreedingRequest"> | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFilter<"BreedingRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.StringNullableFilter<"BreedingRequest"> | string | null;
    breedingDate?: Prisma.DateTimeNullableFilter<"BreedingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BreedingRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BreedingRequest"> | Date | string;
};
export type BreedingRequestCreateManyBreederInput = {
    id?: string;
    requesterId: string;
    requesterAnimalId: string;
    breederAnimalId: string;
    status?: $Enums.AppointmentStatus;
    agreedPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: string | null;
    breedingDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BreedingRequestUpdateWithoutBreederInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    breederAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breedingDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreedingRequestUncheckedUpdateWithoutBreederInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    breederAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breedingDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreedingRequestUncheckedUpdateManyWithoutBreederInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    breederAnimalId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    agreedPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breedingDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BreedingRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    breederId?: boolean;
    requesterId?: boolean;
    requesterAnimalId?: boolean;
    breederAnimalId?: boolean;
    status?: boolean;
    agreedPrice?: boolean;
    paymentIntentId?: boolean;
    breedingDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    breeder?: boolean | Prisma.BreederProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breedingRequest"]>;
export type BreedingRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    breederId?: boolean;
    requesterId?: boolean;
    requesterAnimalId?: boolean;
    breederAnimalId?: boolean;
    status?: boolean;
    agreedPrice?: boolean;
    paymentIntentId?: boolean;
    breedingDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    breeder?: boolean | Prisma.BreederProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breedingRequest"]>;
export type BreedingRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    breederId?: boolean;
    requesterId?: boolean;
    requesterAnimalId?: boolean;
    breederAnimalId?: boolean;
    status?: boolean;
    agreedPrice?: boolean;
    paymentIntentId?: boolean;
    breedingDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    breeder?: boolean | Prisma.BreederProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breedingRequest"]>;
export type BreedingRequestSelectScalar = {
    id?: boolean;
    breederId?: boolean;
    requesterId?: boolean;
    requesterAnimalId?: boolean;
    breederAnimalId?: boolean;
    status?: boolean;
    agreedPrice?: boolean;
    paymentIntentId?: boolean;
    breedingDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BreedingRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "breederId" | "requesterId" | "requesterAnimalId" | "breederAnimalId" | "status" | "agreedPrice" | "paymentIntentId" | "breedingDate" | "createdAt" | "updatedAt", ExtArgs["result"]["breedingRequest"]>;
export type BreedingRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    breeder?: boolean | Prisma.BreederProfileDefaultArgs<ExtArgs>;
};
export type BreedingRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    breeder?: boolean | Prisma.BreederProfileDefaultArgs<ExtArgs>;
};
export type BreedingRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    breeder?: boolean | Prisma.BreederProfileDefaultArgs<ExtArgs>;
};
export type $BreedingRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BreedingRequest";
    objects: {
        breeder: Prisma.$BreederProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        breederId: string;
        requesterId: string;
        requesterAnimalId: string;
        breederAnimalId: string;
        status: $Enums.AppointmentStatus;
        agreedPrice: runtime.Decimal;
        paymentIntentId: string | null;
        breedingDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["breedingRequest"]>;
    composites: {};
};
export type BreedingRequestGetPayload<S extends boolean | null | undefined | BreedingRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload, S>;
export type BreedingRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BreedingRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BreedingRequestCountAggregateInputType | true;
};
export interface BreedingRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BreedingRequest'];
        meta: {
            name: 'BreedingRequest';
        };
    };
    /**
     * Find zero or one BreedingRequest that matches the filter.
     * @param {BreedingRequestFindUniqueArgs} args - Arguments to find a BreedingRequest
     * @example
     * // Get one BreedingRequest
     * const breedingRequest = await prisma.breedingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreedingRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, BreedingRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BreedingRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreedingRequestFindUniqueOrThrowArgs} args - Arguments to find a BreedingRequest
     * @example
     * // Get one BreedingRequest
     * const breedingRequest = await prisma.breedingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreedingRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BreedingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BreedingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingRequestFindFirstArgs} args - Arguments to find a BreedingRequest
     * @example
     * // Get one BreedingRequest
     * const breedingRequest = await prisma.breedingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreedingRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, BreedingRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BreedingRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingRequestFindFirstOrThrowArgs} args - Arguments to find a BreedingRequest
     * @example
     * // Get one BreedingRequest
     * const breedingRequest = await prisma.breedingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreedingRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BreedingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BreedingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BreedingRequests
     * const breedingRequests = await prisma.breedingRequest.findMany()
     *
     * // Get first 10 BreedingRequests
     * const breedingRequests = await prisma.breedingRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const breedingRequestWithIdOnly = await prisma.breedingRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BreedingRequestFindManyArgs>(args?: Prisma.SelectSubset<T, BreedingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BreedingRequest.
     * @param {BreedingRequestCreateArgs} args - Arguments to create a BreedingRequest.
     * @example
     * // Create one BreedingRequest
     * const BreedingRequest = await prisma.breedingRequest.create({
     *   data: {
     *     // ... data to create a BreedingRequest
     *   }
     * })
     *
     */
    create<T extends BreedingRequestCreateArgs>(args: Prisma.SelectSubset<T, BreedingRequestCreateArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BreedingRequests.
     * @param {BreedingRequestCreateManyArgs} args - Arguments to create many BreedingRequests.
     * @example
     * // Create many BreedingRequests
     * const breedingRequest = await prisma.breedingRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BreedingRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, BreedingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BreedingRequests and returns the data saved in the database.
     * @param {BreedingRequestCreateManyAndReturnArgs} args - Arguments to create many BreedingRequests.
     * @example
     * // Create many BreedingRequests
     * const breedingRequest = await prisma.breedingRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BreedingRequests and only return the `id`
     * const breedingRequestWithIdOnly = await prisma.breedingRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BreedingRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BreedingRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BreedingRequest.
     * @param {BreedingRequestDeleteArgs} args - Arguments to delete one BreedingRequest.
     * @example
     * // Delete one BreedingRequest
     * const BreedingRequest = await prisma.breedingRequest.delete({
     *   where: {
     *     // ... filter to delete one BreedingRequest
     *   }
     * })
     *
     */
    delete<T extends BreedingRequestDeleteArgs>(args: Prisma.SelectSubset<T, BreedingRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BreedingRequest.
     * @param {BreedingRequestUpdateArgs} args - Arguments to update one BreedingRequest.
     * @example
     * // Update one BreedingRequest
     * const breedingRequest = await prisma.breedingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BreedingRequestUpdateArgs>(args: Prisma.SelectSubset<T, BreedingRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BreedingRequests.
     * @param {BreedingRequestDeleteManyArgs} args - Arguments to filter BreedingRequests to delete.
     * @example
     * // Delete a few BreedingRequests
     * const { count } = await prisma.breedingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BreedingRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, BreedingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BreedingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BreedingRequests
     * const breedingRequest = await prisma.breedingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BreedingRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, BreedingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BreedingRequests and returns the data updated in the database.
     * @param {BreedingRequestUpdateManyAndReturnArgs} args - Arguments to update many BreedingRequests.
     * @example
     * // Update many BreedingRequests
     * const breedingRequest = await prisma.breedingRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BreedingRequests and only return the `id`
     * const breedingRequestWithIdOnly = await prisma.breedingRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends BreedingRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BreedingRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BreedingRequest.
     * @param {BreedingRequestUpsertArgs} args - Arguments to update or create a BreedingRequest.
     * @example
     * // Update or create a BreedingRequest
     * const breedingRequest = await prisma.breedingRequest.upsert({
     *   create: {
     *     // ... data to create a BreedingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BreedingRequest we want to update
     *   }
     * })
     */
    upsert<T extends BreedingRequestUpsertArgs>(args: Prisma.SelectSubset<T, BreedingRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__BreedingRequestClient<runtime.Types.Result.GetResult<Prisma.$BreedingRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BreedingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingRequestCountArgs} args - Arguments to filter BreedingRequests to count.
     * @example
     * // Count the number of BreedingRequests
     * const count = await prisma.breedingRequest.count({
     *   where: {
     *     // ... the filter for the BreedingRequests we want to count
     *   }
     * })
    **/
    count<T extends BreedingRequestCountArgs>(args?: Prisma.Subset<T, BreedingRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BreedingRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BreedingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BreedingRequestAggregateArgs>(args: Prisma.Subset<T, BreedingRequestAggregateArgs>): Prisma.PrismaPromise<GetBreedingRequestAggregateType<T>>;
    /**
     * Group by BreedingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BreedingRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BreedingRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: BreedingRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BreedingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreedingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BreedingRequest model
     */
    readonly fields: BreedingRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BreedingRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BreedingRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    breeder<T extends Prisma.BreederProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BreederProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__BreederProfileClient<runtime.Types.Result.GetResult<Prisma.$BreederProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BreedingRequest model
 */
export interface BreedingRequestFieldRefs {
    readonly id: Prisma.FieldRef<"BreedingRequest", 'String'>;
    readonly breederId: Prisma.FieldRef<"BreedingRequest", 'String'>;
    readonly requesterId: Prisma.FieldRef<"BreedingRequest", 'String'>;
    readonly requesterAnimalId: Prisma.FieldRef<"BreedingRequest", 'String'>;
    readonly breederAnimalId: Prisma.FieldRef<"BreedingRequest", 'String'>;
    readonly status: Prisma.FieldRef<"BreedingRequest", 'AppointmentStatus'>;
    readonly agreedPrice: Prisma.FieldRef<"BreedingRequest", 'Decimal'>;
    readonly paymentIntentId: Prisma.FieldRef<"BreedingRequest", 'String'>;
    readonly breedingDate: Prisma.FieldRef<"BreedingRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BreedingRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BreedingRequest", 'DateTime'>;
}
/**
 * BreedingRequest findUnique
 */
export type BreedingRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which BreedingRequest to fetch.
     */
    where: Prisma.BreedingRequestWhereUniqueInput;
};
/**
 * BreedingRequest findUniqueOrThrow
 */
export type BreedingRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which BreedingRequest to fetch.
     */
    where: Prisma.BreedingRequestWhereUniqueInput;
};
/**
 * BreedingRequest findFirst
 */
export type BreedingRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which BreedingRequest to fetch.
     */
    where?: Prisma.BreedingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BreedingRequests to fetch.
     */
    orderBy?: Prisma.BreedingRequestOrderByWithRelationInput | Prisma.BreedingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BreedingRequests.
     */
    cursor?: Prisma.BreedingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BreedingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BreedingRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BreedingRequests.
     */
    distinct?: Prisma.BreedingRequestScalarFieldEnum | Prisma.BreedingRequestScalarFieldEnum[];
};
/**
 * BreedingRequest findFirstOrThrow
 */
export type BreedingRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which BreedingRequest to fetch.
     */
    where?: Prisma.BreedingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BreedingRequests to fetch.
     */
    orderBy?: Prisma.BreedingRequestOrderByWithRelationInput | Prisma.BreedingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BreedingRequests.
     */
    cursor?: Prisma.BreedingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BreedingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BreedingRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BreedingRequests.
     */
    distinct?: Prisma.BreedingRequestScalarFieldEnum | Prisma.BreedingRequestScalarFieldEnum[];
};
/**
 * BreedingRequest findMany
 */
export type BreedingRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which BreedingRequests to fetch.
     */
    where?: Prisma.BreedingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BreedingRequests to fetch.
     */
    orderBy?: Prisma.BreedingRequestOrderByWithRelationInput | Prisma.BreedingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BreedingRequests.
     */
    cursor?: Prisma.BreedingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BreedingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BreedingRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BreedingRequests.
     */
    distinct?: Prisma.BreedingRequestScalarFieldEnum | Prisma.BreedingRequestScalarFieldEnum[];
};
/**
 * BreedingRequest create
 */
export type BreedingRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a BreedingRequest.
     */
    data: Prisma.XOR<Prisma.BreedingRequestCreateInput, Prisma.BreedingRequestUncheckedCreateInput>;
};
/**
 * BreedingRequest createMany
 */
export type BreedingRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BreedingRequests.
     */
    data: Prisma.BreedingRequestCreateManyInput | Prisma.BreedingRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BreedingRequest createManyAndReturn
 */
export type BreedingRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many BreedingRequests.
     */
    data: Prisma.BreedingRequestCreateManyInput | Prisma.BreedingRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BreedingRequest update
 */
export type BreedingRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a BreedingRequest.
     */
    data: Prisma.XOR<Prisma.BreedingRequestUpdateInput, Prisma.BreedingRequestUncheckedUpdateInput>;
    /**
     * Choose, which BreedingRequest to update.
     */
    where: Prisma.BreedingRequestWhereUniqueInput;
};
/**
 * BreedingRequest updateMany
 */
export type BreedingRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BreedingRequests.
     */
    data: Prisma.XOR<Prisma.BreedingRequestUpdateManyMutationInput, Prisma.BreedingRequestUncheckedUpdateManyInput>;
    /**
     * Filter which BreedingRequests to update
     */
    where?: Prisma.BreedingRequestWhereInput;
    /**
     * Limit how many BreedingRequests to update.
     */
    limit?: number;
};
/**
 * BreedingRequest updateManyAndReturn
 */
export type BreedingRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * The data used to update BreedingRequests.
     */
    data: Prisma.XOR<Prisma.BreedingRequestUpdateManyMutationInput, Prisma.BreedingRequestUncheckedUpdateManyInput>;
    /**
     * Filter which BreedingRequests to update
     */
    where?: Prisma.BreedingRequestWhereInput;
    /**
     * Limit how many BreedingRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BreedingRequest upsert
 */
export type BreedingRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the BreedingRequest to update in case it exists.
     */
    where: Prisma.BreedingRequestWhereUniqueInput;
    /**
     * In case the BreedingRequest found by the `where` argument doesn't exist, create a new BreedingRequest with this data.
     */
    create: Prisma.XOR<Prisma.BreedingRequestCreateInput, Prisma.BreedingRequestUncheckedCreateInput>;
    /**
     * In case the BreedingRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BreedingRequestUpdateInput, Prisma.BreedingRequestUncheckedUpdateInput>;
};
/**
 * BreedingRequest delete
 */
export type BreedingRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
    /**
     * Filter which BreedingRequest to delete.
     */
    where: Prisma.BreedingRequestWhereUniqueInput;
};
/**
 * BreedingRequest deleteMany
 */
export type BreedingRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BreedingRequests to delete
     */
    where?: Prisma.BreedingRequestWhereInput;
    /**
     * Limit how many BreedingRequests to delete.
     */
    limit?: number;
};
/**
 * BreedingRequest without action
 */
export type BreedingRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingRequest
     */
    select?: Prisma.BreedingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BreedingRequest
     */
    omit?: Prisma.BreedingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BreedingRequestInclude<ExtArgs> | null;
};
//# sourceMappingURL=BreedingRequest.d.ts.map