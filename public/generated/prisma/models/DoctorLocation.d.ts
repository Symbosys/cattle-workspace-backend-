import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DoctorLocation
 *
 */
export type DoctorLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$DoctorLocationPayload>;
export type AggregateDoctorLocation = {
    _count: DoctorLocationCountAggregateOutputType | null;
    _avg: DoctorLocationAvgAggregateOutputType | null;
    _sum: DoctorLocationSumAggregateOutputType | null;
    _min: DoctorLocationMinAggregateOutputType | null;
    _max: DoctorLocationMaxAggregateOutputType | null;
};
export type DoctorLocationAvgAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type DoctorLocationSumAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type DoctorLocationMinAggregateOutputType = {
    id: string | null;
    doctorId: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    stateId: string | null;
    cityId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoctorLocationMaxAggregateOutputType = {
    id: string | null;
    doctorId: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    stateId: string | null;
    cityId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoctorLocationCountAggregateOutputType = {
    id: number;
    doctorId: number;
    latitude: number;
    longitude: number;
    stateId: number;
    cityId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DoctorLocationAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type DoctorLocationSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type DoctorLocationMinAggregateInputType = {
    id?: true;
    doctorId?: true;
    latitude?: true;
    longitude?: true;
    stateId?: true;
    cityId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoctorLocationMaxAggregateInputType = {
    id?: true;
    doctorId?: true;
    latitude?: true;
    longitude?: true;
    stateId?: true;
    cityId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoctorLocationCountAggregateInputType = {
    id?: true;
    doctorId?: true;
    latitude?: true;
    longitude?: true;
    stateId?: true;
    cityId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DoctorLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorLocation to aggregate.
     */
    where?: Prisma.DoctorLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DoctorLocations to fetch.
     */
    orderBy?: Prisma.DoctorLocationOrderByWithRelationInput | Prisma.DoctorLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DoctorLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DoctorLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DoctorLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DoctorLocations
    **/
    _count?: true | DoctorLocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DoctorLocationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DoctorLocationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DoctorLocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DoctorLocationMaxAggregateInputType;
};
export type GetDoctorLocationAggregateType<T extends DoctorLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctorLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoctorLocation[P]> : Prisma.GetScalarType<T[P], AggregateDoctorLocation[P]>;
};
export type DoctorLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorLocationWhereInput;
    orderBy?: Prisma.DoctorLocationOrderByWithAggregationInput | Prisma.DoctorLocationOrderByWithAggregationInput[];
    by: Prisma.DoctorLocationScalarFieldEnum[] | Prisma.DoctorLocationScalarFieldEnum;
    having?: Prisma.DoctorLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorLocationCountAggregateInputType | true;
    _avg?: DoctorLocationAvgAggregateInputType;
    _sum?: DoctorLocationSumAggregateInputType;
    _min?: DoctorLocationMinAggregateInputType;
    _max?: DoctorLocationMaxAggregateInputType;
};
export type DoctorLocationGroupByOutputType = {
    id: string;
    doctorId: string;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    stateId: string;
    cityId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: DoctorLocationCountAggregateOutputType | null;
    _avg: DoctorLocationAvgAggregateOutputType | null;
    _sum: DoctorLocationSumAggregateOutputType | null;
    _min: DoctorLocationMinAggregateOutputType | null;
    _max: DoctorLocationMaxAggregateOutputType | null;
};
export type GetDoctorLocationGroupByPayload<T extends DoctorLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DoctorLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DoctorLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DoctorLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DoctorLocationGroupByOutputType[P]>;
}>>;
export type DoctorLocationWhereInput = {
    AND?: Prisma.DoctorLocationWhereInput | Prisma.DoctorLocationWhereInput[];
    OR?: Prisma.DoctorLocationWhereInput[];
    NOT?: Prisma.DoctorLocationWhereInput | Prisma.DoctorLocationWhereInput[];
    id?: Prisma.StringFilter<"DoctorLocation"> | string;
    doctorId?: Prisma.StringFilter<"DoctorLocation"> | string;
    latitude?: Prisma.DecimalNullableFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFilter<"DoctorLocation"> | string;
    cityId?: Prisma.StringFilter<"DoctorLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"DoctorLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DoctorLocation"> | Date | string;
    doctor?: Prisma.XOR<Prisma.DoctorProfileScalarRelationFilter, Prisma.DoctorProfileWhereInput>;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.CityWhereInput>;
};
export type DoctorLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    doctor?: Prisma.DoctorProfileOrderByWithRelationInput;
    state?: Prisma.StateOrderByWithRelationInput;
    city?: Prisma.CityOrderByWithRelationInput;
};
export type DoctorLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DoctorLocationWhereInput | Prisma.DoctorLocationWhereInput[];
    OR?: Prisma.DoctorLocationWhereInput[];
    NOT?: Prisma.DoctorLocationWhereInput | Prisma.DoctorLocationWhereInput[];
    doctorId?: Prisma.StringFilter<"DoctorLocation"> | string;
    latitude?: Prisma.DecimalNullableFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFilter<"DoctorLocation"> | string;
    cityId?: Prisma.StringFilter<"DoctorLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"DoctorLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DoctorLocation"> | Date | string;
    doctor?: Prisma.XOR<Prisma.DoctorProfileScalarRelationFilter, Prisma.DoctorProfileWhereInput>;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.CityWhereInput>;
}, "id">;
export type DoctorLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DoctorLocationCountOrderByAggregateInput;
    _avg?: Prisma.DoctorLocationAvgOrderByAggregateInput;
    _max?: Prisma.DoctorLocationMaxOrderByAggregateInput;
    _min?: Prisma.DoctorLocationMinOrderByAggregateInput;
    _sum?: Prisma.DoctorLocationSumOrderByAggregateInput;
};
export type DoctorLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DoctorLocationScalarWhereWithAggregatesInput | Prisma.DoctorLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DoctorLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DoctorLocationScalarWhereWithAggregatesInput | Prisma.DoctorLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DoctorLocation"> | string;
    doctorId?: Prisma.StringWithAggregatesFilter<"DoctorLocation"> | string;
    latitude?: Prisma.DecimalNullableWithAggregatesFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableWithAggregatesFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringWithAggregatesFilter<"DoctorLocation"> | string;
    cityId?: Prisma.StringWithAggregatesFilter<"DoctorLocation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DoctorLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DoctorLocation"> | Date | string;
};
export type DoctorLocationCreateInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctor: Prisma.DoctorProfileCreateNestedOneWithoutDoctorLocationsInput;
    state: Prisma.StateCreateNestedOneWithoutDoctorLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutDoctorLocationsInput;
};
export type DoctorLocationUncheckedCreateInput = {
    id?: string;
    doctorId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: Prisma.DoctorProfileUpdateOneRequiredWithoutDoctorLocationsNestedInput;
    state?: Prisma.StateUpdateOneRequiredWithoutDoctorLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutDoctorLocationsNestedInput;
};
export type DoctorLocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationCreateManyInput = {
    id?: string;
    doctorId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationListRelationFilter = {
    every?: Prisma.DoctorLocationWhereInput;
    some?: Prisma.DoctorLocationWhereInput;
    none?: Prisma.DoctorLocationWhereInput;
};
export type DoctorLocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DoctorLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorLocationAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type DoctorLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorLocationSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type DoctorLocationCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutDoctorInput, Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorLocationCreateWithoutDoctorInput[] | Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput | Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorLocationCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
};
export type DoctorLocationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutDoctorInput, Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorLocationCreateWithoutDoctorInput[] | Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput | Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorLocationCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
};
export type DoctorLocationUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutDoctorInput, Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorLocationCreateWithoutDoctorInput[] | Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput | Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorLocationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorLocationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorLocationCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    disconnect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    delete?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    update?: Prisma.DoctorLocationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorLocationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorLocationUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorLocationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
};
export type DoctorLocationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutDoctorInput, Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorLocationCreateWithoutDoctorInput[] | Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput | Prisma.DoctorLocationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorLocationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorLocationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorLocationCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    disconnect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    delete?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    update?: Prisma.DoctorLocationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorLocationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorLocationUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorLocationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
};
export type DoctorLocationCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutStateInput, Prisma.DoctorLocationUncheckedCreateWithoutStateInput> | Prisma.DoctorLocationCreateWithoutStateInput[] | Prisma.DoctorLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutStateInput | Prisma.DoctorLocationCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.DoctorLocationCreateManyStateInputEnvelope;
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
};
export type DoctorLocationUncheckedCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutStateInput, Prisma.DoctorLocationUncheckedCreateWithoutStateInput> | Prisma.DoctorLocationCreateWithoutStateInput[] | Prisma.DoctorLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutStateInput | Prisma.DoctorLocationCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.DoctorLocationCreateManyStateInputEnvelope;
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
};
export type DoctorLocationUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutStateInput, Prisma.DoctorLocationUncheckedCreateWithoutStateInput> | Prisma.DoctorLocationCreateWithoutStateInput[] | Prisma.DoctorLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutStateInput | Prisma.DoctorLocationCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.DoctorLocationUpsertWithWhereUniqueWithoutStateInput | Prisma.DoctorLocationUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.DoctorLocationCreateManyStateInputEnvelope;
    set?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    disconnect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    delete?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    update?: Prisma.DoctorLocationUpdateWithWhereUniqueWithoutStateInput | Prisma.DoctorLocationUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.DoctorLocationUpdateManyWithWhereWithoutStateInput | Prisma.DoctorLocationUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
};
export type DoctorLocationUncheckedUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutStateInput, Prisma.DoctorLocationUncheckedCreateWithoutStateInput> | Prisma.DoctorLocationCreateWithoutStateInput[] | Prisma.DoctorLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutStateInput | Prisma.DoctorLocationCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.DoctorLocationUpsertWithWhereUniqueWithoutStateInput | Prisma.DoctorLocationUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.DoctorLocationCreateManyStateInputEnvelope;
    set?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    disconnect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    delete?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    update?: Prisma.DoctorLocationUpdateWithWhereUniqueWithoutStateInput | Prisma.DoctorLocationUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.DoctorLocationUpdateManyWithWhereWithoutStateInput | Prisma.DoctorLocationUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
};
export type DoctorLocationCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutCityInput, Prisma.DoctorLocationUncheckedCreateWithoutCityInput> | Prisma.DoctorLocationCreateWithoutCityInput[] | Prisma.DoctorLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutCityInput | Prisma.DoctorLocationCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.DoctorLocationCreateManyCityInputEnvelope;
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
};
export type DoctorLocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutCityInput, Prisma.DoctorLocationUncheckedCreateWithoutCityInput> | Prisma.DoctorLocationCreateWithoutCityInput[] | Prisma.DoctorLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutCityInput | Prisma.DoctorLocationCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.DoctorLocationCreateManyCityInputEnvelope;
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
};
export type DoctorLocationUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutCityInput, Prisma.DoctorLocationUncheckedCreateWithoutCityInput> | Prisma.DoctorLocationCreateWithoutCityInput[] | Prisma.DoctorLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutCityInput | Prisma.DoctorLocationCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.DoctorLocationUpsertWithWhereUniqueWithoutCityInput | Prisma.DoctorLocationUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.DoctorLocationCreateManyCityInputEnvelope;
    set?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    disconnect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    delete?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    update?: Prisma.DoctorLocationUpdateWithWhereUniqueWithoutCityInput | Prisma.DoctorLocationUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.DoctorLocationUpdateManyWithWhereWithoutCityInput | Prisma.DoctorLocationUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
};
export type DoctorLocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorLocationCreateWithoutCityInput, Prisma.DoctorLocationUncheckedCreateWithoutCityInput> | Prisma.DoctorLocationCreateWithoutCityInput[] | Prisma.DoctorLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.DoctorLocationCreateOrConnectWithoutCityInput | Prisma.DoctorLocationCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.DoctorLocationUpsertWithWhereUniqueWithoutCityInput | Prisma.DoctorLocationUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.DoctorLocationCreateManyCityInputEnvelope;
    set?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    disconnect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    delete?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    connect?: Prisma.DoctorLocationWhereUniqueInput | Prisma.DoctorLocationWhereUniqueInput[];
    update?: Prisma.DoctorLocationUpdateWithWhereUniqueWithoutCityInput | Prisma.DoctorLocationUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.DoctorLocationUpdateManyWithWhereWithoutCityInput | Prisma.DoctorLocationUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
};
export type DoctorLocationCreateWithoutDoctorInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutDoctorLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutDoctorLocationsInput;
};
export type DoctorLocationUncheckedCreateWithoutDoctorInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationCreateOrConnectWithoutDoctorInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorLocationCreateWithoutDoctorInput, Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput>;
};
export type DoctorLocationCreateManyDoctorInputEnvelope = {
    data: Prisma.DoctorLocationCreateManyDoctorInput | Prisma.DoctorLocationCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type DoctorLocationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoctorLocationUpdateWithoutDoctorInput, Prisma.DoctorLocationUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.DoctorLocationCreateWithoutDoctorInput, Prisma.DoctorLocationUncheckedCreateWithoutDoctorInput>;
};
export type DoctorLocationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoctorLocationUpdateWithoutDoctorInput, Prisma.DoctorLocationUncheckedUpdateWithoutDoctorInput>;
};
export type DoctorLocationUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.DoctorLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.DoctorLocationUpdateManyMutationInput, Prisma.DoctorLocationUncheckedUpdateManyWithoutDoctorInput>;
};
export type DoctorLocationScalarWhereInput = {
    AND?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
    OR?: Prisma.DoctorLocationScalarWhereInput[];
    NOT?: Prisma.DoctorLocationScalarWhereInput | Prisma.DoctorLocationScalarWhereInput[];
    id?: Prisma.StringFilter<"DoctorLocation"> | string;
    doctorId?: Prisma.StringFilter<"DoctorLocation"> | string;
    latitude?: Prisma.DecimalNullableFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"DoctorLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFilter<"DoctorLocation"> | string;
    cityId?: Prisma.StringFilter<"DoctorLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"DoctorLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DoctorLocation"> | Date | string;
};
export type DoctorLocationCreateWithoutStateInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctor: Prisma.DoctorProfileCreateNestedOneWithoutDoctorLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutDoctorLocationsInput;
};
export type DoctorLocationUncheckedCreateWithoutStateInput = {
    id?: string;
    doctorId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationCreateOrConnectWithoutStateInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorLocationCreateWithoutStateInput, Prisma.DoctorLocationUncheckedCreateWithoutStateInput>;
};
export type DoctorLocationCreateManyStateInputEnvelope = {
    data: Prisma.DoctorLocationCreateManyStateInput | Prisma.DoctorLocationCreateManyStateInput[];
    skipDuplicates?: boolean;
};
export type DoctorLocationUpsertWithWhereUniqueWithoutStateInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoctorLocationUpdateWithoutStateInput, Prisma.DoctorLocationUncheckedUpdateWithoutStateInput>;
    create: Prisma.XOR<Prisma.DoctorLocationCreateWithoutStateInput, Prisma.DoctorLocationUncheckedCreateWithoutStateInput>;
};
export type DoctorLocationUpdateWithWhereUniqueWithoutStateInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoctorLocationUpdateWithoutStateInput, Prisma.DoctorLocationUncheckedUpdateWithoutStateInput>;
};
export type DoctorLocationUpdateManyWithWhereWithoutStateInput = {
    where: Prisma.DoctorLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.DoctorLocationUpdateManyMutationInput, Prisma.DoctorLocationUncheckedUpdateManyWithoutStateInput>;
};
export type DoctorLocationCreateWithoutCityInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctor: Prisma.DoctorProfileCreateNestedOneWithoutDoctorLocationsInput;
    state: Prisma.StateCreateNestedOneWithoutDoctorLocationsInput;
};
export type DoctorLocationUncheckedCreateWithoutCityInput = {
    id?: string;
    doctorId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationCreateOrConnectWithoutCityInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorLocationCreateWithoutCityInput, Prisma.DoctorLocationUncheckedCreateWithoutCityInput>;
};
export type DoctorLocationCreateManyCityInputEnvelope = {
    data: Prisma.DoctorLocationCreateManyCityInput | Prisma.DoctorLocationCreateManyCityInput[];
    skipDuplicates?: boolean;
};
export type DoctorLocationUpsertWithWhereUniqueWithoutCityInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoctorLocationUpdateWithoutCityInput, Prisma.DoctorLocationUncheckedUpdateWithoutCityInput>;
    create: Prisma.XOR<Prisma.DoctorLocationCreateWithoutCityInput, Prisma.DoctorLocationUncheckedCreateWithoutCityInput>;
};
export type DoctorLocationUpdateWithWhereUniqueWithoutCityInput = {
    where: Prisma.DoctorLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoctorLocationUpdateWithoutCityInput, Prisma.DoctorLocationUncheckedUpdateWithoutCityInput>;
};
export type DoctorLocationUpdateManyWithWhereWithoutCityInput = {
    where: Prisma.DoctorLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.DoctorLocationUpdateManyMutationInput, Prisma.DoctorLocationUncheckedUpdateManyWithoutCityInput>;
};
export type DoctorLocationCreateManyDoctorInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutDoctorLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutDoctorLocationsNestedInput;
};
export type DoctorLocationUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationCreateManyStateInput = {
    id?: string;
    doctorId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationUpdateWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: Prisma.DoctorProfileUpdateOneRequiredWithoutDoctorLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutDoctorLocationsNestedInput;
};
export type DoctorLocationUncheckedUpdateWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationUncheckedUpdateManyWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationCreateManyCityInput = {
    id?: string;
    doctorId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorLocationUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: Prisma.DoctorProfileUpdateOneRequiredWithoutDoctorLocationsNestedInput;
    state?: Prisma.StateUpdateOneRequiredWithoutDoctorLocationsNestedInput;
};
export type DoctorLocationUncheckedUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationUncheckedUpdateManyWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    doctor?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctorLocation"]>;
export type DoctorLocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    doctor?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctorLocation"]>;
export type DoctorLocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    doctor?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctorLocation"]>;
export type DoctorLocationSelectScalar = {
    id?: boolean;
    doctorId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DoctorLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctorId" | "latitude" | "longitude" | "stateId" | "cityId" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorLocation"]>;
export type DoctorLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
};
export type DoctorLocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
};
export type DoctorLocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
};
export type $DoctorLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DoctorLocation";
    objects: {
        doctor: Prisma.$DoctorProfilePayload<ExtArgs>;
        state: Prisma.$StatePayload<ExtArgs>;
        city: Prisma.$CityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        doctorId: string;
        latitude: runtime.Decimal | null;
        longitude: runtime.Decimal | null;
        stateId: string;
        cityId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["doctorLocation"]>;
    composites: {};
};
export type DoctorLocationGetPayload<S extends boolean | null | undefined | DoctorLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload, S>;
export type DoctorLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DoctorLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DoctorLocationCountAggregateInputType | true;
};
export interface DoctorLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DoctorLocation'];
        meta: {
            name: 'DoctorLocation';
        };
    };
    /**
     * Find zero or one DoctorLocation that matches the filter.
     * @param {DoctorLocationFindUniqueArgs} args - Arguments to find a DoctorLocation
     * @example
     * // Get one DoctorLocation
     * const doctorLocation = await prisma.doctorLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, DoctorLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DoctorLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorLocationFindUniqueOrThrowArgs} args - Arguments to find a DoctorLocation
     * @example
     * // Get one DoctorLocation
     * const doctorLocation = await prisma.doctorLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DoctorLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DoctorLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorLocationFindFirstArgs} args - Arguments to find a DoctorLocation
     * @example
     * // Get one DoctorLocation
     * const doctorLocation = await prisma.doctorLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, DoctorLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DoctorLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorLocationFindFirstOrThrowArgs} args - Arguments to find a DoctorLocation
     * @example
     * // Get one DoctorLocation
     * const doctorLocation = await prisma.doctorLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DoctorLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DoctorLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorLocations
     * const doctorLocations = await prisma.doctorLocation.findMany()
     *
     * // Get first 10 DoctorLocations
     * const doctorLocations = await prisma.doctorLocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const doctorLocationWithIdOnly = await prisma.doctorLocation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DoctorLocationFindManyArgs>(args?: Prisma.SelectSubset<T, DoctorLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DoctorLocation.
     * @param {DoctorLocationCreateArgs} args - Arguments to create a DoctorLocation.
     * @example
     * // Create one DoctorLocation
     * const DoctorLocation = await prisma.doctorLocation.create({
     *   data: {
     *     // ... data to create a DoctorLocation
     *   }
     * })
     *
     */
    create<T extends DoctorLocationCreateArgs>(args: Prisma.SelectSubset<T, DoctorLocationCreateArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DoctorLocations.
     * @param {DoctorLocationCreateManyArgs} args - Arguments to create many DoctorLocations.
     * @example
     * // Create many DoctorLocations
     * const doctorLocation = await prisma.doctorLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DoctorLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, DoctorLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DoctorLocations and returns the data saved in the database.
     * @param {DoctorLocationCreateManyAndReturnArgs} args - Arguments to create many DoctorLocations.
     * @example
     * // Create many DoctorLocations
     * const doctorLocation = await prisma.doctorLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DoctorLocations and only return the `id`
     * const doctorLocationWithIdOnly = await prisma.doctorLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DoctorLocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DoctorLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DoctorLocation.
     * @param {DoctorLocationDeleteArgs} args - Arguments to delete one DoctorLocation.
     * @example
     * // Delete one DoctorLocation
     * const DoctorLocation = await prisma.doctorLocation.delete({
     *   where: {
     *     // ... filter to delete one DoctorLocation
     *   }
     * })
     *
     */
    delete<T extends DoctorLocationDeleteArgs>(args: Prisma.SelectSubset<T, DoctorLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DoctorLocation.
     * @param {DoctorLocationUpdateArgs} args - Arguments to update one DoctorLocation.
     * @example
     * // Update one DoctorLocation
     * const doctorLocation = await prisma.doctorLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DoctorLocationUpdateArgs>(args: Prisma.SelectSubset<T, DoctorLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DoctorLocations.
     * @param {DoctorLocationDeleteManyArgs} args - Arguments to filter DoctorLocations to delete.
     * @example
     * // Delete a few DoctorLocations
     * const { count } = await prisma.doctorLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DoctorLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DoctorLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DoctorLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorLocations
     * const doctorLocation = await prisma.doctorLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DoctorLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, DoctorLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DoctorLocations and returns the data updated in the database.
     * @param {DoctorLocationUpdateManyAndReturnArgs} args - Arguments to update many DoctorLocations.
     * @example
     * // Update many DoctorLocations
     * const doctorLocation = await prisma.doctorLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DoctorLocations and only return the `id`
     * const doctorLocationWithIdOnly = await prisma.doctorLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorLocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DoctorLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DoctorLocation.
     * @param {DoctorLocationUpsertArgs} args - Arguments to update or create a DoctorLocation.
     * @example
     * // Update or create a DoctorLocation
     * const doctorLocation = await prisma.doctorLocation.upsert({
     *   create: {
     *     // ... data to create a DoctorLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorLocation we want to update
     *   }
     * })
     */
    upsert<T extends DoctorLocationUpsertArgs>(args: Prisma.SelectSubset<T, DoctorLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__DoctorLocationClient<runtime.Types.Result.GetResult<Prisma.$DoctorLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DoctorLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorLocationCountArgs} args - Arguments to filter DoctorLocations to count.
     * @example
     * // Count the number of DoctorLocations
     * const count = await prisma.doctorLocation.count({
     *   where: {
     *     // ... the filter for the DoctorLocations we want to count
     *   }
     * })
    **/
    count<T extends DoctorLocationCountArgs>(args?: Prisma.Subset<T, DoctorLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DoctorLocationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DoctorLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorLocationAggregateArgs>(args: Prisma.Subset<T, DoctorLocationAggregateArgs>): Prisma.PrismaPromise<GetDoctorLocationAggregateType<T>>;
    /**
     * Group by DoctorLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorLocationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DoctorLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DoctorLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: DoctorLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DoctorLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DoctorLocation model
     */
    readonly fields: DoctorLocationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DoctorLocation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DoctorLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctor<T extends Prisma.DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorProfileClient<runtime.Types.Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    state<T extends Prisma.StateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StateDefaultArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    city<T extends Prisma.CityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CityDefaultArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the DoctorLocation model
 */
export interface DoctorLocationFieldRefs {
    readonly id: Prisma.FieldRef<"DoctorLocation", 'String'>;
    readonly doctorId: Prisma.FieldRef<"DoctorLocation", 'String'>;
    readonly latitude: Prisma.FieldRef<"DoctorLocation", 'Decimal'>;
    readonly longitude: Prisma.FieldRef<"DoctorLocation", 'Decimal'>;
    readonly stateId: Prisma.FieldRef<"DoctorLocation", 'String'>;
    readonly cityId: Prisma.FieldRef<"DoctorLocation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DoctorLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DoctorLocation", 'DateTime'>;
}
/**
 * DoctorLocation findUnique
 */
export type DoctorLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * Filter, which DoctorLocation to fetch.
     */
    where: Prisma.DoctorLocationWhereUniqueInput;
};
/**
 * DoctorLocation findUniqueOrThrow
 */
export type DoctorLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * Filter, which DoctorLocation to fetch.
     */
    where: Prisma.DoctorLocationWhereUniqueInput;
};
/**
 * DoctorLocation findFirst
 */
export type DoctorLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * Filter, which DoctorLocation to fetch.
     */
    where?: Prisma.DoctorLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DoctorLocations to fetch.
     */
    orderBy?: Prisma.DoctorLocationOrderByWithRelationInput | Prisma.DoctorLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DoctorLocations.
     */
    cursor?: Prisma.DoctorLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DoctorLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DoctorLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DoctorLocations.
     */
    distinct?: Prisma.DoctorLocationScalarFieldEnum | Prisma.DoctorLocationScalarFieldEnum[];
};
/**
 * DoctorLocation findFirstOrThrow
 */
export type DoctorLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * Filter, which DoctorLocation to fetch.
     */
    where?: Prisma.DoctorLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DoctorLocations to fetch.
     */
    orderBy?: Prisma.DoctorLocationOrderByWithRelationInput | Prisma.DoctorLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DoctorLocations.
     */
    cursor?: Prisma.DoctorLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DoctorLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DoctorLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DoctorLocations.
     */
    distinct?: Prisma.DoctorLocationScalarFieldEnum | Prisma.DoctorLocationScalarFieldEnum[];
};
/**
 * DoctorLocation findMany
 */
export type DoctorLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * Filter, which DoctorLocations to fetch.
     */
    where?: Prisma.DoctorLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DoctorLocations to fetch.
     */
    orderBy?: Prisma.DoctorLocationOrderByWithRelationInput | Prisma.DoctorLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DoctorLocations.
     */
    cursor?: Prisma.DoctorLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DoctorLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DoctorLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DoctorLocations.
     */
    distinct?: Prisma.DoctorLocationScalarFieldEnum | Prisma.DoctorLocationScalarFieldEnum[];
};
/**
 * DoctorLocation create
 */
export type DoctorLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * The data needed to create a DoctorLocation.
     */
    data: Prisma.XOR<Prisma.DoctorLocationCreateInput, Prisma.DoctorLocationUncheckedCreateInput>;
};
/**
 * DoctorLocation createMany
 */
export type DoctorLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorLocations.
     */
    data: Prisma.DoctorLocationCreateManyInput | Prisma.DoctorLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DoctorLocation createManyAndReturn
 */
export type DoctorLocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * The data used to create many DoctorLocations.
     */
    data: Prisma.DoctorLocationCreateManyInput | Prisma.DoctorLocationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DoctorLocation update
 */
export type DoctorLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * The data needed to update a DoctorLocation.
     */
    data: Prisma.XOR<Prisma.DoctorLocationUpdateInput, Prisma.DoctorLocationUncheckedUpdateInput>;
    /**
     * Choose, which DoctorLocation to update.
     */
    where: Prisma.DoctorLocationWhereUniqueInput;
};
/**
 * DoctorLocation updateMany
 */
export type DoctorLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorLocations.
     */
    data: Prisma.XOR<Prisma.DoctorLocationUpdateManyMutationInput, Prisma.DoctorLocationUncheckedUpdateManyInput>;
    /**
     * Filter which DoctorLocations to update
     */
    where?: Prisma.DoctorLocationWhereInput;
    /**
     * Limit how many DoctorLocations to update.
     */
    limit?: number;
};
/**
 * DoctorLocation updateManyAndReturn
 */
export type DoctorLocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * The data used to update DoctorLocations.
     */
    data: Prisma.XOR<Prisma.DoctorLocationUpdateManyMutationInput, Prisma.DoctorLocationUncheckedUpdateManyInput>;
    /**
     * Filter which DoctorLocations to update
     */
    where?: Prisma.DoctorLocationWhereInput;
    /**
     * Limit how many DoctorLocations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DoctorLocation upsert
 */
export type DoctorLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * The filter to search for the DoctorLocation to update in case it exists.
     */
    where: Prisma.DoctorLocationWhereUniqueInput;
    /**
     * In case the DoctorLocation found by the `where` argument doesn't exist, create a new DoctorLocation with this data.
     */
    create: Prisma.XOR<Prisma.DoctorLocationCreateInput, Prisma.DoctorLocationUncheckedCreateInput>;
    /**
     * In case the DoctorLocation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DoctorLocationUpdateInput, Prisma.DoctorLocationUncheckedUpdateInput>;
};
/**
 * DoctorLocation delete
 */
export type DoctorLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
    /**
     * Filter which DoctorLocation to delete.
     */
    where: Prisma.DoctorLocationWhereUniqueInput;
};
/**
 * DoctorLocation deleteMany
 */
export type DoctorLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorLocations to delete
     */
    where?: Prisma.DoctorLocationWhereInput;
    /**
     * Limit how many DoctorLocations to delete.
     */
    limit?: number;
};
/**
 * DoctorLocation without action
 */
export type DoctorLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorLocation
     */
    select?: Prisma.DoctorLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DoctorLocation
     */
    omit?: Prisma.DoctorLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoctorLocationInclude<ExtArgs> | null;
};
//# sourceMappingURL=DoctorLocation.d.ts.map