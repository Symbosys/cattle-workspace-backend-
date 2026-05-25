import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CattleListing
 *
 */
export type CattleListingModel = runtime.Types.Result.DefaultSelection<Prisma.$CattleListingPayload>;
export type AggregateCattleListing = {
    _count: CattleListingCountAggregateOutputType | null;
    _avg: CattleListingAvgAggregateOutputType | null;
    _sum: CattleListingSumAggregateOutputType | null;
    _min: CattleListingMinAggregateOutputType | null;
    _max: CattleListingMaxAggregateOutputType | null;
};
export type CattleListingAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type CattleListingSumAggregateOutputType = {
    price: runtime.Decimal | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type CattleListingMinAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    animalId: string | null;
    title: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    status: $Enums.ListingStatus | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    listingExpiresAt: Date | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CattleListingMaxAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    animalId: string | null;
    title: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    status: $Enums.ListingStatus | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    listingExpiresAt: Date | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CattleListingCountAggregateOutputType = {
    id: number;
    ownerId: number;
    animalId: number;
    title: number;
    description: number;
    price: number;
    status: number;
    latitude: number;
    longitude: number;
    listingExpiresAt: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CattleListingAvgAggregateInputType = {
    price?: true;
    latitude?: true;
    longitude?: true;
};
export type CattleListingSumAggregateInputType = {
    price?: true;
    latitude?: true;
    longitude?: true;
};
export type CattleListingMinAggregateInputType = {
    id?: true;
    ownerId?: true;
    animalId?: true;
    title?: true;
    description?: true;
    price?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    listingExpiresAt?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CattleListingMaxAggregateInputType = {
    id?: true;
    ownerId?: true;
    animalId?: true;
    title?: true;
    description?: true;
    price?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    listingExpiresAt?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CattleListingCountAggregateInputType = {
    id?: true;
    ownerId?: true;
    animalId?: true;
    title?: true;
    description?: true;
    price?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    listingExpiresAt?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CattleListingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CattleListing to aggregate.
     */
    where?: Prisma.CattleListingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CattleListings to fetch.
     */
    orderBy?: Prisma.CattleListingOrderByWithRelationInput | Prisma.CattleListingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CattleListingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CattleListings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CattleListings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CattleListings
    **/
    _count?: true | CattleListingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CattleListingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CattleListingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CattleListingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CattleListingMaxAggregateInputType;
};
export type GetCattleListingAggregateType<T extends CattleListingAggregateArgs> = {
    [P in keyof T & keyof AggregateCattleListing]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCattleListing[P]> : Prisma.GetScalarType<T[P], AggregateCattleListing[P]>;
};
export type CattleListingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CattleListingWhereInput;
    orderBy?: Prisma.CattleListingOrderByWithAggregationInput | Prisma.CattleListingOrderByWithAggregationInput[];
    by: Prisma.CattleListingScalarFieldEnum[] | Prisma.CattleListingScalarFieldEnum;
    having?: Prisma.CattleListingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CattleListingCountAggregateInputType | true;
    _avg?: CattleListingAvgAggregateInputType;
    _sum?: CattleListingSumAggregateInputType;
    _min?: CattleListingMinAggregateInputType;
    _max?: CattleListingMaxAggregateInputType;
};
export type CattleListingGroupByOutputType = {
    id: string;
    ownerId: string;
    animalId: string;
    title: string;
    description: string;
    price: runtime.Decimal;
    status: $Enums.ListingStatus;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    listingExpiresAt: Date;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CattleListingCountAggregateOutputType | null;
    _avg: CattleListingAvgAggregateOutputType | null;
    _sum: CattleListingSumAggregateOutputType | null;
    _min: CattleListingMinAggregateOutputType | null;
    _max: CattleListingMaxAggregateOutputType | null;
};
export type GetCattleListingGroupByPayload<T extends CattleListingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CattleListingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CattleListingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CattleListingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CattleListingGroupByOutputType[P]>;
}>>;
export type CattleListingWhereInput = {
    AND?: Prisma.CattleListingWhereInput | Prisma.CattleListingWhereInput[];
    OR?: Prisma.CattleListingWhereInput[];
    NOT?: Prisma.CattleListingWhereInput | Prisma.CattleListingWhereInput[];
    id?: Prisma.StringFilter<"CattleListing"> | string;
    ownerId?: Prisma.StringFilter<"CattleListing"> | string;
    animalId?: Prisma.StringFilter<"CattleListing"> | string;
    title?: Prisma.StringFilter<"CattleListing"> | string;
    description?: Prisma.StringFilter<"CattleListing"> | string;
    price?: Prisma.DecimalFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFilter<"CattleListing"> | $Enums.ListingStatus;
    latitude?: Prisma.DecimalNullableFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CattleListing"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    animal?: Prisma.XOR<Prisma.AnimalScalarRelationFilter, Prisma.AnimalWhereInput>;
    images?: Prisma.ListingImageListRelationFilter;
    location?: Prisma.XOR<Prisma.ListingLocationNullableScalarRelationFilter, Prisma.ListingLocationWhereInput> | null;
};
export type CattleListingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    animalId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    listingExpiresAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    animal?: Prisma.AnimalOrderByWithRelationInput;
    images?: Prisma.ListingImageOrderByRelationAggregateInput;
    location?: Prisma.ListingLocationOrderByWithRelationInput;
};
export type CattleListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CattleListingWhereInput | Prisma.CattleListingWhereInput[];
    OR?: Prisma.CattleListingWhereInput[];
    NOT?: Prisma.CattleListingWhereInput | Prisma.CattleListingWhereInput[];
    ownerId?: Prisma.StringFilter<"CattleListing"> | string;
    animalId?: Prisma.StringFilter<"CattleListing"> | string;
    title?: Prisma.StringFilter<"CattleListing"> | string;
    description?: Prisma.StringFilter<"CattleListing"> | string;
    price?: Prisma.DecimalFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFilter<"CattleListing"> | $Enums.ListingStatus;
    latitude?: Prisma.DecimalNullableFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CattleListing"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    animal?: Prisma.XOR<Prisma.AnimalScalarRelationFilter, Prisma.AnimalWhereInput>;
    images?: Prisma.ListingImageListRelationFilter;
    location?: Prisma.XOR<Prisma.ListingLocationNullableScalarRelationFilter, Prisma.ListingLocationWhereInput> | null;
}, "id">;
export type CattleListingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    animalId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    listingExpiresAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CattleListingCountOrderByAggregateInput;
    _avg?: Prisma.CattleListingAvgOrderByAggregateInput;
    _max?: Prisma.CattleListingMaxOrderByAggregateInput;
    _min?: Prisma.CattleListingMinOrderByAggregateInput;
    _sum?: Prisma.CattleListingSumOrderByAggregateInput;
};
export type CattleListingScalarWhereWithAggregatesInput = {
    AND?: Prisma.CattleListingScalarWhereWithAggregatesInput | Prisma.CattleListingScalarWhereWithAggregatesInput[];
    OR?: Prisma.CattleListingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CattleListingScalarWhereWithAggregatesInput | Prisma.CattleListingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CattleListing"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"CattleListing"> | string;
    animalId?: Prisma.StringWithAggregatesFilter<"CattleListing"> | string;
    title?: Prisma.StringWithAggregatesFilter<"CattleListing"> | string;
    description?: Prisma.StringWithAggregatesFilter<"CattleListing"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusWithAggregatesFilter<"CattleListing"> | $Enums.ListingStatus;
    latitude?: Prisma.DecimalNullableWithAggregatesFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableWithAggregatesFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeWithAggregatesFilter<"CattleListing"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CattleListing"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CattleListing"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CattleListing"> | Date | string;
};
export type CattleListingCreateInput = {
    id?: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutListingsInput;
    animal: Prisma.AnimalCreateNestedOneWithoutListingsInput;
    images?: Prisma.ListingImageCreateNestedManyWithoutListingInput;
    location?: Prisma.ListingLocationCreateNestedOneWithoutListingInput;
};
export type CattleListingUncheckedCreateInput = {
    id?: string;
    ownerId: string;
    animalId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ListingImageUncheckedCreateNestedManyWithoutListingInput;
    location?: Prisma.ListingLocationUncheckedCreateNestedOneWithoutListingInput;
};
export type CattleListingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutListingsNestedInput;
    animal?: Prisma.AnimalUpdateOneRequiredWithoutListingsNestedInput;
    images?: Prisma.ListingImageUpdateManyWithoutListingNestedInput;
    location?: Prisma.ListingLocationUpdateOneWithoutListingNestedInput;
};
export type CattleListingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    animalId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ListingImageUncheckedUpdateManyWithoutListingNestedInput;
    location?: Prisma.ListingLocationUncheckedUpdateOneWithoutListingNestedInput;
};
export type CattleListingCreateManyInput = {
    id?: string;
    ownerId: string;
    animalId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CattleListingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CattleListingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    animalId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CattleListingListRelationFilter = {
    every?: Prisma.CattleListingWhereInput;
    some?: Prisma.CattleListingWhereInput;
    none?: Prisma.CattleListingWhereInput;
};
export type CattleListingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CattleListingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    animalId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    listingExpiresAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CattleListingAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type CattleListingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    animalId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    listingExpiresAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CattleListingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    animalId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    listingExpiresAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CattleListingSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type CattleListingScalarRelationFilter = {
    is?: Prisma.CattleListingWhereInput;
    isNot?: Prisma.CattleListingWhereInput;
};
export type CattleListingCreateNestedManyWithoutAnimalInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutAnimalInput, Prisma.CattleListingUncheckedCreateWithoutAnimalInput> | Prisma.CattleListingCreateWithoutAnimalInput[] | Prisma.CattleListingUncheckedCreateWithoutAnimalInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutAnimalInput | Prisma.CattleListingCreateOrConnectWithoutAnimalInput[];
    createMany?: Prisma.CattleListingCreateManyAnimalInputEnvelope;
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
};
export type CattleListingUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutAnimalInput, Prisma.CattleListingUncheckedCreateWithoutAnimalInput> | Prisma.CattleListingCreateWithoutAnimalInput[] | Prisma.CattleListingUncheckedCreateWithoutAnimalInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutAnimalInput | Prisma.CattleListingCreateOrConnectWithoutAnimalInput[];
    createMany?: Prisma.CattleListingCreateManyAnimalInputEnvelope;
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
};
export type CattleListingUpdateManyWithoutAnimalNestedInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutAnimalInput, Prisma.CattleListingUncheckedCreateWithoutAnimalInput> | Prisma.CattleListingCreateWithoutAnimalInput[] | Prisma.CattleListingUncheckedCreateWithoutAnimalInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutAnimalInput | Prisma.CattleListingCreateOrConnectWithoutAnimalInput[];
    upsert?: Prisma.CattleListingUpsertWithWhereUniqueWithoutAnimalInput | Prisma.CattleListingUpsertWithWhereUniqueWithoutAnimalInput[];
    createMany?: Prisma.CattleListingCreateManyAnimalInputEnvelope;
    set?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    disconnect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    delete?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    update?: Prisma.CattleListingUpdateWithWhereUniqueWithoutAnimalInput | Prisma.CattleListingUpdateWithWhereUniqueWithoutAnimalInput[];
    updateMany?: Prisma.CattleListingUpdateManyWithWhereWithoutAnimalInput | Prisma.CattleListingUpdateManyWithWhereWithoutAnimalInput[];
    deleteMany?: Prisma.CattleListingScalarWhereInput | Prisma.CattleListingScalarWhereInput[];
};
export type CattleListingUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutAnimalInput, Prisma.CattleListingUncheckedCreateWithoutAnimalInput> | Prisma.CattleListingCreateWithoutAnimalInput[] | Prisma.CattleListingUncheckedCreateWithoutAnimalInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutAnimalInput | Prisma.CattleListingCreateOrConnectWithoutAnimalInput[];
    upsert?: Prisma.CattleListingUpsertWithWhereUniqueWithoutAnimalInput | Prisma.CattleListingUpsertWithWhereUniqueWithoutAnimalInput[];
    createMany?: Prisma.CattleListingCreateManyAnimalInputEnvelope;
    set?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    disconnect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    delete?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    update?: Prisma.CattleListingUpdateWithWhereUniqueWithoutAnimalInput | Prisma.CattleListingUpdateWithWhereUniqueWithoutAnimalInput[];
    updateMany?: Prisma.CattleListingUpdateManyWithWhereWithoutAnimalInput | Prisma.CattleListingUpdateManyWithWhereWithoutAnimalInput[];
    deleteMany?: Prisma.CattleListingScalarWhereInput | Prisma.CattleListingScalarWhereInput[];
};
export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus;
};
export type CattleListingCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutImagesInput, Prisma.CattleListingUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutImagesInput;
    connect?: Prisma.CattleListingWhereUniqueInput;
};
export type CattleListingUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutImagesInput, Prisma.CattleListingUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.CattleListingUpsertWithoutImagesInput;
    connect?: Prisma.CattleListingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CattleListingUpdateToOneWithWhereWithoutImagesInput, Prisma.CattleListingUpdateWithoutImagesInput>, Prisma.CattleListingUncheckedUpdateWithoutImagesInput>;
};
export type CattleListingCreateNestedOneWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutLocationInput, Prisma.CattleListingUncheckedCreateWithoutLocationInput>;
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutLocationInput;
    connect?: Prisma.CattleListingWhereUniqueInput;
};
export type CattleListingUpdateOneRequiredWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutLocationInput, Prisma.CattleListingUncheckedCreateWithoutLocationInput>;
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutLocationInput;
    upsert?: Prisma.CattleListingUpsertWithoutLocationInput;
    connect?: Prisma.CattleListingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CattleListingUpdateToOneWithWhereWithoutLocationInput, Prisma.CattleListingUpdateWithoutLocationInput>, Prisma.CattleListingUncheckedUpdateWithoutLocationInput>;
};
export type CattleListingCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutOwnerInput, Prisma.CattleListingUncheckedCreateWithoutOwnerInput> | Prisma.CattleListingCreateWithoutOwnerInput[] | Prisma.CattleListingUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutOwnerInput | Prisma.CattleListingCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.CattleListingCreateManyOwnerInputEnvelope;
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
};
export type CattleListingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutOwnerInput, Prisma.CattleListingUncheckedCreateWithoutOwnerInput> | Prisma.CattleListingCreateWithoutOwnerInput[] | Prisma.CattleListingUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutOwnerInput | Prisma.CattleListingCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.CattleListingCreateManyOwnerInputEnvelope;
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
};
export type CattleListingUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutOwnerInput, Prisma.CattleListingUncheckedCreateWithoutOwnerInput> | Prisma.CattleListingCreateWithoutOwnerInput[] | Prisma.CattleListingUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutOwnerInput | Prisma.CattleListingCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.CattleListingUpsertWithWhereUniqueWithoutOwnerInput | Prisma.CattleListingUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.CattleListingCreateManyOwnerInputEnvelope;
    set?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    disconnect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    delete?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    update?: Prisma.CattleListingUpdateWithWhereUniqueWithoutOwnerInput | Prisma.CattleListingUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.CattleListingUpdateManyWithWhereWithoutOwnerInput | Prisma.CattleListingUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.CattleListingScalarWhereInput | Prisma.CattleListingScalarWhereInput[];
};
export type CattleListingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.CattleListingCreateWithoutOwnerInput, Prisma.CattleListingUncheckedCreateWithoutOwnerInput> | Prisma.CattleListingCreateWithoutOwnerInput[] | Prisma.CattleListingUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CattleListingCreateOrConnectWithoutOwnerInput | Prisma.CattleListingCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.CattleListingUpsertWithWhereUniqueWithoutOwnerInput | Prisma.CattleListingUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.CattleListingCreateManyOwnerInputEnvelope;
    set?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    disconnect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    delete?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    connect?: Prisma.CattleListingWhereUniqueInput | Prisma.CattleListingWhereUniqueInput[];
    update?: Prisma.CattleListingUpdateWithWhereUniqueWithoutOwnerInput | Prisma.CattleListingUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.CattleListingUpdateManyWithWhereWithoutOwnerInput | Prisma.CattleListingUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.CattleListingScalarWhereInput | Prisma.CattleListingScalarWhereInput[];
};
export type CattleListingCreateWithoutAnimalInput = {
    id?: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutListingsInput;
    images?: Prisma.ListingImageCreateNestedManyWithoutListingInput;
    location?: Prisma.ListingLocationCreateNestedOneWithoutListingInput;
};
export type CattleListingUncheckedCreateWithoutAnimalInput = {
    id?: string;
    ownerId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ListingImageUncheckedCreateNestedManyWithoutListingInput;
    location?: Prisma.ListingLocationUncheckedCreateNestedOneWithoutListingInput;
};
export type CattleListingCreateOrConnectWithoutAnimalInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutAnimalInput, Prisma.CattleListingUncheckedCreateWithoutAnimalInput>;
};
export type CattleListingCreateManyAnimalInputEnvelope = {
    data: Prisma.CattleListingCreateManyAnimalInput | Prisma.CattleListingCreateManyAnimalInput[];
    skipDuplicates?: boolean;
};
export type CattleListingUpsertWithWhereUniqueWithoutAnimalInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    update: Prisma.XOR<Prisma.CattleListingUpdateWithoutAnimalInput, Prisma.CattleListingUncheckedUpdateWithoutAnimalInput>;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutAnimalInput, Prisma.CattleListingUncheckedCreateWithoutAnimalInput>;
};
export type CattleListingUpdateWithWhereUniqueWithoutAnimalInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    data: Prisma.XOR<Prisma.CattleListingUpdateWithoutAnimalInput, Prisma.CattleListingUncheckedUpdateWithoutAnimalInput>;
};
export type CattleListingUpdateManyWithWhereWithoutAnimalInput = {
    where: Prisma.CattleListingScalarWhereInput;
    data: Prisma.XOR<Prisma.CattleListingUpdateManyMutationInput, Prisma.CattleListingUncheckedUpdateManyWithoutAnimalInput>;
};
export type CattleListingScalarWhereInput = {
    AND?: Prisma.CattleListingScalarWhereInput | Prisma.CattleListingScalarWhereInput[];
    OR?: Prisma.CattleListingScalarWhereInput[];
    NOT?: Prisma.CattleListingScalarWhereInput | Prisma.CattleListingScalarWhereInput[];
    id?: Prisma.StringFilter<"CattleListing"> | string;
    ownerId?: Prisma.StringFilter<"CattleListing"> | string;
    animalId?: Prisma.StringFilter<"CattleListing"> | string;
    title?: Prisma.StringFilter<"CattleListing"> | string;
    description?: Prisma.StringFilter<"CattleListing"> | string;
    price?: Prisma.DecimalFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFilter<"CattleListing"> | $Enums.ListingStatus;
    latitude?: Prisma.DecimalNullableFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"CattleListing"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CattleListing"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CattleListing"> | Date | string;
};
export type CattleListingCreateWithoutImagesInput = {
    id?: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutListingsInput;
    animal: Prisma.AnimalCreateNestedOneWithoutListingsInput;
    location?: Prisma.ListingLocationCreateNestedOneWithoutListingInput;
};
export type CattleListingUncheckedCreateWithoutImagesInput = {
    id?: string;
    ownerId: string;
    animalId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    location?: Prisma.ListingLocationUncheckedCreateNestedOneWithoutListingInput;
};
export type CattleListingCreateOrConnectWithoutImagesInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutImagesInput, Prisma.CattleListingUncheckedCreateWithoutImagesInput>;
};
export type CattleListingUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.CattleListingUpdateWithoutImagesInput, Prisma.CattleListingUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutImagesInput, Prisma.CattleListingUncheckedCreateWithoutImagesInput>;
    where?: Prisma.CattleListingWhereInput;
};
export type CattleListingUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.CattleListingWhereInput;
    data: Prisma.XOR<Prisma.CattleListingUpdateWithoutImagesInput, Prisma.CattleListingUncheckedUpdateWithoutImagesInput>;
};
export type CattleListingUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutListingsNestedInput;
    animal?: Prisma.AnimalUpdateOneRequiredWithoutListingsNestedInput;
    location?: Prisma.ListingLocationUpdateOneWithoutListingNestedInput;
};
export type CattleListingUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    animalId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.ListingLocationUncheckedUpdateOneWithoutListingNestedInput;
};
export type CattleListingCreateWithoutLocationInput = {
    id?: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutListingsInput;
    animal: Prisma.AnimalCreateNestedOneWithoutListingsInput;
    images?: Prisma.ListingImageCreateNestedManyWithoutListingInput;
};
export type CattleListingUncheckedCreateWithoutLocationInput = {
    id?: string;
    ownerId: string;
    animalId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ListingImageUncheckedCreateNestedManyWithoutListingInput;
};
export type CattleListingCreateOrConnectWithoutLocationInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutLocationInput, Prisma.CattleListingUncheckedCreateWithoutLocationInput>;
};
export type CattleListingUpsertWithoutLocationInput = {
    update: Prisma.XOR<Prisma.CattleListingUpdateWithoutLocationInput, Prisma.CattleListingUncheckedUpdateWithoutLocationInput>;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutLocationInput, Prisma.CattleListingUncheckedCreateWithoutLocationInput>;
    where?: Prisma.CattleListingWhereInput;
};
export type CattleListingUpdateToOneWithWhereWithoutLocationInput = {
    where?: Prisma.CattleListingWhereInput;
    data: Prisma.XOR<Prisma.CattleListingUpdateWithoutLocationInput, Prisma.CattleListingUncheckedUpdateWithoutLocationInput>;
};
export type CattleListingUpdateWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutListingsNestedInput;
    animal?: Prisma.AnimalUpdateOneRequiredWithoutListingsNestedInput;
    images?: Prisma.ListingImageUpdateManyWithoutListingNestedInput;
};
export type CattleListingUncheckedUpdateWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    animalId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ListingImageUncheckedUpdateManyWithoutListingNestedInput;
};
export type CattleListingCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    animal: Prisma.AnimalCreateNestedOneWithoutListingsInput;
    images?: Prisma.ListingImageCreateNestedManyWithoutListingInput;
    location?: Prisma.ListingLocationCreateNestedOneWithoutListingInput;
};
export type CattleListingUncheckedCreateWithoutOwnerInput = {
    id?: string;
    animalId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ListingImageUncheckedCreateNestedManyWithoutListingInput;
    location?: Prisma.ListingLocationUncheckedCreateNestedOneWithoutListingInput;
};
export type CattleListingCreateOrConnectWithoutOwnerInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutOwnerInput, Prisma.CattleListingUncheckedCreateWithoutOwnerInput>;
};
export type CattleListingCreateManyOwnerInputEnvelope = {
    data: Prisma.CattleListingCreateManyOwnerInput | Prisma.CattleListingCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type CattleListingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    update: Prisma.XOR<Prisma.CattleListingUpdateWithoutOwnerInput, Prisma.CattleListingUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.CattleListingCreateWithoutOwnerInput, Prisma.CattleListingUncheckedCreateWithoutOwnerInput>;
};
export type CattleListingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.CattleListingWhereUniqueInput;
    data: Prisma.XOR<Prisma.CattleListingUpdateWithoutOwnerInput, Prisma.CattleListingUncheckedUpdateWithoutOwnerInput>;
};
export type CattleListingUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.CattleListingScalarWhereInput;
    data: Prisma.XOR<Prisma.CattleListingUpdateManyMutationInput, Prisma.CattleListingUncheckedUpdateManyWithoutOwnerInput>;
};
export type CattleListingCreateManyAnimalInput = {
    id?: string;
    ownerId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CattleListingUpdateWithoutAnimalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutListingsNestedInput;
    images?: Prisma.ListingImageUpdateManyWithoutListingNestedInput;
    location?: Prisma.ListingLocationUpdateOneWithoutListingNestedInput;
};
export type CattleListingUncheckedUpdateWithoutAnimalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ListingImageUncheckedUpdateManyWithoutListingNestedInput;
    location?: Prisma.ListingLocationUncheckedUpdateOneWithoutListingNestedInput;
};
export type CattleListingUncheckedUpdateManyWithoutAnimalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CattleListingCreateManyOwnerInput = {
    id?: string;
    animalId: string;
    title: string;
    description: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.ListingStatus;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt: Date | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CattleListingUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    animal?: Prisma.AnimalUpdateOneRequiredWithoutListingsNestedInput;
    images?: Prisma.ListingImageUpdateManyWithoutListingNestedInput;
    location?: Prisma.ListingLocationUpdateOneWithoutListingNestedInput;
};
export type CattleListingUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    animalId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ListingImageUncheckedUpdateManyWithoutListingNestedInput;
    location?: Prisma.ListingLocationUncheckedUpdateOneWithoutListingNestedInput;
};
export type CattleListingUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    animalId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    listingExpiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CattleListingCountOutputType
 */
export type CattleListingCountOutputType = {
    images: number;
};
export type CattleListingCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | CattleListingCountOutputTypeCountImagesArgs;
};
/**
 * CattleListingCountOutputType without action
 */
export type CattleListingCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CattleListingCountOutputType
     */
    select?: Prisma.CattleListingCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CattleListingCountOutputType without action
 */
export type CattleListingCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListingImageWhereInput;
};
export type CattleListingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    animalId?: boolean;
    title?: boolean;
    description?: boolean;
    price?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    listingExpiresAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    animal?: boolean | Prisma.AnimalDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.CattleListing$imagesArgs<ExtArgs>;
    location?: boolean | Prisma.CattleListing$locationArgs<ExtArgs>;
    _count?: boolean | Prisma.CattleListingCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cattleListing"]>;
export type CattleListingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    animalId?: boolean;
    title?: boolean;
    description?: boolean;
    price?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    listingExpiresAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    animal?: boolean | Prisma.AnimalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cattleListing"]>;
export type CattleListingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    animalId?: boolean;
    title?: boolean;
    description?: boolean;
    price?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    listingExpiresAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    animal?: boolean | Prisma.AnimalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cattleListing"]>;
export type CattleListingSelectScalar = {
    id?: boolean;
    ownerId?: boolean;
    animalId?: boolean;
    title?: boolean;
    description?: boolean;
    price?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    listingExpiresAt?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CattleListingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ownerId" | "animalId" | "title" | "description" | "price" | "status" | "latitude" | "longitude" | "listingExpiresAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["cattleListing"]>;
export type CattleListingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    animal?: boolean | Prisma.AnimalDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.CattleListing$imagesArgs<ExtArgs>;
    location?: boolean | Prisma.CattleListing$locationArgs<ExtArgs>;
    _count?: boolean | Prisma.CattleListingCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CattleListingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    animal?: boolean | Prisma.AnimalDefaultArgs<ExtArgs>;
};
export type CattleListingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    animal?: boolean | Prisma.AnimalDefaultArgs<ExtArgs>;
};
export type $CattleListingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CattleListing";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        animal: Prisma.$AnimalPayload<ExtArgs>;
        images: Prisma.$ListingImagePayload<ExtArgs>[];
        location: Prisma.$ListingLocationPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ownerId: string;
        animalId: string;
        title: string;
        description: string;
        price: runtime.Decimal;
        status: $Enums.ListingStatus;
        latitude: runtime.Decimal | null;
        longitude: runtime.Decimal | null;
        listingExpiresAt: Date;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cattleListing"]>;
    composites: {};
};
export type CattleListingGetPayload<S extends boolean | null | undefined | CattleListingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CattleListingPayload, S>;
export type CattleListingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CattleListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CattleListingCountAggregateInputType | true;
};
export interface CattleListingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CattleListing'];
        meta: {
            name: 'CattleListing';
        };
    };
    /**
     * Find zero or one CattleListing that matches the filter.
     * @param {CattleListingFindUniqueArgs} args - Arguments to find a CattleListing
     * @example
     * // Get one CattleListing
     * const cattleListing = await prisma.cattleListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CattleListingFindUniqueArgs>(args: Prisma.SelectSubset<T, CattleListingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CattleListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CattleListingFindUniqueOrThrowArgs} args - Arguments to find a CattleListing
     * @example
     * // Get one CattleListing
     * const cattleListing = await prisma.cattleListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CattleListingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CattleListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CattleListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CattleListingFindFirstArgs} args - Arguments to find a CattleListing
     * @example
     * // Get one CattleListing
     * const cattleListing = await prisma.cattleListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CattleListingFindFirstArgs>(args?: Prisma.SelectSubset<T, CattleListingFindFirstArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CattleListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CattleListingFindFirstOrThrowArgs} args - Arguments to find a CattleListing
     * @example
     * // Get one CattleListing
     * const cattleListing = await prisma.cattleListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CattleListingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CattleListingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CattleListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CattleListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CattleListings
     * const cattleListings = await prisma.cattleListing.findMany()
     *
     * // Get first 10 CattleListings
     * const cattleListings = await prisma.cattleListing.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cattleListingWithIdOnly = await prisma.cattleListing.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CattleListingFindManyArgs>(args?: Prisma.SelectSubset<T, CattleListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CattleListing.
     * @param {CattleListingCreateArgs} args - Arguments to create a CattleListing.
     * @example
     * // Create one CattleListing
     * const CattleListing = await prisma.cattleListing.create({
     *   data: {
     *     // ... data to create a CattleListing
     *   }
     * })
     *
     */
    create<T extends CattleListingCreateArgs>(args: Prisma.SelectSubset<T, CattleListingCreateArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CattleListings.
     * @param {CattleListingCreateManyArgs} args - Arguments to create many CattleListings.
     * @example
     * // Create many CattleListings
     * const cattleListing = await prisma.cattleListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CattleListingCreateManyArgs>(args?: Prisma.SelectSubset<T, CattleListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CattleListings and returns the data saved in the database.
     * @param {CattleListingCreateManyAndReturnArgs} args - Arguments to create many CattleListings.
     * @example
     * // Create many CattleListings
     * const cattleListing = await prisma.cattleListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CattleListings and only return the `id`
     * const cattleListingWithIdOnly = await prisma.cattleListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CattleListingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CattleListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CattleListing.
     * @param {CattleListingDeleteArgs} args - Arguments to delete one CattleListing.
     * @example
     * // Delete one CattleListing
     * const CattleListing = await prisma.cattleListing.delete({
     *   where: {
     *     // ... filter to delete one CattleListing
     *   }
     * })
     *
     */
    delete<T extends CattleListingDeleteArgs>(args: Prisma.SelectSubset<T, CattleListingDeleteArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CattleListing.
     * @param {CattleListingUpdateArgs} args - Arguments to update one CattleListing.
     * @example
     * // Update one CattleListing
     * const cattleListing = await prisma.cattleListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CattleListingUpdateArgs>(args: Prisma.SelectSubset<T, CattleListingUpdateArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CattleListings.
     * @param {CattleListingDeleteManyArgs} args - Arguments to filter CattleListings to delete.
     * @example
     * // Delete a few CattleListings
     * const { count } = await prisma.cattleListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CattleListingDeleteManyArgs>(args?: Prisma.SelectSubset<T, CattleListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CattleListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CattleListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CattleListings
     * const cattleListing = await prisma.cattleListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CattleListingUpdateManyArgs>(args: Prisma.SelectSubset<T, CattleListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CattleListings and returns the data updated in the database.
     * @param {CattleListingUpdateManyAndReturnArgs} args - Arguments to update many CattleListings.
     * @example
     * // Update many CattleListings
     * const cattleListing = await prisma.cattleListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CattleListings and only return the `id`
     * const cattleListingWithIdOnly = await prisma.cattleListing.updateManyAndReturn({
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
    updateManyAndReturn<T extends CattleListingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CattleListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CattleListing.
     * @param {CattleListingUpsertArgs} args - Arguments to update or create a CattleListing.
     * @example
     * // Update or create a CattleListing
     * const cattleListing = await prisma.cattleListing.upsert({
     *   create: {
     *     // ... data to create a CattleListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CattleListing we want to update
     *   }
     * })
     */
    upsert<T extends CattleListingUpsertArgs>(args: Prisma.SelectSubset<T, CattleListingUpsertArgs<ExtArgs>>): Prisma.Prisma__CattleListingClient<runtime.Types.Result.GetResult<Prisma.$CattleListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CattleListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CattleListingCountArgs} args - Arguments to filter CattleListings to count.
     * @example
     * // Count the number of CattleListings
     * const count = await prisma.cattleListing.count({
     *   where: {
     *     // ... the filter for the CattleListings we want to count
     *   }
     * })
    **/
    count<T extends CattleListingCountArgs>(args?: Prisma.Subset<T, CattleListingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CattleListingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CattleListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CattleListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CattleListingAggregateArgs>(args: Prisma.Subset<T, CattleListingAggregateArgs>): Prisma.PrismaPromise<GetCattleListingAggregateType<T>>;
    /**
     * Group by CattleListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CattleListingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CattleListingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CattleListingGroupByArgs['orderBy'];
    } : {
        orderBy?: CattleListingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CattleListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCattleListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CattleListing model
     */
    readonly fields: CattleListingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CattleListing.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CattleListingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    animal<T extends Prisma.AnimalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnimalDefaultArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    images<T extends Prisma.CattleListing$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CattleListing$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    location<T extends Prisma.CattleListing$locationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CattleListing$locationArgs<ExtArgs>>): Prisma.Prisma__ListingLocationClient<runtime.Types.Result.GetResult<Prisma.$ListingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CattleListing model
 */
export interface CattleListingFieldRefs {
    readonly id: Prisma.FieldRef<"CattleListing", 'String'>;
    readonly ownerId: Prisma.FieldRef<"CattleListing", 'String'>;
    readonly animalId: Prisma.FieldRef<"CattleListing", 'String'>;
    readonly title: Prisma.FieldRef<"CattleListing", 'String'>;
    readonly description: Prisma.FieldRef<"CattleListing", 'String'>;
    readonly price: Prisma.FieldRef<"CattleListing", 'Decimal'>;
    readonly status: Prisma.FieldRef<"CattleListing", 'ListingStatus'>;
    readonly latitude: Prisma.FieldRef<"CattleListing", 'Decimal'>;
    readonly longitude: Prisma.FieldRef<"CattleListing", 'Decimal'>;
    readonly listingExpiresAt: Prisma.FieldRef<"CattleListing", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"CattleListing", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CattleListing", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CattleListing", 'DateTime'>;
}
/**
 * CattleListing findUnique
 */
export type CattleListingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CattleListing to fetch.
     */
    where: Prisma.CattleListingWhereUniqueInput;
};
/**
 * CattleListing findUniqueOrThrow
 */
export type CattleListingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CattleListing to fetch.
     */
    where: Prisma.CattleListingWhereUniqueInput;
};
/**
 * CattleListing findFirst
 */
export type CattleListingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CattleListing to fetch.
     */
    where?: Prisma.CattleListingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CattleListings to fetch.
     */
    orderBy?: Prisma.CattleListingOrderByWithRelationInput | Prisma.CattleListingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CattleListings.
     */
    cursor?: Prisma.CattleListingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CattleListings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CattleListings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CattleListings.
     */
    distinct?: Prisma.CattleListingScalarFieldEnum | Prisma.CattleListingScalarFieldEnum[];
};
/**
 * CattleListing findFirstOrThrow
 */
export type CattleListingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CattleListing to fetch.
     */
    where?: Prisma.CattleListingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CattleListings to fetch.
     */
    orderBy?: Prisma.CattleListingOrderByWithRelationInput | Prisma.CattleListingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CattleListings.
     */
    cursor?: Prisma.CattleListingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CattleListings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CattleListings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CattleListings.
     */
    distinct?: Prisma.CattleListingScalarFieldEnum | Prisma.CattleListingScalarFieldEnum[];
};
/**
 * CattleListing findMany
 */
export type CattleListingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CattleListings to fetch.
     */
    where?: Prisma.CattleListingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CattleListings to fetch.
     */
    orderBy?: Prisma.CattleListingOrderByWithRelationInput | Prisma.CattleListingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CattleListings.
     */
    cursor?: Prisma.CattleListingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CattleListings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CattleListings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CattleListings.
     */
    distinct?: Prisma.CattleListingScalarFieldEnum | Prisma.CattleListingScalarFieldEnum[];
};
/**
 * CattleListing create
 */
export type CattleListingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CattleListing.
     */
    data: Prisma.XOR<Prisma.CattleListingCreateInput, Prisma.CattleListingUncheckedCreateInput>;
};
/**
 * CattleListing createMany
 */
export type CattleListingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CattleListings.
     */
    data: Prisma.CattleListingCreateManyInput | Prisma.CattleListingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CattleListing createManyAndReturn
 */
export type CattleListingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CattleListing
     */
    select?: Prisma.CattleListingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CattleListing
     */
    omit?: Prisma.CattleListingOmit<ExtArgs> | null;
    /**
     * The data used to create many CattleListings.
     */
    data: Prisma.CattleListingCreateManyInput | Prisma.CattleListingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CattleListingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CattleListing update
 */
export type CattleListingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CattleListing.
     */
    data: Prisma.XOR<Prisma.CattleListingUpdateInput, Prisma.CattleListingUncheckedUpdateInput>;
    /**
     * Choose, which CattleListing to update.
     */
    where: Prisma.CattleListingWhereUniqueInput;
};
/**
 * CattleListing updateMany
 */
export type CattleListingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CattleListings.
     */
    data: Prisma.XOR<Prisma.CattleListingUpdateManyMutationInput, Prisma.CattleListingUncheckedUpdateManyInput>;
    /**
     * Filter which CattleListings to update
     */
    where?: Prisma.CattleListingWhereInput;
    /**
     * Limit how many CattleListings to update.
     */
    limit?: number;
};
/**
 * CattleListing updateManyAndReturn
 */
export type CattleListingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CattleListing
     */
    select?: Prisma.CattleListingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CattleListing
     */
    omit?: Prisma.CattleListingOmit<ExtArgs> | null;
    /**
     * The data used to update CattleListings.
     */
    data: Prisma.XOR<Prisma.CattleListingUpdateManyMutationInput, Prisma.CattleListingUncheckedUpdateManyInput>;
    /**
     * Filter which CattleListings to update
     */
    where?: Prisma.CattleListingWhereInput;
    /**
     * Limit how many CattleListings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CattleListingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CattleListing upsert
 */
export type CattleListingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CattleListing to update in case it exists.
     */
    where: Prisma.CattleListingWhereUniqueInput;
    /**
     * In case the CattleListing found by the `where` argument doesn't exist, create a new CattleListing with this data.
     */
    create: Prisma.XOR<Prisma.CattleListingCreateInput, Prisma.CattleListingUncheckedCreateInput>;
    /**
     * In case the CattleListing was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CattleListingUpdateInput, Prisma.CattleListingUncheckedUpdateInput>;
};
/**
 * CattleListing delete
 */
export type CattleListingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CattleListing to delete.
     */
    where: Prisma.CattleListingWhereUniqueInput;
};
/**
 * CattleListing deleteMany
 */
export type CattleListingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CattleListings to delete
     */
    where?: Prisma.CattleListingWhereInput;
    /**
     * Limit how many CattleListings to delete.
     */
    limit?: number;
};
/**
 * CattleListing.images
 */
export type CattleListing$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: Prisma.ListingImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: Prisma.ListingImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingImageInclude<ExtArgs> | null;
    where?: Prisma.ListingImageWhereInput;
    orderBy?: Prisma.ListingImageOrderByWithRelationInput | Prisma.ListingImageOrderByWithRelationInput[];
    cursor?: Prisma.ListingImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingImageScalarFieldEnum | Prisma.ListingImageScalarFieldEnum[];
};
/**
 * CattleListing.location
 */
export type CattleListing$locationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ListingLocationWhereInput;
};
/**
 * CattleListing without action
 */
export type CattleListingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=CattleListing.d.ts.map