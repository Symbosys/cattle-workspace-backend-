import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BrandLocation
 *
 */
export type BrandLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandLocationPayload>;
export type AggregateBrandLocation = {
    _count: BrandLocationCountAggregateOutputType | null;
    _avg: BrandLocationAvgAggregateOutputType | null;
    _sum: BrandLocationSumAggregateOutputType | null;
    _min: BrandLocationMinAggregateOutputType | null;
    _max: BrandLocationMaxAggregateOutputType | null;
};
export type BrandLocationAvgAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type BrandLocationSumAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type BrandLocationMinAggregateOutputType = {
    id: string | null;
    brandId: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    stateId: string | null;
    cityId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandLocationMaxAggregateOutputType = {
    id: string | null;
    brandId: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    stateId: string | null;
    cityId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandLocationCountAggregateOutputType = {
    id: number;
    brandId: number;
    latitude: number;
    longitude: number;
    stateId: number;
    cityId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BrandLocationAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type BrandLocationSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type BrandLocationMinAggregateInputType = {
    id?: true;
    brandId?: true;
    latitude?: true;
    longitude?: true;
    stateId?: true;
    cityId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandLocationMaxAggregateInputType = {
    id?: true;
    brandId?: true;
    latitude?: true;
    longitude?: true;
    stateId?: true;
    cityId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandLocationCountAggregateInputType = {
    id?: true;
    brandId?: true;
    latitude?: true;
    longitude?: true;
    stateId?: true;
    cityId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BrandLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandLocation to aggregate.
     */
    where?: Prisma.BrandLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandLocations to fetch.
     */
    orderBy?: Prisma.BrandLocationOrderByWithRelationInput | Prisma.BrandLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BrandLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BrandLocations
    **/
    _count?: true | BrandLocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BrandLocationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BrandLocationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BrandLocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BrandLocationMaxAggregateInputType;
};
export type GetBrandLocationAggregateType<T extends BrandLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateBrandLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrandLocation[P]> : Prisma.GetScalarType<T[P], AggregateBrandLocation[P]>;
};
export type BrandLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandLocationWhereInput;
    orderBy?: Prisma.BrandLocationOrderByWithAggregationInput | Prisma.BrandLocationOrderByWithAggregationInput[];
    by: Prisma.BrandLocationScalarFieldEnum[] | Prisma.BrandLocationScalarFieldEnum;
    having?: Prisma.BrandLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandLocationCountAggregateInputType | true;
    _avg?: BrandLocationAvgAggregateInputType;
    _sum?: BrandLocationSumAggregateInputType;
    _min?: BrandLocationMinAggregateInputType;
    _max?: BrandLocationMaxAggregateInputType;
};
export type BrandLocationGroupByOutputType = {
    id: string;
    brandId: string;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    stateId: string;
    cityId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BrandLocationCountAggregateOutputType | null;
    _avg: BrandLocationAvgAggregateOutputType | null;
    _sum: BrandLocationSumAggregateOutputType | null;
    _min: BrandLocationMinAggregateOutputType | null;
    _max: BrandLocationMaxAggregateOutputType | null;
};
export type GetBrandLocationGroupByPayload<T extends BrandLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandLocationGroupByOutputType[P]>;
}>>;
export type BrandLocationWhereInput = {
    AND?: Prisma.BrandLocationWhereInput | Prisma.BrandLocationWhereInput[];
    OR?: Prisma.BrandLocationWhereInput[];
    NOT?: Prisma.BrandLocationWhereInput | Prisma.BrandLocationWhereInput[];
    id?: Prisma.StringFilter<"BrandLocation"> | string;
    brandId?: Prisma.StringFilter<"BrandLocation"> | string;
    latitude?: Prisma.DecimalNullableFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFilter<"BrandLocation"> | string;
    cityId?: Prisma.StringFilter<"BrandLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"BrandLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BrandLocation"> | Date | string;
    brand?: Prisma.XOR<Prisma.BrandProfileScalarRelationFilter, Prisma.BrandProfileWhereInput>;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.CityWhereInput>;
};
export type BrandLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    brand?: Prisma.BrandProfileOrderByWithRelationInput;
    state?: Prisma.StateOrderByWithRelationInput;
    city?: Prisma.CityOrderByWithRelationInput;
};
export type BrandLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    stateId?: string;
    cityId?: string;
    AND?: Prisma.BrandLocationWhereInput | Prisma.BrandLocationWhereInput[];
    OR?: Prisma.BrandLocationWhereInput[];
    NOT?: Prisma.BrandLocationWhereInput | Prisma.BrandLocationWhereInput[];
    brandId?: Prisma.StringFilter<"BrandLocation"> | string;
    latitude?: Prisma.DecimalNullableFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"BrandLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BrandLocation"> | Date | string;
    brand?: Prisma.XOR<Prisma.BrandProfileScalarRelationFilter, Prisma.BrandProfileWhereInput>;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.CityWhereInput>;
}, "id" | "stateId" | "cityId">;
export type BrandLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BrandLocationCountOrderByAggregateInput;
    _avg?: Prisma.BrandLocationAvgOrderByAggregateInput;
    _max?: Prisma.BrandLocationMaxOrderByAggregateInput;
    _min?: Prisma.BrandLocationMinOrderByAggregateInput;
    _sum?: Prisma.BrandLocationSumOrderByAggregateInput;
};
export type BrandLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandLocationScalarWhereWithAggregatesInput | Prisma.BrandLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandLocationScalarWhereWithAggregatesInput | Prisma.BrandLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BrandLocation"> | string;
    brandId?: Prisma.StringWithAggregatesFilter<"BrandLocation"> | string;
    latitude?: Prisma.DecimalNullableWithAggregatesFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableWithAggregatesFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringWithAggregatesFilter<"BrandLocation"> | string;
    cityId?: Prisma.StringWithAggregatesFilter<"BrandLocation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BrandLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BrandLocation"> | Date | string;
};
export type BrandLocationCreateInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandProfileCreateNestedOneWithoutBrandLocationsInput;
    state: Prisma.StateCreateNestedOneWithoutBrandLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutBrandLocationsInput;
};
export type BrandLocationUncheckedCreateInput = {
    id?: string;
    brandId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandLocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandProfileUpdateOneRequiredWithoutBrandLocationsNestedInput;
    state?: Prisma.StateUpdateOneRequiredWithoutBrandLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutBrandLocationsNestedInput;
};
export type BrandLocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandLocationCreateManyInput = {
    id?: string;
    brandId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandLocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandLocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandLocationListRelationFilter = {
    every?: Prisma.BrandLocationWhereInput;
    some?: Prisma.BrandLocationWhereInput;
    none?: Prisma.BrandLocationWhereInput;
};
export type BrandLocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BrandLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandLocationAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type BrandLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandLocationSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type BrandLocationNullableScalarRelationFilter = {
    is?: Prisma.BrandLocationWhereInput | null;
    isNot?: Prisma.BrandLocationWhereInput | null;
};
export type BrandLocationCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutBrandInput, Prisma.BrandLocationUncheckedCreateWithoutBrandInput> | Prisma.BrandLocationCreateWithoutBrandInput[] | Prisma.BrandLocationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutBrandInput | Prisma.BrandLocationCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandLocationCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
};
export type BrandLocationUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutBrandInput, Prisma.BrandLocationUncheckedCreateWithoutBrandInput> | Prisma.BrandLocationCreateWithoutBrandInput[] | Prisma.BrandLocationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutBrandInput | Prisma.BrandLocationCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandLocationCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
};
export type BrandLocationUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutBrandInput, Prisma.BrandLocationUncheckedCreateWithoutBrandInput> | Prisma.BrandLocationCreateWithoutBrandInput[] | Prisma.BrandLocationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutBrandInput | Prisma.BrandLocationCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandLocationUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandLocationUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandLocationCreateManyBrandInputEnvelope;
    set?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    disconnect?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    delete?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    connect?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    update?: Prisma.BrandLocationUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandLocationUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandLocationUpdateManyWithWhereWithoutBrandInput | Prisma.BrandLocationUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandLocationScalarWhereInput | Prisma.BrandLocationScalarWhereInput[];
};
export type BrandLocationUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutBrandInput, Prisma.BrandLocationUncheckedCreateWithoutBrandInput> | Prisma.BrandLocationCreateWithoutBrandInput[] | Prisma.BrandLocationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutBrandInput | Prisma.BrandLocationCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandLocationUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandLocationUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandLocationCreateManyBrandInputEnvelope;
    set?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    disconnect?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    delete?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    connect?: Prisma.BrandLocationWhereUniqueInput | Prisma.BrandLocationWhereUniqueInput[];
    update?: Prisma.BrandLocationUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandLocationUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandLocationUpdateManyWithWhereWithoutBrandInput | Prisma.BrandLocationUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandLocationScalarWhereInput | Prisma.BrandLocationScalarWhereInput[];
};
export type BrandLocationCreateNestedOneWithoutStateInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutStateInput, Prisma.BrandLocationUncheckedCreateWithoutStateInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutStateInput;
    connect?: Prisma.BrandLocationWhereUniqueInput;
};
export type BrandLocationUncheckedCreateNestedOneWithoutStateInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutStateInput, Prisma.BrandLocationUncheckedCreateWithoutStateInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutStateInput;
    connect?: Prisma.BrandLocationWhereUniqueInput;
};
export type BrandLocationUpdateOneWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutStateInput, Prisma.BrandLocationUncheckedCreateWithoutStateInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutStateInput;
    upsert?: Prisma.BrandLocationUpsertWithoutStateInput;
    disconnect?: Prisma.BrandLocationWhereInput | boolean;
    delete?: Prisma.BrandLocationWhereInput | boolean;
    connect?: Prisma.BrandLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandLocationUpdateToOneWithWhereWithoutStateInput, Prisma.BrandLocationUpdateWithoutStateInput>, Prisma.BrandLocationUncheckedUpdateWithoutStateInput>;
};
export type BrandLocationUncheckedUpdateOneWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutStateInput, Prisma.BrandLocationUncheckedCreateWithoutStateInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutStateInput;
    upsert?: Prisma.BrandLocationUpsertWithoutStateInput;
    disconnect?: Prisma.BrandLocationWhereInput | boolean;
    delete?: Prisma.BrandLocationWhereInput | boolean;
    connect?: Prisma.BrandLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandLocationUpdateToOneWithWhereWithoutStateInput, Prisma.BrandLocationUpdateWithoutStateInput>, Prisma.BrandLocationUncheckedUpdateWithoutStateInput>;
};
export type BrandLocationCreateNestedOneWithoutCityInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutCityInput, Prisma.BrandLocationUncheckedCreateWithoutCityInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutCityInput;
    connect?: Prisma.BrandLocationWhereUniqueInput;
};
export type BrandLocationUncheckedCreateNestedOneWithoutCityInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutCityInput, Prisma.BrandLocationUncheckedCreateWithoutCityInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutCityInput;
    connect?: Prisma.BrandLocationWhereUniqueInput;
};
export type BrandLocationUpdateOneWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutCityInput, Prisma.BrandLocationUncheckedCreateWithoutCityInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutCityInput;
    upsert?: Prisma.BrandLocationUpsertWithoutCityInput;
    disconnect?: Prisma.BrandLocationWhereInput | boolean;
    delete?: Prisma.BrandLocationWhereInput | boolean;
    connect?: Prisma.BrandLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandLocationUpdateToOneWithWhereWithoutCityInput, Prisma.BrandLocationUpdateWithoutCityInput>, Prisma.BrandLocationUncheckedUpdateWithoutCityInput>;
};
export type BrandLocationUncheckedUpdateOneWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.BrandLocationCreateWithoutCityInput, Prisma.BrandLocationUncheckedCreateWithoutCityInput>;
    connectOrCreate?: Prisma.BrandLocationCreateOrConnectWithoutCityInput;
    upsert?: Prisma.BrandLocationUpsertWithoutCityInput;
    disconnect?: Prisma.BrandLocationWhereInput | boolean;
    delete?: Prisma.BrandLocationWhereInput | boolean;
    connect?: Prisma.BrandLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandLocationUpdateToOneWithWhereWithoutCityInput, Prisma.BrandLocationUpdateWithoutCityInput>, Prisma.BrandLocationUncheckedUpdateWithoutCityInput>;
};
export type BrandLocationCreateWithoutBrandInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutBrandLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutBrandLocationsInput;
};
export type BrandLocationUncheckedCreateWithoutBrandInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandLocationCreateOrConnectWithoutBrandInput = {
    where: Prisma.BrandLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandLocationCreateWithoutBrandInput, Prisma.BrandLocationUncheckedCreateWithoutBrandInput>;
};
export type BrandLocationCreateManyBrandInputEnvelope = {
    data: Prisma.BrandLocationCreateManyBrandInput | Prisma.BrandLocationCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type BrandLocationUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandLocationUpdateWithoutBrandInput, Prisma.BrandLocationUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.BrandLocationCreateWithoutBrandInput, Prisma.BrandLocationUncheckedCreateWithoutBrandInput>;
};
export type BrandLocationUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandLocationUpdateWithoutBrandInput, Prisma.BrandLocationUncheckedUpdateWithoutBrandInput>;
};
export type BrandLocationUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.BrandLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandLocationUpdateManyMutationInput, Prisma.BrandLocationUncheckedUpdateManyWithoutBrandInput>;
};
export type BrandLocationScalarWhereInput = {
    AND?: Prisma.BrandLocationScalarWhereInput | Prisma.BrandLocationScalarWhereInput[];
    OR?: Prisma.BrandLocationScalarWhereInput[];
    NOT?: Prisma.BrandLocationScalarWhereInput | Prisma.BrandLocationScalarWhereInput[];
    id?: Prisma.StringFilter<"BrandLocation"> | string;
    brandId?: Prisma.StringFilter<"BrandLocation"> | string;
    latitude?: Prisma.DecimalNullableFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"BrandLocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFilter<"BrandLocation"> | string;
    cityId?: Prisma.StringFilter<"BrandLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"BrandLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BrandLocation"> | Date | string;
};
export type BrandLocationCreateWithoutStateInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandProfileCreateNestedOneWithoutBrandLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutBrandLocationsInput;
};
export type BrandLocationUncheckedCreateWithoutStateInput = {
    id?: string;
    brandId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandLocationCreateOrConnectWithoutStateInput = {
    where: Prisma.BrandLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandLocationCreateWithoutStateInput, Prisma.BrandLocationUncheckedCreateWithoutStateInput>;
};
export type BrandLocationUpsertWithoutStateInput = {
    update: Prisma.XOR<Prisma.BrandLocationUpdateWithoutStateInput, Prisma.BrandLocationUncheckedUpdateWithoutStateInput>;
    create: Prisma.XOR<Prisma.BrandLocationCreateWithoutStateInput, Prisma.BrandLocationUncheckedCreateWithoutStateInput>;
    where?: Prisma.BrandLocationWhereInput;
};
export type BrandLocationUpdateToOneWithWhereWithoutStateInput = {
    where?: Prisma.BrandLocationWhereInput;
    data: Prisma.XOR<Prisma.BrandLocationUpdateWithoutStateInput, Prisma.BrandLocationUncheckedUpdateWithoutStateInput>;
};
export type BrandLocationUpdateWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandProfileUpdateOneRequiredWithoutBrandLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutBrandLocationsNestedInput;
};
export type BrandLocationUncheckedUpdateWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandLocationCreateWithoutCityInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandProfileCreateNestedOneWithoutBrandLocationsInput;
    state: Prisma.StateCreateNestedOneWithoutBrandLocationsInput;
};
export type BrandLocationUncheckedCreateWithoutCityInput = {
    id?: string;
    brandId: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandLocationCreateOrConnectWithoutCityInput = {
    where: Prisma.BrandLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandLocationCreateWithoutCityInput, Prisma.BrandLocationUncheckedCreateWithoutCityInput>;
};
export type BrandLocationUpsertWithoutCityInput = {
    update: Prisma.XOR<Prisma.BrandLocationUpdateWithoutCityInput, Prisma.BrandLocationUncheckedUpdateWithoutCityInput>;
    create: Prisma.XOR<Prisma.BrandLocationCreateWithoutCityInput, Prisma.BrandLocationUncheckedCreateWithoutCityInput>;
    where?: Prisma.BrandLocationWhereInput;
};
export type BrandLocationUpdateToOneWithWhereWithoutCityInput = {
    where?: Prisma.BrandLocationWhereInput;
    data: Prisma.XOR<Prisma.BrandLocationUpdateWithoutCityInput, Prisma.BrandLocationUncheckedUpdateWithoutCityInput>;
};
export type BrandLocationUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandProfileUpdateOneRequiredWithoutBrandLocationsNestedInput;
    state?: Prisma.StateUpdateOneRequiredWithoutBrandLocationsNestedInput;
};
export type BrandLocationUncheckedUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandLocationCreateManyBrandInput = {
    id?: string;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandLocationUpdateWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutBrandLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutBrandLocationsNestedInput;
};
export type BrandLocationUncheckedUpdateWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandLocationUncheckedUpdateManyWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandLocation"]>;
export type BrandLocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandLocation"]>;
export type BrandLocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandLocation"]>;
export type BrandLocationSelectScalar = {
    id?: boolean;
    brandId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BrandLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "brandId" | "latitude" | "longitude" | "stateId" | "cityId" | "createdAt" | "updatedAt", ExtArgs["result"]["brandLocation"]>;
export type BrandLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
};
export type BrandLocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
};
export type BrandLocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
};
export type $BrandLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BrandLocation";
    objects: {
        brand: Prisma.$BrandProfilePayload<ExtArgs>;
        state: Prisma.$StatePayload<ExtArgs>;
        city: Prisma.$CityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        brandId: string;
        latitude: runtime.Decimal | null;
        longitude: runtime.Decimal | null;
        stateId: string;
        cityId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["brandLocation"]>;
    composites: {};
};
export type BrandLocationGetPayload<S extends boolean | null | undefined | BrandLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload, S>;
export type BrandLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandLocationCountAggregateInputType | true;
};
export interface BrandLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BrandLocation'];
        meta: {
            name: 'BrandLocation';
        };
    };
    /**
     * Find zero or one BrandLocation that matches the filter.
     * @param {BrandLocationFindUniqueArgs} args - Arguments to find a BrandLocation
     * @example
     * // Get one BrandLocation
     * const brandLocation = await prisma.brandLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BrandLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandLocationFindUniqueOrThrowArgs} args - Arguments to find a BrandLocation
     * @example
     * // Get one BrandLocation
     * const brandLocation = await prisma.brandLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLocationFindFirstArgs} args - Arguments to find a BrandLocation
     * @example
     * // Get one BrandLocation
     * const brandLocation = await prisma.brandLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLocationFindFirstOrThrowArgs} args - Arguments to find a BrandLocation
     * @example
     * // Get one BrandLocation
     * const brandLocation = await prisma.brandLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BrandLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandLocations
     * const brandLocations = await prisma.brandLocation.findMany()
     *
     * // Get first 10 BrandLocations
     * const brandLocations = await prisma.brandLocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const brandLocationWithIdOnly = await prisma.brandLocation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BrandLocationFindManyArgs>(args?: Prisma.SelectSubset<T, BrandLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BrandLocation.
     * @param {BrandLocationCreateArgs} args - Arguments to create a BrandLocation.
     * @example
     * // Create one BrandLocation
     * const BrandLocation = await prisma.brandLocation.create({
     *   data: {
     *     // ... data to create a BrandLocation
     *   }
     * })
     *
     */
    create<T extends BrandLocationCreateArgs>(args: Prisma.SelectSubset<T, BrandLocationCreateArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BrandLocations.
     * @param {BrandLocationCreateManyArgs} args - Arguments to create many BrandLocations.
     * @example
     * // Create many BrandLocations
     * const brandLocation = await prisma.brandLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BrandLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BrandLocations and returns the data saved in the database.
     * @param {BrandLocationCreateManyAndReturnArgs} args - Arguments to create many BrandLocations.
     * @example
     * // Create many BrandLocations
     * const brandLocation = await prisma.brandLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BrandLocations and only return the `id`
     * const brandLocationWithIdOnly = await prisma.brandLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BrandLocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BrandLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BrandLocation.
     * @param {BrandLocationDeleteArgs} args - Arguments to delete one BrandLocation.
     * @example
     * // Delete one BrandLocation
     * const BrandLocation = await prisma.brandLocation.delete({
     *   where: {
     *     // ... filter to delete one BrandLocation
     *   }
     * })
     *
     */
    delete<T extends BrandLocationDeleteArgs>(args: Prisma.SelectSubset<T, BrandLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BrandLocation.
     * @param {BrandLocationUpdateArgs} args - Arguments to update one BrandLocation.
     * @example
     * // Update one BrandLocation
     * const brandLocation = await prisma.brandLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BrandLocationUpdateArgs>(args: Prisma.SelectSubset<T, BrandLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BrandLocations.
     * @param {BrandLocationDeleteManyArgs} args - Arguments to filter BrandLocations to delete.
     * @example
     * // Delete a few BrandLocations
     * const { count } = await prisma.brandLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BrandLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandLocations
     * const brandLocation = await prisma.brandLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BrandLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandLocations and returns the data updated in the database.
     * @param {BrandLocationUpdateManyAndReturnArgs} args - Arguments to update many BrandLocations.
     * @example
     * // Update many BrandLocations
     * const brandLocation = await prisma.brandLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BrandLocations and only return the `id`
     * const brandLocationWithIdOnly = await prisma.brandLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandLocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BrandLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BrandLocation.
     * @param {BrandLocationUpsertArgs} args - Arguments to update or create a BrandLocation.
     * @example
     * // Update or create a BrandLocation
     * const brandLocation = await prisma.brandLocation.upsert({
     *   create: {
     *     // ... data to create a BrandLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandLocation we want to update
     *   }
     * })
     */
    upsert<T extends BrandLocationUpsertArgs>(args: Prisma.SelectSubset<T, BrandLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandLocationClient<runtime.Types.Result.GetResult<Prisma.$BrandLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BrandLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLocationCountArgs} args - Arguments to filter BrandLocations to count.
     * @example
     * // Count the number of BrandLocations
     * const count = await prisma.brandLocation.count({
     *   where: {
     *     // ... the filter for the BrandLocations we want to count
     *   }
     * })
    **/
    count<T extends BrandLocationCountArgs>(args?: Prisma.Subset<T, BrandLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandLocationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BrandLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandLocationAggregateArgs>(args: Prisma.Subset<T, BrandLocationAggregateArgs>): Prisma.PrismaPromise<GetBrandLocationAggregateType<T>>;
    /**
     * Group by BrandLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLocationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BrandLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BrandLocation model
     */
    readonly fields: BrandLocationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BrandLocation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BrandLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brand<T extends Prisma.BrandProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__BrandProfileClient<runtime.Types.Result.GetResult<Prisma.$BrandProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BrandLocation model
 */
export interface BrandLocationFieldRefs {
    readonly id: Prisma.FieldRef<"BrandLocation", 'String'>;
    readonly brandId: Prisma.FieldRef<"BrandLocation", 'String'>;
    readonly latitude: Prisma.FieldRef<"BrandLocation", 'Decimal'>;
    readonly longitude: Prisma.FieldRef<"BrandLocation", 'Decimal'>;
    readonly stateId: Prisma.FieldRef<"BrandLocation", 'String'>;
    readonly cityId: Prisma.FieldRef<"BrandLocation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BrandLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BrandLocation", 'DateTime'>;
}
/**
 * BrandLocation findUnique
 */
export type BrandLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BrandLocation to fetch.
     */
    where: Prisma.BrandLocationWhereUniqueInput;
};
/**
 * BrandLocation findUniqueOrThrow
 */
export type BrandLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BrandLocation to fetch.
     */
    where: Prisma.BrandLocationWhereUniqueInput;
};
/**
 * BrandLocation findFirst
 */
export type BrandLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BrandLocation to fetch.
     */
    where?: Prisma.BrandLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandLocations to fetch.
     */
    orderBy?: Prisma.BrandLocationOrderByWithRelationInput | Prisma.BrandLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandLocations.
     */
    cursor?: Prisma.BrandLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandLocations.
     */
    distinct?: Prisma.BrandLocationScalarFieldEnum | Prisma.BrandLocationScalarFieldEnum[];
};
/**
 * BrandLocation findFirstOrThrow
 */
export type BrandLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BrandLocation to fetch.
     */
    where?: Prisma.BrandLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandLocations to fetch.
     */
    orderBy?: Prisma.BrandLocationOrderByWithRelationInput | Prisma.BrandLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandLocations.
     */
    cursor?: Prisma.BrandLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandLocations.
     */
    distinct?: Prisma.BrandLocationScalarFieldEnum | Prisma.BrandLocationScalarFieldEnum[];
};
/**
 * BrandLocation findMany
 */
export type BrandLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BrandLocations to fetch.
     */
    where?: Prisma.BrandLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandLocations to fetch.
     */
    orderBy?: Prisma.BrandLocationOrderByWithRelationInput | Prisma.BrandLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BrandLocations.
     */
    cursor?: Prisma.BrandLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandLocations.
     */
    distinct?: Prisma.BrandLocationScalarFieldEnum | Prisma.BrandLocationScalarFieldEnum[];
};
/**
 * BrandLocation create
 */
export type BrandLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * The data needed to create a BrandLocation.
     */
    data: Prisma.XOR<Prisma.BrandLocationCreateInput, Prisma.BrandLocationUncheckedCreateInput>;
};
/**
 * BrandLocation createMany
 */
export type BrandLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandLocations.
     */
    data: Prisma.BrandLocationCreateManyInput | Prisma.BrandLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BrandLocation createManyAndReturn
 */
export type BrandLocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * The data used to create many BrandLocations.
     */
    data: Prisma.BrandLocationCreateManyInput | Prisma.BrandLocationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandLocation update
 */
export type BrandLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * The data needed to update a BrandLocation.
     */
    data: Prisma.XOR<Prisma.BrandLocationUpdateInput, Prisma.BrandLocationUncheckedUpdateInput>;
    /**
     * Choose, which BrandLocation to update.
     */
    where: Prisma.BrandLocationWhereUniqueInput;
};
/**
 * BrandLocation updateMany
 */
export type BrandLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandLocations.
     */
    data: Prisma.XOR<Prisma.BrandLocationUpdateManyMutationInput, Prisma.BrandLocationUncheckedUpdateManyInput>;
    /**
     * Filter which BrandLocations to update
     */
    where?: Prisma.BrandLocationWhereInput;
    /**
     * Limit how many BrandLocations to update.
     */
    limit?: number;
};
/**
 * BrandLocation updateManyAndReturn
 */
export type BrandLocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * The data used to update BrandLocations.
     */
    data: Prisma.XOR<Prisma.BrandLocationUpdateManyMutationInput, Prisma.BrandLocationUncheckedUpdateManyInput>;
    /**
     * Filter which BrandLocations to update
     */
    where?: Prisma.BrandLocationWhereInput;
    /**
     * Limit how many BrandLocations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandLocation upsert
 */
export type BrandLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * The filter to search for the BrandLocation to update in case it exists.
     */
    where: Prisma.BrandLocationWhereUniqueInput;
    /**
     * In case the BrandLocation found by the `where` argument doesn't exist, create a new BrandLocation with this data.
     */
    create: Prisma.XOR<Prisma.BrandLocationCreateInput, Prisma.BrandLocationUncheckedCreateInput>;
    /**
     * In case the BrandLocation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BrandLocationUpdateInput, Prisma.BrandLocationUncheckedUpdateInput>;
};
/**
 * BrandLocation delete
 */
export type BrandLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
    /**
     * Filter which BrandLocation to delete.
     */
    where: Prisma.BrandLocationWhereUniqueInput;
};
/**
 * BrandLocation deleteMany
 */
export type BrandLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandLocations to delete
     */
    where?: Prisma.BrandLocationWhereInput;
    /**
     * Limit how many BrandLocations to delete.
     */
    limit?: number;
};
/**
 * BrandLocation without action
 */
export type BrandLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLocation
     */
    select?: Prisma.BrandLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandLocation
     */
    omit?: Prisma.BrandLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandLocationInclude<ExtArgs> | null;
};
//# sourceMappingURL=BrandLocation.d.ts.map