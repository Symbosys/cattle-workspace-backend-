import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ListingLocation
 *
 */
export type ListingLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$ListingLocationPayload>;
export type AggregateListingLocation = {
    _count: ListingLocationCountAggregateOutputType | null;
    _min: ListingLocationMinAggregateOutputType | null;
    _max: ListingLocationMaxAggregateOutputType | null;
};
export type ListingLocationMinAggregateOutputType = {
    id: string | null;
    listingId: string | null;
    stateId: string | null;
    cityId: string | null;
    areaId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ListingLocationMaxAggregateOutputType = {
    id: string | null;
    listingId: string | null;
    stateId: string | null;
    cityId: string | null;
    areaId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ListingLocationCountAggregateOutputType = {
    id: number;
    listingId: number;
    stateId: number;
    cityId: number;
    areaId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ListingLocationMinAggregateInputType = {
    id?: true;
    listingId?: true;
    stateId?: true;
    cityId?: true;
    areaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ListingLocationMaxAggregateInputType = {
    id?: true;
    listingId?: true;
    stateId?: true;
    cityId?: true;
    areaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ListingLocationCountAggregateInputType = {
    id?: true;
    listingId?: true;
    stateId?: true;
    cityId?: true;
    areaId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ListingLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ListingLocation to aggregate.
     */
    where?: Prisma.ListingLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListingLocations to fetch.
     */
    orderBy?: Prisma.ListingLocationOrderByWithRelationInput | Prisma.ListingLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ListingLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListingLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListingLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ListingLocations
    **/
    _count?: true | ListingLocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ListingLocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ListingLocationMaxAggregateInputType;
};
export type GetListingLocationAggregateType<T extends ListingLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateListingLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListingLocation[P]> : Prisma.GetScalarType<T[P], AggregateListingLocation[P]>;
};
export type ListingLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListingLocationWhereInput;
    orderBy?: Prisma.ListingLocationOrderByWithAggregationInput | Prisma.ListingLocationOrderByWithAggregationInput[];
    by: Prisma.ListingLocationScalarFieldEnum[] | Prisma.ListingLocationScalarFieldEnum;
    having?: Prisma.ListingLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ListingLocationCountAggregateInputType | true;
    _min?: ListingLocationMinAggregateInputType;
    _max?: ListingLocationMaxAggregateInputType;
};
export type ListingLocationGroupByOutputType = {
    id: string;
    listingId: string;
    stateId: string;
    cityId: string;
    areaId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ListingLocationCountAggregateOutputType | null;
    _min: ListingLocationMinAggregateOutputType | null;
    _max: ListingLocationMaxAggregateOutputType | null;
};
export type GetListingLocationGroupByPayload<T extends ListingLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ListingLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ListingLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ListingLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ListingLocationGroupByOutputType[P]>;
}>>;
export type ListingLocationWhereInput = {
    AND?: Prisma.ListingLocationWhereInput | Prisma.ListingLocationWhereInput[];
    OR?: Prisma.ListingLocationWhereInput[];
    NOT?: Prisma.ListingLocationWhereInput | Prisma.ListingLocationWhereInput[];
    id?: Prisma.StringFilter<"ListingLocation"> | string;
    listingId?: Prisma.StringFilter<"ListingLocation"> | string;
    stateId?: Prisma.StringFilter<"ListingLocation"> | string;
    cityId?: Prisma.StringFilter<"ListingLocation"> | string;
    areaId?: Prisma.StringNullableFilter<"ListingLocation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ListingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ListingLocation"> | Date | string;
    listing?: Prisma.XOR<Prisma.CattleListingScalarRelationFilter, Prisma.CattleListingWhereInput>;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.CityWhereInput>;
    area?: Prisma.XOR<Prisma.AreaNullableScalarRelationFilter, Prisma.AreaWhereInput> | null;
};
export type ListingLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    listing?: Prisma.CattleListingOrderByWithRelationInput;
    state?: Prisma.StateOrderByWithRelationInput;
    city?: Prisma.CityOrderByWithRelationInput;
    area?: Prisma.AreaOrderByWithRelationInput;
};
export type ListingLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    listingId?: string;
    AND?: Prisma.ListingLocationWhereInput | Prisma.ListingLocationWhereInput[];
    OR?: Prisma.ListingLocationWhereInput[];
    NOT?: Prisma.ListingLocationWhereInput | Prisma.ListingLocationWhereInput[];
    stateId?: Prisma.StringFilter<"ListingLocation"> | string;
    cityId?: Prisma.StringFilter<"ListingLocation"> | string;
    areaId?: Prisma.StringNullableFilter<"ListingLocation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ListingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ListingLocation"> | Date | string;
    listing?: Prisma.XOR<Prisma.CattleListingScalarRelationFilter, Prisma.CattleListingWhereInput>;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.CityWhereInput>;
    area?: Prisma.XOR<Prisma.AreaNullableScalarRelationFilter, Prisma.AreaWhereInput> | null;
}, "id" | "listingId">;
export type ListingLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ListingLocationCountOrderByAggregateInput;
    _max?: Prisma.ListingLocationMaxOrderByAggregateInput;
    _min?: Prisma.ListingLocationMinOrderByAggregateInput;
};
export type ListingLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ListingLocationScalarWhereWithAggregatesInput | Prisma.ListingLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ListingLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ListingLocationScalarWhereWithAggregatesInput | Prisma.ListingLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ListingLocation"> | string;
    listingId?: Prisma.StringWithAggregatesFilter<"ListingLocation"> | string;
    stateId?: Prisma.StringWithAggregatesFilter<"ListingLocation"> | string;
    cityId?: Prisma.StringWithAggregatesFilter<"ListingLocation"> | string;
    areaId?: Prisma.StringNullableWithAggregatesFilter<"ListingLocation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ListingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ListingLocation"> | Date | string;
};
export type ListingLocationCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing: Prisma.CattleListingCreateNestedOneWithoutLocationInput;
    state: Prisma.StateCreateNestedOneWithoutListingLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutListingLocationsInput;
    area?: Prisma.AreaCreateNestedOneWithoutListingLocationsInput;
};
export type ListingLocationUncheckedCreateInput = {
    id?: string;
    listingId: string;
    stateId: string;
    cityId: string;
    areaId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.CattleListingUpdateOneRequiredWithoutLocationNestedInput;
    state?: Prisma.StateUpdateOneRequiredWithoutListingLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutListingLocationsNestedInput;
    area?: Prisma.AreaUpdateOneWithoutListingLocationsNestedInput;
};
export type ListingLocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    areaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationCreateManyInput = {
    id?: string;
    listingId: string;
    stateId: string;
    cityId: string;
    areaId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    areaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationNullableScalarRelationFilter = {
    is?: Prisma.ListingLocationWhereInput | null;
    isNot?: Prisma.ListingLocationWhereInput | null;
};
export type ListingLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ListingLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ListingLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    areaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ListingLocationListRelationFilter = {
    every?: Prisma.ListingLocationWhereInput;
    some?: Prisma.ListingLocationWhereInput;
    none?: Prisma.ListingLocationWhereInput;
};
export type ListingLocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ListingLocationCreateNestedOneWithoutListingInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutListingInput, Prisma.ListingLocationUncheckedCreateWithoutListingInput>;
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutListingInput;
    connect?: Prisma.ListingLocationWhereUniqueInput;
};
export type ListingLocationUncheckedCreateNestedOneWithoutListingInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutListingInput, Prisma.ListingLocationUncheckedCreateWithoutListingInput>;
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutListingInput;
    connect?: Prisma.ListingLocationWhereUniqueInput;
};
export type ListingLocationUpdateOneWithoutListingNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutListingInput, Prisma.ListingLocationUncheckedCreateWithoutListingInput>;
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutListingInput;
    upsert?: Prisma.ListingLocationUpsertWithoutListingInput;
    disconnect?: Prisma.ListingLocationWhereInput | boolean;
    delete?: Prisma.ListingLocationWhereInput | boolean;
    connect?: Prisma.ListingLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ListingLocationUpdateToOneWithWhereWithoutListingInput, Prisma.ListingLocationUpdateWithoutListingInput>, Prisma.ListingLocationUncheckedUpdateWithoutListingInput>;
};
export type ListingLocationUncheckedUpdateOneWithoutListingNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutListingInput, Prisma.ListingLocationUncheckedCreateWithoutListingInput>;
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutListingInput;
    upsert?: Prisma.ListingLocationUpsertWithoutListingInput;
    disconnect?: Prisma.ListingLocationWhereInput | boolean;
    delete?: Prisma.ListingLocationWhereInput | boolean;
    connect?: Prisma.ListingLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ListingLocationUpdateToOneWithWhereWithoutListingInput, Prisma.ListingLocationUpdateWithoutListingInput>, Prisma.ListingLocationUncheckedUpdateWithoutListingInput>;
};
export type ListingLocationCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutStateInput, Prisma.ListingLocationUncheckedCreateWithoutStateInput> | Prisma.ListingLocationCreateWithoutStateInput[] | Prisma.ListingLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutStateInput | Prisma.ListingLocationCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.ListingLocationCreateManyStateInputEnvelope;
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
};
export type ListingLocationUncheckedCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutStateInput, Prisma.ListingLocationUncheckedCreateWithoutStateInput> | Prisma.ListingLocationCreateWithoutStateInput[] | Prisma.ListingLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutStateInput | Prisma.ListingLocationCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.ListingLocationCreateManyStateInputEnvelope;
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
};
export type ListingLocationUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutStateInput, Prisma.ListingLocationUncheckedCreateWithoutStateInput> | Prisma.ListingLocationCreateWithoutStateInput[] | Prisma.ListingLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutStateInput | Prisma.ListingLocationCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.ListingLocationUpsertWithWhereUniqueWithoutStateInput | Prisma.ListingLocationUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.ListingLocationCreateManyStateInputEnvelope;
    set?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    disconnect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    delete?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    update?: Prisma.ListingLocationUpdateWithWhereUniqueWithoutStateInput | Prisma.ListingLocationUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.ListingLocationUpdateManyWithWhereWithoutStateInput | Prisma.ListingLocationUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
};
export type ListingLocationUncheckedUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutStateInput, Prisma.ListingLocationUncheckedCreateWithoutStateInput> | Prisma.ListingLocationCreateWithoutStateInput[] | Prisma.ListingLocationUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutStateInput | Prisma.ListingLocationCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.ListingLocationUpsertWithWhereUniqueWithoutStateInput | Prisma.ListingLocationUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.ListingLocationCreateManyStateInputEnvelope;
    set?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    disconnect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    delete?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    update?: Prisma.ListingLocationUpdateWithWhereUniqueWithoutStateInput | Prisma.ListingLocationUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.ListingLocationUpdateManyWithWhereWithoutStateInput | Prisma.ListingLocationUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
};
export type ListingLocationCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutCityInput, Prisma.ListingLocationUncheckedCreateWithoutCityInput> | Prisma.ListingLocationCreateWithoutCityInput[] | Prisma.ListingLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutCityInput | Prisma.ListingLocationCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.ListingLocationCreateManyCityInputEnvelope;
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
};
export type ListingLocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutCityInput, Prisma.ListingLocationUncheckedCreateWithoutCityInput> | Prisma.ListingLocationCreateWithoutCityInput[] | Prisma.ListingLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutCityInput | Prisma.ListingLocationCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.ListingLocationCreateManyCityInputEnvelope;
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
};
export type ListingLocationUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutCityInput, Prisma.ListingLocationUncheckedCreateWithoutCityInput> | Prisma.ListingLocationCreateWithoutCityInput[] | Prisma.ListingLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutCityInput | Prisma.ListingLocationCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.ListingLocationUpsertWithWhereUniqueWithoutCityInput | Prisma.ListingLocationUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.ListingLocationCreateManyCityInputEnvelope;
    set?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    disconnect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    delete?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    update?: Prisma.ListingLocationUpdateWithWhereUniqueWithoutCityInput | Prisma.ListingLocationUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.ListingLocationUpdateManyWithWhereWithoutCityInput | Prisma.ListingLocationUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
};
export type ListingLocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutCityInput, Prisma.ListingLocationUncheckedCreateWithoutCityInput> | Prisma.ListingLocationCreateWithoutCityInput[] | Prisma.ListingLocationUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutCityInput | Prisma.ListingLocationCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.ListingLocationUpsertWithWhereUniqueWithoutCityInput | Prisma.ListingLocationUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.ListingLocationCreateManyCityInputEnvelope;
    set?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    disconnect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    delete?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    update?: Prisma.ListingLocationUpdateWithWhereUniqueWithoutCityInput | Prisma.ListingLocationUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.ListingLocationUpdateManyWithWhereWithoutCityInput | Prisma.ListingLocationUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
};
export type ListingLocationCreateNestedManyWithoutAreaInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutAreaInput, Prisma.ListingLocationUncheckedCreateWithoutAreaInput> | Prisma.ListingLocationCreateWithoutAreaInput[] | Prisma.ListingLocationUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutAreaInput | Prisma.ListingLocationCreateOrConnectWithoutAreaInput[];
    createMany?: Prisma.ListingLocationCreateManyAreaInputEnvelope;
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
};
export type ListingLocationUncheckedCreateNestedManyWithoutAreaInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutAreaInput, Prisma.ListingLocationUncheckedCreateWithoutAreaInput> | Prisma.ListingLocationCreateWithoutAreaInput[] | Prisma.ListingLocationUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutAreaInput | Prisma.ListingLocationCreateOrConnectWithoutAreaInput[];
    createMany?: Prisma.ListingLocationCreateManyAreaInputEnvelope;
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
};
export type ListingLocationUpdateManyWithoutAreaNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutAreaInput, Prisma.ListingLocationUncheckedCreateWithoutAreaInput> | Prisma.ListingLocationCreateWithoutAreaInput[] | Prisma.ListingLocationUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutAreaInput | Prisma.ListingLocationCreateOrConnectWithoutAreaInput[];
    upsert?: Prisma.ListingLocationUpsertWithWhereUniqueWithoutAreaInput | Prisma.ListingLocationUpsertWithWhereUniqueWithoutAreaInput[];
    createMany?: Prisma.ListingLocationCreateManyAreaInputEnvelope;
    set?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    disconnect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    delete?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    update?: Prisma.ListingLocationUpdateWithWhereUniqueWithoutAreaInput | Prisma.ListingLocationUpdateWithWhereUniqueWithoutAreaInput[];
    updateMany?: Prisma.ListingLocationUpdateManyWithWhereWithoutAreaInput | Prisma.ListingLocationUpdateManyWithWhereWithoutAreaInput[];
    deleteMany?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
};
export type ListingLocationUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: Prisma.XOR<Prisma.ListingLocationCreateWithoutAreaInput, Prisma.ListingLocationUncheckedCreateWithoutAreaInput> | Prisma.ListingLocationCreateWithoutAreaInput[] | Prisma.ListingLocationUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.ListingLocationCreateOrConnectWithoutAreaInput | Prisma.ListingLocationCreateOrConnectWithoutAreaInput[];
    upsert?: Prisma.ListingLocationUpsertWithWhereUniqueWithoutAreaInput | Prisma.ListingLocationUpsertWithWhereUniqueWithoutAreaInput[];
    createMany?: Prisma.ListingLocationCreateManyAreaInputEnvelope;
    set?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    disconnect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    delete?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    connect?: Prisma.ListingLocationWhereUniqueInput | Prisma.ListingLocationWhereUniqueInput[];
    update?: Prisma.ListingLocationUpdateWithWhereUniqueWithoutAreaInput | Prisma.ListingLocationUpdateWithWhereUniqueWithoutAreaInput[];
    updateMany?: Prisma.ListingLocationUpdateManyWithWhereWithoutAreaInput | Prisma.ListingLocationUpdateManyWithWhereWithoutAreaInput[];
    deleteMany?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
};
export type ListingLocationCreateWithoutListingInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutListingLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutListingLocationsInput;
    area?: Prisma.AreaCreateNestedOneWithoutListingLocationsInput;
};
export type ListingLocationUncheckedCreateWithoutListingInput = {
    id?: string;
    stateId: string;
    cityId: string;
    areaId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationCreateOrConnectWithoutListingInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutListingInput, Prisma.ListingLocationUncheckedCreateWithoutListingInput>;
};
export type ListingLocationUpsertWithoutListingInput = {
    update: Prisma.XOR<Prisma.ListingLocationUpdateWithoutListingInput, Prisma.ListingLocationUncheckedUpdateWithoutListingInput>;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutListingInput, Prisma.ListingLocationUncheckedCreateWithoutListingInput>;
    where?: Prisma.ListingLocationWhereInput;
};
export type ListingLocationUpdateToOneWithWhereWithoutListingInput = {
    where?: Prisma.ListingLocationWhereInput;
    data: Prisma.XOR<Prisma.ListingLocationUpdateWithoutListingInput, Prisma.ListingLocationUncheckedUpdateWithoutListingInput>;
};
export type ListingLocationUpdateWithoutListingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutListingLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutListingLocationsNestedInput;
    area?: Prisma.AreaUpdateOneWithoutListingLocationsNestedInput;
};
export type ListingLocationUncheckedUpdateWithoutListingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    areaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationCreateWithoutStateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing: Prisma.CattleListingCreateNestedOneWithoutLocationInput;
    city: Prisma.CityCreateNestedOneWithoutListingLocationsInput;
    area?: Prisma.AreaCreateNestedOneWithoutListingLocationsInput;
};
export type ListingLocationUncheckedCreateWithoutStateInput = {
    id?: string;
    listingId: string;
    cityId: string;
    areaId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationCreateOrConnectWithoutStateInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutStateInput, Prisma.ListingLocationUncheckedCreateWithoutStateInput>;
};
export type ListingLocationCreateManyStateInputEnvelope = {
    data: Prisma.ListingLocationCreateManyStateInput | Prisma.ListingLocationCreateManyStateInput[];
    skipDuplicates?: boolean;
};
export type ListingLocationUpsertWithWhereUniqueWithoutStateInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ListingLocationUpdateWithoutStateInput, Prisma.ListingLocationUncheckedUpdateWithoutStateInput>;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutStateInput, Prisma.ListingLocationUncheckedCreateWithoutStateInput>;
};
export type ListingLocationUpdateWithWhereUniqueWithoutStateInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ListingLocationUpdateWithoutStateInput, Prisma.ListingLocationUncheckedUpdateWithoutStateInput>;
};
export type ListingLocationUpdateManyWithWhereWithoutStateInput = {
    where: Prisma.ListingLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.ListingLocationUpdateManyMutationInput, Prisma.ListingLocationUncheckedUpdateManyWithoutStateInput>;
};
export type ListingLocationScalarWhereInput = {
    AND?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
    OR?: Prisma.ListingLocationScalarWhereInput[];
    NOT?: Prisma.ListingLocationScalarWhereInput | Prisma.ListingLocationScalarWhereInput[];
    id?: Prisma.StringFilter<"ListingLocation"> | string;
    listingId?: Prisma.StringFilter<"ListingLocation"> | string;
    stateId?: Prisma.StringFilter<"ListingLocation"> | string;
    cityId?: Prisma.StringFilter<"ListingLocation"> | string;
    areaId?: Prisma.StringNullableFilter<"ListingLocation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ListingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ListingLocation"> | Date | string;
};
export type ListingLocationCreateWithoutCityInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing: Prisma.CattleListingCreateNestedOneWithoutLocationInput;
    state: Prisma.StateCreateNestedOneWithoutListingLocationsInput;
    area?: Prisma.AreaCreateNestedOneWithoutListingLocationsInput;
};
export type ListingLocationUncheckedCreateWithoutCityInput = {
    id?: string;
    listingId: string;
    stateId: string;
    areaId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationCreateOrConnectWithoutCityInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutCityInput, Prisma.ListingLocationUncheckedCreateWithoutCityInput>;
};
export type ListingLocationCreateManyCityInputEnvelope = {
    data: Prisma.ListingLocationCreateManyCityInput | Prisma.ListingLocationCreateManyCityInput[];
    skipDuplicates?: boolean;
};
export type ListingLocationUpsertWithWhereUniqueWithoutCityInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ListingLocationUpdateWithoutCityInput, Prisma.ListingLocationUncheckedUpdateWithoutCityInput>;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutCityInput, Prisma.ListingLocationUncheckedCreateWithoutCityInput>;
};
export type ListingLocationUpdateWithWhereUniqueWithoutCityInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ListingLocationUpdateWithoutCityInput, Prisma.ListingLocationUncheckedUpdateWithoutCityInput>;
};
export type ListingLocationUpdateManyWithWhereWithoutCityInput = {
    where: Prisma.ListingLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.ListingLocationUpdateManyMutationInput, Prisma.ListingLocationUncheckedUpdateManyWithoutCityInput>;
};
export type ListingLocationCreateWithoutAreaInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing: Prisma.CattleListingCreateNestedOneWithoutLocationInput;
    state: Prisma.StateCreateNestedOneWithoutListingLocationsInput;
    city: Prisma.CityCreateNestedOneWithoutListingLocationsInput;
};
export type ListingLocationUncheckedCreateWithoutAreaInput = {
    id?: string;
    listingId: string;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationCreateOrConnectWithoutAreaInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutAreaInput, Prisma.ListingLocationUncheckedCreateWithoutAreaInput>;
};
export type ListingLocationCreateManyAreaInputEnvelope = {
    data: Prisma.ListingLocationCreateManyAreaInput | Prisma.ListingLocationCreateManyAreaInput[];
    skipDuplicates?: boolean;
};
export type ListingLocationUpsertWithWhereUniqueWithoutAreaInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ListingLocationUpdateWithoutAreaInput, Prisma.ListingLocationUncheckedUpdateWithoutAreaInput>;
    create: Prisma.XOR<Prisma.ListingLocationCreateWithoutAreaInput, Prisma.ListingLocationUncheckedCreateWithoutAreaInput>;
};
export type ListingLocationUpdateWithWhereUniqueWithoutAreaInput = {
    where: Prisma.ListingLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ListingLocationUpdateWithoutAreaInput, Prisma.ListingLocationUncheckedUpdateWithoutAreaInput>;
};
export type ListingLocationUpdateManyWithWhereWithoutAreaInput = {
    where: Prisma.ListingLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.ListingLocationUpdateManyMutationInput, Prisma.ListingLocationUncheckedUpdateManyWithoutAreaInput>;
};
export type ListingLocationCreateManyStateInput = {
    id?: string;
    listingId: string;
    cityId: string;
    areaId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationUpdateWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.CattleListingUpdateOneRequiredWithoutLocationNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutListingLocationsNestedInput;
    area?: Prisma.AreaUpdateOneWithoutListingLocationsNestedInput;
};
export type ListingLocationUncheckedUpdateWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    areaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationUncheckedUpdateManyWithoutStateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    areaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationCreateManyCityInput = {
    id?: string;
    listingId: string;
    stateId: string;
    areaId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.CattleListingUpdateOneRequiredWithoutLocationNestedInput;
    state?: Prisma.StateUpdateOneRequiredWithoutListingLocationsNestedInput;
    area?: Prisma.AreaUpdateOneWithoutListingLocationsNestedInput;
};
export type ListingLocationUncheckedUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    areaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationUncheckedUpdateManyWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    areaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationCreateManyAreaInput = {
    id?: string;
    listingId: string;
    stateId: string;
    cityId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingLocationUpdateWithoutAreaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.CattleListingUpdateOneRequiredWithoutLocationNestedInput;
    state?: Prisma.StateUpdateOneRequiredWithoutListingLocationsNestedInput;
    city?: Prisma.CityUpdateOneRequiredWithoutListingLocationsNestedInput;
};
export type ListingLocationUncheckedUpdateWithoutAreaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationUncheckedUpdateManyWithoutAreaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.StringFieldUpdateOperationsInput | string;
    cityId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listingId?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    areaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    listing?: boolean | Prisma.CattleListingDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
    area?: boolean | Prisma.ListingLocation$areaArgs<ExtArgs>;
}, ExtArgs["result"]["listingLocation"]>;
export type ListingLocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listingId?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    areaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    listing?: boolean | Prisma.CattleListingDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
    area?: boolean | Prisma.ListingLocation$areaArgs<ExtArgs>;
}, ExtArgs["result"]["listingLocation"]>;
export type ListingLocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listingId?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    areaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    listing?: boolean | Prisma.CattleListingDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
    area?: boolean | Prisma.ListingLocation$areaArgs<ExtArgs>;
}, ExtArgs["result"]["listingLocation"]>;
export type ListingLocationSelectScalar = {
    id?: boolean;
    listingId?: boolean;
    stateId?: boolean;
    cityId?: boolean;
    areaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ListingLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "listingId" | "stateId" | "cityId" | "areaId" | "createdAt" | "updatedAt", ExtArgs["result"]["listingLocation"]>;
export type ListingLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing?: boolean | Prisma.CattleListingDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
    area?: boolean | Prisma.ListingLocation$areaArgs<ExtArgs>;
};
export type ListingLocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing?: boolean | Prisma.CattleListingDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
    area?: boolean | Prisma.ListingLocation$areaArgs<ExtArgs>;
};
export type ListingLocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing?: boolean | Prisma.CattleListingDefaultArgs<ExtArgs>;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.CityDefaultArgs<ExtArgs>;
    area?: boolean | Prisma.ListingLocation$areaArgs<ExtArgs>;
};
export type $ListingLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ListingLocation";
    objects: {
        listing: Prisma.$CattleListingPayload<ExtArgs>;
        state: Prisma.$StatePayload<ExtArgs>;
        city: Prisma.$CityPayload<ExtArgs>;
        area: Prisma.$AreaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        listingId: string;
        stateId: string;
        cityId: string;
        areaId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["listingLocation"]>;
    composites: {};
};
export type ListingLocationGetPayload<S extends boolean | null | undefined | ListingLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload, S>;
export type ListingLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ListingLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ListingLocationCountAggregateInputType | true;
};
export interface ListingLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ListingLocation'];
        meta: {
            name: 'ListingLocation';
        };
    };
    /**
     * Find zero or one ListingLocation that matches the filter.
     * @param {ListingLocationFindUniqueArgs} args - Arguments to find a ListingLocation
     * @example
     * // Get one ListingLocation
     * const listingLocation = await prisma.listingLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, ListingLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ListingLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingLocationFindUniqueOrThrowArgs} args - Arguments to find a ListingLocation
     * @example
     * // Get one ListingLocation
     * const listingLocation = await prisma.listingLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ListingLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ListingLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingLocationFindFirstArgs} args - Arguments to find a ListingLocation
     * @example
     * // Get one ListingLocation
     * const listingLocation = await prisma.listingLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, ListingLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ListingLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingLocationFindFirstOrThrowArgs} args - Arguments to find a ListingLocation
     * @example
     * // Get one ListingLocation
     * const listingLocation = await prisma.listingLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ListingLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ListingLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingLocations
     * const listingLocations = await prisma.listingLocation.findMany()
     *
     * // Get first 10 ListingLocations
     * const listingLocations = await prisma.listingLocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const listingLocationWithIdOnly = await prisma.listingLocation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ListingLocationFindManyArgs>(args?: Prisma.SelectSubset<T, ListingLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ListingLocation.
     * @param {ListingLocationCreateArgs} args - Arguments to create a ListingLocation.
     * @example
     * // Create one ListingLocation
     * const ListingLocation = await prisma.listingLocation.create({
     *   data: {
     *     // ... data to create a ListingLocation
     *   }
     * })
     *
     */
    create<T extends ListingLocationCreateArgs>(args: Prisma.SelectSubset<T, ListingLocationCreateArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ListingLocations.
     * @param {ListingLocationCreateManyArgs} args - Arguments to create many ListingLocations.
     * @example
     * // Create many ListingLocations
     * const listingLocation = await prisma.listingLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ListingLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, ListingLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ListingLocations and returns the data saved in the database.
     * @param {ListingLocationCreateManyAndReturnArgs} args - Arguments to create many ListingLocations.
     * @example
     * // Create many ListingLocations
     * const listingLocation = await prisma.listingLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ListingLocations and only return the `id`
     * const listingLocationWithIdOnly = await prisma.listingLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ListingLocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ListingLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ListingLocation.
     * @param {ListingLocationDeleteArgs} args - Arguments to delete one ListingLocation.
     * @example
     * // Delete one ListingLocation
     * const ListingLocation = await prisma.listingLocation.delete({
     *   where: {
     *     // ... filter to delete one ListingLocation
     *   }
     * })
     *
     */
    delete<T extends ListingLocationDeleteArgs>(args: Prisma.SelectSubset<T, ListingLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ListingLocation.
     * @param {ListingLocationUpdateArgs} args - Arguments to update one ListingLocation.
     * @example
     * // Update one ListingLocation
     * const listingLocation = await prisma.listingLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ListingLocationUpdateArgs>(args: Prisma.SelectSubset<T, ListingLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ListingLocations.
     * @param {ListingLocationDeleteManyArgs} args - Arguments to filter ListingLocations to delete.
     * @example
     * // Delete a few ListingLocations
     * const { count } = await prisma.listingLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ListingLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ListingLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ListingLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingLocations
     * const listingLocation = await prisma.listingLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ListingLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, ListingLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ListingLocations and returns the data updated in the database.
     * @param {ListingLocationUpdateManyAndReturnArgs} args - Arguments to update many ListingLocations.
     * @example
     * // Update many ListingLocations
     * const listingLocation = await prisma.listingLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ListingLocations and only return the `id`
     * const listingLocationWithIdOnly = await prisma.listingLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListingLocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ListingLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ListingLocation.
     * @param {ListingLocationUpsertArgs} args - Arguments to update or create a ListingLocation.
     * @example
     * // Update or create a ListingLocation
     * const listingLocation = await prisma.listingLocation.upsert({
     *   create: {
     *     // ... data to create a ListingLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingLocation we want to update
     *   }
     * })
     */
    upsert<T extends ListingLocationUpsertArgs>(args: Prisma.SelectSubset<T, ListingLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ListingLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingLocationCountArgs} args - Arguments to filter ListingLocations to count.
     * @example
     * // Count the number of ListingLocations
     * const count = await prisma.listingLocation.count({
     *   where: {
     *     // ... the filter for the ListingLocations we want to count
     *   }
     * })
    **/
    count<T extends ListingLocationCountArgs>(args?: Prisma.Subset<T, ListingLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ListingLocationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ListingLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingLocationAggregateArgs>(args: Prisma.Subset<T, ListingLocationAggregateArgs>): Prisma.PrismaPromise<GetListingLocationAggregateType<T>>;
    /**
     * Group by ListingLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingLocationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ListingLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ListingLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: ListingLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ListingLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ListingLocation model
     */
    readonly fields: ListingLocationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ListingLocation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ListingLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    listing<T extends Prisma.CattleListingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CattleListingDefaultArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    state<T extends Prisma.StateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StateDefaultArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    city<T extends Prisma.CityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CityDefaultArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    area<T extends Prisma.ListingLocation$areaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ListingLocation$areaArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ListingLocation model
 */
export interface ListingLocationFieldRefs {
    readonly id: Prisma.FieldRef<"ListingLocation", 'String'>;
    readonly listingId: Prisma.FieldRef<"ListingLocation", 'String'>;
    readonly stateId: Prisma.FieldRef<"ListingLocation", 'String'>;
    readonly cityId: Prisma.FieldRef<"ListingLocation", 'String'>;
    readonly areaId: Prisma.FieldRef<"ListingLocation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ListingLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ListingLocation", 'DateTime'>;
}
/**
 * ListingLocation findUnique
 */
export type ListingLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * Filter, which ListingLocation to fetch.
     */
    where: Prisma.ListingLocationWhereUniqueInput;
};
/**
 * ListingLocation findUniqueOrThrow
 */
export type ListingLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * Filter, which ListingLocation to fetch.
     */
    where: Prisma.ListingLocationWhereUniqueInput;
};
/**
 * ListingLocation findFirst
 */
export type ListingLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * Filter, which ListingLocation to fetch.
     */
    where?: Prisma.ListingLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListingLocations to fetch.
     */
    orderBy?: Prisma.ListingLocationOrderByWithRelationInput | Prisma.ListingLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ListingLocations.
     */
    cursor?: Prisma.ListingLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListingLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListingLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ListingLocations.
     */
    distinct?: Prisma.ListingLocationScalarFieldEnum | Prisma.ListingLocationScalarFieldEnum[];
};
/**
 * ListingLocation findFirstOrThrow
 */
export type ListingLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * Filter, which ListingLocation to fetch.
     */
    where?: Prisma.ListingLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListingLocations to fetch.
     */
    orderBy?: Prisma.ListingLocationOrderByWithRelationInput | Prisma.ListingLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ListingLocations.
     */
    cursor?: Prisma.ListingLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListingLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListingLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ListingLocations.
     */
    distinct?: Prisma.ListingLocationScalarFieldEnum | Prisma.ListingLocationScalarFieldEnum[];
};
/**
 * ListingLocation findMany
 */
export type ListingLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * Filter, which ListingLocations to fetch.
     */
    where?: Prisma.ListingLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListingLocations to fetch.
     */
    orderBy?: Prisma.ListingLocationOrderByWithRelationInput | Prisma.ListingLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ListingLocations.
     */
    cursor?: Prisma.ListingLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListingLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListingLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ListingLocations.
     */
    distinct?: Prisma.ListingLocationScalarFieldEnum | Prisma.ListingLocationScalarFieldEnum[];
};
/**
 * ListingLocation create
 */
export type ListingLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * The data needed to create a ListingLocation.
     */
    data: Prisma.XOR<Prisma.ListingLocationCreateInput, Prisma.ListingLocationUncheckedCreateInput>;
};
/**
 * ListingLocation createMany
 */
export type ListingLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingLocations.
     */
    data: Prisma.ListingLocationCreateManyInput | Prisma.ListingLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ListingLocation createManyAndReturn
 */
export type ListingLocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * The data used to create many ListingLocations.
     */
    data: Prisma.ListingLocationCreateManyInput | Prisma.ListingLocationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ListingLocation update
 */
export type ListingLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * The data needed to update a ListingLocation.
     */
    data: Prisma.XOR<Prisma.ListingLocationUpdateInput, Prisma.ListingLocationUncheckedUpdateInput>;
    /**
     * Choose, which ListingLocation to update.
     */
    where: Prisma.ListingLocationWhereUniqueInput;
};
/**
 * ListingLocation updateMany
 */
export type ListingLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingLocations.
     */
    data: Prisma.XOR<Prisma.ListingLocationUpdateManyMutationInput, Prisma.ListingLocationUncheckedUpdateManyInput>;
    /**
     * Filter which ListingLocations to update
     */
    where?: Prisma.ListingLocationWhereInput;
    /**
     * Limit how many ListingLocations to update.
     */
    limit?: number;
};
/**
 * ListingLocation updateManyAndReturn
 */
export type ListingLocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * The data used to update ListingLocations.
     */
    data: Prisma.XOR<Prisma.ListingLocationUpdateManyMutationInput, Prisma.ListingLocationUncheckedUpdateManyInput>;
    /**
     * Filter which ListingLocations to update
     */
    where?: Prisma.ListingLocationWhereInput;
    /**
     * Limit how many ListingLocations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ListingLocation upsert
 */
export type ListingLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * The filter to search for the ListingLocation to update in case it exists.
     */
    where: Prisma.ListingLocationWhereUniqueInput;
    /**
     * In case the ListingLocation found by the `where` argument doesn't exist, create a new ListingLocation with this data.
     */
    create: Prisma.XOR<Prisma.ListingLocationCreateInput, Prisma.ListingLocationUncheckedCreateInput>;
    /**
     * In case the ListingLocation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ListingLocationUpdateInput, Prisma.ListingLocationUncheckedUpdateInput>;
};
/**
 * ListingLocation delete
 */
export type ListingLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
    /**
     * Filter which ListingLocation to delete.
     */
    where: Prisma.ListingLocationWhereUniqueInput;
};
/**
 * ListingLocation deleteMany
 */
export type ListingLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ListingLocations to delete
     */
    where?: Prisma.ListingLocationWhereInput;
    /**
     * Limit how many ListingLocations to delete.
     */
    limit?: number;
};
/**
 * ListingLocation.area
 */
export type ListingLocation$areaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: Prisma.AreaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Area
     */
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where?: Prisma.AreaWhereInput;
};
/**
 * ListingLocation without action
 */
export type ListingLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingLocation
     */
    select?: Prisma.ListingLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingLocation
     */
    omit?: Prisma.ListingLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingLocationInclude<ExtArgs> | null;
};
//# sourceMappingURL=ListingLocation.d.ts.map