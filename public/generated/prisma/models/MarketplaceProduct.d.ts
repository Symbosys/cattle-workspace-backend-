import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MarketplaceProduct
 *
 */
export type MarketplaceProductModel = runtime.Types.Result.DefaultSelection<Prisma.$MarketplaceProductPayload>;
export type AggregateMarketplaceProduct = {
    _count: MarketplaceProductCountAggregateOutputType | null;
    _avg: MarketplaceProductAvgAggregateOutputType | null;
    _sum: MarketplaceProductSumAggregateOutputType | null;
    _min: MarketplaceProductMinAggregateOutputType | null;
    _max: MarketplaceProductMaxAggregateOutputType | null;
};
export type MarketplaceProductAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    stock: number | null;
};
export type MarketplaceProductSumAggregateOutputType = {
    price: runtime.Decimal | null;
    stock: number | null;
};
export type MarketplaceProductMinAggregateOutputType = {
    id: string | null;
    brandId: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    price: runtime.Decimal | null;
    stock: number | null;
    status: $Enums.ProductStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MarketplaceProductMaxAggregateOutputType = {
    id: string | null;
    brandId: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    price: runtime.Decimal | null;
    stock: number | null;
    status: $Enums.ProductStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MarketplaceProductCountAggregateOutputType = {
    id: number;
    brandId: number;
    title: number;
    description: number;
    category: number;
    price: number;
    stock: number;
    imageUrl: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MarketplaceProductAvgAggregateInputType = {
    price?: true;
    stock?: true;
};
export type MarketplaceProductSumAggregateInputType = {
    price?: true;
    stock?: true;
};
export type MarketplaceProductMinAggregateInputType = {
    id?: true;
    brandId?: true;
    title?: true;
    description?: true;
    category?: true;
    price?: true;
    stock?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MarketplaceProductMaxAggregateInputType = {
    id?: true;
    brandId?: true;
    title?: true;
    description?: true;
    category?: true;
    price?: true;
    stock?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MarketplaceProductCountAggregateInputType = {
    id?: true;
    brandId?: true;
    title?: true;
    description?: true;
    category?: true;
    price?: true;
    stock?: true;
    imageUrl?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MarketplaceProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MarketplaceProduct to aggregate.
     */
    where?: Prisma.MarketplaceProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketplaceProducts to fetch.
     */
    orderBy?: Prisma.MarketplaceProductOrderByWithRelationInput | Prisma.MarketplaceProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MarketplaceProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketplaceProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketplaceProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MarketplaceProducts
    **/
    _count?: true | MarketplaceProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MarketplaceProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MarketplaceProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MarketplaceProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MarketplaceProductMaxAggregateInputType;
};
export type GetMarketplaceProductAggregateType<T extends MarketplaceProductAggregateArgs> = {
    [P in keyof T & keyof AggregateMarketplaceProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMarketplaceProduct[P]> : Prisma.GetScalarType<T[P], AggregateMarketplaceProduct[P]>;
};
export type MarketplaceProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketplaceProductWhereInput;
    orderBy?: Prisma.MarketplaceProductOrderByWithAggregationInput | Prisma.MarketplaceProductOrderByWithAggregationInput[];
    by: Prisma.MarketplaceProductScalarFieldEnum[] | Prisma.MarketplaceProductScalarFieldEnum;
    having?: Prisma.MarketplaceProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarketplaceProductCountAggregateInputType | true;
    _avg?: MarketplaceProductAvgAggregateInputType;
    _sum?: MarketplaceProductSumAggregateInputType;
    _min?: MarketplaceProductMinAggregateInputType;
    _max?: MarketplaceProductMaxAggregateInputType;
};
export type MarketplaceProductGroupByOutputType = {
    id: string;
    brandId: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal;
    stock: number;
    imageUrl: string[];
    status: $Enums.ProductStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: MarketplaceProductCountAggregateOutputType | null;
    _avg: MarketplaceProductAvgAggregateOutputType | null;
    _sum: MarketplaceProductSumAggregateOutputType | null;
    _min: MarketplaceProductMinAggregateOutputType | null;
    _max: MarketplaceProductMaxAggregateOutputType | null;
};
export type GetMarketplaceProductGroupByPayload<T extends MarketplaceProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MarketplaceProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MarketplaceProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MarketplaceProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MarketplaceProductGroupByOutputType[P]>;
}>>;
export type MarketplaceProductWhereInput = {
    AND?: Prisma.MarketplaceProductWhereInput | Prisma.MarketplaceProductWhereInput[];
    OR?: Prisma.MarketplaceProductWhereInput[];
    NOT?: Prisma.MarketplaceProductWhereInput | Prisma.MarketplaceProductWhereInput[];
    id?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    brandId?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    title?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    description?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    category?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    price?: Prisma.DecimalFilter<"MarketplaceProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"MarketplaceProduct"> | number;
    imageUrl?: Prisma.StringNullableListFilter<"MarketplaceProduct">;
    status?: Prisma.EnumProductStatusFilter<"MarketplaceProduct"> | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFilter<"MarketplaceProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MarketplaceProduct"> | Date | string;
    brand?: Prisma.XOR<Prisma.BrandProfileScalarRelationFilter, Prisma.BrandProfileWhereInput>;
    orderItems?: Prisma.MarketplaceOrderItemListRelationFilter;
    reviews?: Prisma.ProductReviewListRelationFilter;
    cartItems?: Prisma.CartItemListRelationFilter;
};
export type MarketplaceProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    brand?: Prisma.BrandProfileOrderByWithRelationInput;
    orderItems?: Prisma.MarketplaceOrderItemOrderByRelationAggregateInput;
    reviews?: Prisma.ProductReviewOrderByRelationAggregateInput;
    cartItems?: Prisma.CartItemOrderByRelationAggregateInput;
};
export type MarketplaceProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MarketplaceProductWhereInput | Prisma.MarketplaceProductWhereInput[];
    OR?: Prisma.MarketplaceProductWhereInput[];
    NOT?: Prisma.MarketplaceProductWhereInput | Prisma.MarketplaceProductWhereInput[];
    brandId?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    title?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    description?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    category?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    price?: Prisma.DecimalFilter<"MarketplaceProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"MarketplaceProduct"> | number;
    imageUrl?: Prisma.StringNullableListFilter<"MarketplaceProduct">;
    status?: Prisma.EnumProductStatusFilter<"MarketplaceProduct"> | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFilter<"MarketplaceProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MarketplaceProduct"> | Date | string;
    brand?: Prisma.XOR<Prisma.BrandProfileScalarRelationFilter, Prisma.BrandProfileWhereInput>;
    orderItems?: Prisma.MarketplaceOrderItemListRelationFilter;
    reviews?: Prisma.ProductReviewListRelationFilter;
    cartItems?: Prisma.CartItemListRelationFilter;
}, "id">;
export type MarketplaceProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MarketplaceProductCountOrderByAggregateInput;
    _avg?: Prisma.MarketplaceProductAvgOrderByAggregateInput;
    _max?: Prisma.MarketplaceProductMaxOrderByAggregateInput;
    _min?: Prisma.MarketplaceProductMinOrderByAggregateInput;
    _sum?: Prisma.MarketplaceProductSumOrderByAggregateInput;
};
export type MarketplaceProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.MarketplaceProductScalarWhereWithAggregatesInput | Prisma.MarketplaceProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.MarketplaceProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MarketplaceProductScalarWhereWithAggregatesInput | Prisma.MarketplaceProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MarketplaceProduct"> | string;
    brandId?: Prisma.StringWithAggregatesFilter<"MarketplaceProduct"> | string;
    title?: Prisma.StringWithAggregatesFilter<"MarketplaceProduct"> | string;
    description?: Prisma.StringWithAggregatesFilter<"MarketplaceProduct"> | string;
    category?: Prisma.StringWithAggregatesFilter<"MarketplaceProduct"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"MarketplaceProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntWithAggregatesFilter<"MarketplaceProduct"> | number;
    imageUrl?: Prisma.StringNullableListFilter<"MarketplaceProduct">;
    status?: Prisma.EnumProductStatusWithAggregatesFilter<"MarketplaceProduct"> | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MarketplaceProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MarketplaceProduct"> | Date | string;
};
export type MarketplaceProductCreateInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandProfileCreateNestedOneWithoutProductsInput;
    orderItems?: Prisma.MarketplaceOrderItemCreateNestedManyWithoutProductInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductUncheckedCreateInput = {
    id?: string;
    brandId: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedCreateNestedManyWithoutProductInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandProfileUpdateOneRequiredWithoutProductsNestedInput;
    orderItems?: Prisma.MarketplaceOrderItemUpdateManyWithoutProductNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductCreateManyInput = {
    id?: string;
    brandId: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarketplaceProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketplaceProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketplaceProductListRelationFilter = {
    every?: Prisma.MarketplaceProductWhereInput;
    some?: Prisma.MarketplaceProductWhereInput;
    none?: Prisma.MarketplaceProductWhereInput;
};
export type MarketplaceProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MarketplaceProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MarketplaceProductAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type MarketplaceProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MarketplaceProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MarketplaceProductSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type MarketplaceProductScalarRelationFilter = {
    is?: Prisma.MarketplaceProductWhereInput;
    isNot?: Prisma.MarketplaceProductWhereInput;
};
export type MarketplaceProductCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutBrandInput, Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput> | Prisma.MarketplaceProductCreateWithoutBrandInput[] | Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput | Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.MarketplaceProductCreateManyBrandInputEnvelope;
    connect?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
};
export type MarketplaceProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutBrandInput, Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput> | Prisma.MarketplaceProductCreateWithoutBrandInput[] | Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput | Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.MarketplaceProductCreateManyBrandInputEnvelope;
    connect?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
};
export type MarketplaceProductUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutBrandInput, Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput> | Prisma.MarketplaceProductCreateWithoutBrandInput[] | Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput | Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.MarketplaceProductUpsertWithWhereUniqueWithoutBrandInput | Prisma.MarketplaceProductUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.MarketplaceProductCreateManyBrandInputEnvelope;
    set?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    disconnect?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    delete?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    connect?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    update?: Prisma.MarketplaceProductUpdateWithWhereUniqueWithoutBrandInput | Prisma.MarketplaceProductUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.MarketplaceProductUpdateManyWithWhereWithoutBrandInput | Prisma.MarketplaceProductUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.MarketplaceProductScalarWhereInput | Prisma.MarketplaceProductScalarWhereInput[];
};
export type MarketplaceProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutBrandInput, Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput> | Prisma.MarketplaceProductCreateWithoutBrandInput[] | Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput | Prisma.MarketplaceProductCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.MarketplaceProductUpsertWithWhereUniqueWithoutBrandInput | Prisma.MarketplaceProductUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.MarketplaceProductCreateManyBrandInputEnvelope;
    set?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    disconnect?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    delete?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    connect?: Prisma.MarketplaceProductWhereUniqueInput | Prisma.MarketplaceProductWhereUniqueInput[];
    update?: Prisma.MarketplaceProductUpdateWithWhereUniqueWithoutBrandInput | Prisma.MarketplaceProductUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.MarketplaceProductUpdateManyWithWhereWithoutBrandInput | Prisma.MarketplaceProductUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.MarketplaceProductScalarWhereInput | Prisma.MarketplaceProductScalarWhereInput[];
};
export type MarketplaceProductCreateimageUrlInput = {
    set: string[];
};
export type MarketplaceProductUpdateimageUrlInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus;
};
export type MarketplaceProductCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutReviewsInput, Prisma.MarketplaceProductUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.MarketplaceProductWhereUniqueInput;
};
export type MarketplaceProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutReviewsInput, Prisma.MarketplaceProductUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.MarketplaceProductUpsertWithoutReviewsInput;
    connect?: Prisma.MarketplaceProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MarketplaceProductUpdateToOneWithWhereWithoutReviewsInput, Prisma.MarketplaceProductUpdateWithoutReviewsInput>, Prisma.MarketplaceProductUncheckedUpdateWithoutReviewsInput>;
};
export type MarketplaceProductCreateNestedOneWithoutCartItemsInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutCartItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutCartItemsInput;
    connect?: Prisma.MarketplaceProductWhereUniqueInput;
};
export type MarketplaceProductUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutCartItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutCartItemsInput;
    upsert?: Prisma.MarketplaceProductUpsertWithoutCartItemsInput;
    connect?: Prisma.MarketplaceProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MarketplaceProductUpdateToOneWithWhereWithoutCartItemsInput, Prisma.MarketplaceProductUpdateWithoutCartItemsInput>, Prisma.MarketplaceProductUncheckedUpdateWithoutCartItemsInput>;
};
export type MarketplaceProductCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutOrderItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.MarketplaceProductWhereUniqueInput;
};
export type MarketplaceProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutOrderItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.MarketplaceProductCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.MarketplaceProductUpsertWithoutOrderItemsInput;
    connect?: Prisma.MarketplaceProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MarketplaceProductUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.MarketplaceProductUpdateWithoutOrderItemsInput>, Prisma.MarketplaceProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type MarketplaceProductCreateWithoutBrandInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.MarketplaceOrderItemCreateNestedManyWithoutProductInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductUncheckedCreateWithoutBrandInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedCreateNestedManyWithoutProductInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductCreateOrConnectWithoutBrandInput = {
    where: Prisma.MarketplaceProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutBrandInput, Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput>;
};
export type MarketplaceProductCreateManyBrandInputEnvelope = {
    data: Prisma.MarketplaceProductCreateManyBrandInput | Prisma.MarketplaceProductCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type MarketplaceProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.MarketplaceProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutBrandInput, Prisma.MarketplaceProductUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutBrandInput, Prisma.MarketplaceProductUncheckedCreateWithoutBrandInput>;
};
export type MarketplaceProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.MarketplaceProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutBrandInput, Prisma.MarketplaceProductUncheckedUpdateWithoutBrandInput>;
};
export type MarketplaceProductUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.MarketplaceProductScalarWhereInput;
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateManyMutationInput, Prisma.MarketplaceProductUncheckedUpdateManyWithoutBrandInput>;
};
export type MarketplaceProductScalarWhereInput = {
    AND?: Prisma.MarketplaceProductScalarWhereInput | Prisma.MarketplaceProductScalarWhereInput[];
    OR?: Prisma.MarketplaceProductScalarWhereInput[];
    NOT?: Prisma.MarketplaceProductScalarWhereInput | Prisma.MarketplaceProductScalarWhereInput[];
    id?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    brandId?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    title?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    description?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    category?: Prisma.StringFilter<"MarketplaceProduct"> | string;
    price?: Prisma.DecimalFilter<"MarketplaceProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"MarketplaceProduct"> | number;
    imageUrl?: Prisma.StringNullableListFilter<"MarketplaceProduct">;
    status?: Prisma.EnumProductStatusFilter<"MarketplaceProduct"> | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFilter<"MarketplaceProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MarketplaceProduct"> | Date | string;
};
export type MarketplaceProductCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandProfileCreateNestedOneWithoutProductsInput;
    orderItems?: Prisma.MarketplaceOrderItemCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductUncheckedCreateWithoutReviewsInput = {
    id?: string;
    brandId: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductCreateOrConnectWithoutReviewsInput = {
    where: Prisma.MarketplaceProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutReviewsInput, Prisma.MarketplaceProductUncheckedCreateWithoutReviewsInput>;
};
export type MarketplaceProductUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutReviewsInput, Prisma.MarketplaceProductUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutReviewsInput, Prisma.MarketplaceProductUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.MarketplaceProductWhereInput;
};
export type MarketplaceProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.MarketplaceProductWhereInput;
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutReviewsInput, Prisma.MarketplaceProductUncheckedUpdateWithoutReviewsInput>;
};
export type MarketplaceProductUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandProfileUpdateOneRequiredWithoutProductsNestedInput;
    orderItems?: Prisma.MarketplaceOrderItemUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductCreateWithoutCartItemsInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandProfileCreateNestedOneWithoutProductsInput;
    orderItems?: Prisma.MarketplaceOrderItemCreateNestedManyWithoutProductInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductUncheckedCreateWithoutCartItemsInput = {
    id?: string;
    brandId: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedCreateNestedManyWithoutProductInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductCreateOrConnectWithoutCartItemsInput = {
    where: Prisma.MarketplaceProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutCartItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutCartItemsInput>;
};
export type MarketplaceProductUpsertWithoutCartItemsInput = {
    update: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutCartItemsInput, Prisma.MarketplaceProductUncheckedUpdateWithoutCartItemsInput>;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutCartItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutCartItemsInput>;
    where?: Prisma.MarketplaceProductWhereInput;
};
export type MarketplaceProductUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: Prisma.MarketplaceProductWhereInput;
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutCartItemsInput, Prisma.MarketplaceProductUncheckedUpdateWithoutCartItemsInput>;
};
export type MarketplaceProductUpdateWithoutCartItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandProfileUpdateOneRequiredWithoutProductsNestedInput;
    orderItems?: Prisma.MarketplaceOrderItemUpdateManyWithoutProductNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductUncheckedUpdateWithoutCartItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductCreateWithoutOrderItemsInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandProfileCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    brandId: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
};
export type MarketplaceProductCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.MarketplaceProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutOrderItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutOrderItemsInput>;
};
export type MarketplaceProductUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutOrderItemsInput, Prisma.MarketplaceProductUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.MarketplaceProductCreateWithoutOrderItemsInput, Prisma.MarketplaceProductUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.MarketplaceProductWhereInput;
};
export type MarketplaceProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.MarketplaceProductWhereInput;
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateWithoutOrderItemsInput, Prisma.MarketplaceProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type MarketplaceProductUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandProfileUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductCreateManyBrandInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    imageUrl?: Prisma.MarketplaceProductCreateimageUrlInput | string[];
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarketplaceProductUpdateWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUpdateManyWithoutProductNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductUncheckedUpdateWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.MarketplaceOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type MarketplaceProductUncheckedUpdateManyWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.MarketplaceProductUpdateimageUrlInput | string[];
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MarketplaceProductCountOutputType
 */
export type MarketplaceProductCountOutputType = {
    orderItems: number;
    reviews: number;
    cartItems: number;
};
export type MarketplaceProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | MarketplaceProductCountOutputTypeCountOrderItemsArgs;
    reviews?: boolean | MarketplaceProductCountOutputTypeCountReviewsArgs;
    cartItems?: boolean | MarketplaceProductCountOutputTypeCountCartItemsArgs;
};
/**
 * MarketplaceProductCountOutputType without action
 */
export type MarketplaceProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProductCountOutputType
     */
    select?: Prisma.MarketplaceProductCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MarketplaceProductCountOutputType without action
 */
export type MarketplaceProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketplaceOrderItemWhereInput;
};
/**
 * MarketplaceProductCountOutputType without action
 */
export type MarketplaceProductCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
};
/**
 * MarketplaceProductCountOutputType without action
 */
export type MarketplaceProductCountOutputTypeCountCartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
};
export type MarketplaceProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    price?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.MarketplaceProduct$orderItemsArgs<ExtArgs>;
    reviews?: boolean | Prisma.MarketplaceProduct$reviewsArgs<ExtArgs>;
    cartItems?: boolean | Prisma.MarketplaceProduct$cartItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MarketplaceProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["marketplaceProduct"]>;
export type MarketplaceProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    price?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["marketplaceProduct"]>;
export type MarketplaceProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    price?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["marketplaceProduct"]>;
export type MarketplaceProductSelectScalar = {
    id?: boolean;
    brandId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    price?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MarketplaceProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "brandId" | "title" | "description" | "category" | "price" | "stock" | "imageUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["marketplaceProduct"]>;
export type MarketplaceProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.MarketplaceProduct$orderItemsArgs<ExtArgs>;
    reviews?: boolean | Prisma.MarketplaceProduct$reviewsArgs<ExtArgs>;
    cartItems?: boolean | Prisma.MarketplaceProduct$cartItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MarketplaceProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MarketplaceProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
};
export type MarketplaceProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandProfileDefaultArgs<ExtArgs>;
};
export type $MarketplaceProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MarketplaceProduct";
    objects: {
        brand: Prisma.$BrandProfilePayload<ExtArgs>;
        orderItems: Prisma.$MarketplaceOrderItemPayload<ExtArgs>[];
        reviews: Prisma.$ProductReviewPayload<ExtArgs>[];
        cartItems: Prisma.$CartItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        brandId: string;
        title: string;
        description: string;
        category: string;
        price: runtime.Decimal;
        stock: number;
        imageUrl: string[];
        status: $Enums.ProductStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["marketplaceProduct"]>;
    composites: {};
};
export type MarketplaceProductGetPayload<S extends boolean | null | undefined | MarketplaceProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload, S>;
export type MarketplaceProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MarketplaceProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MarketplaceProductCountAggregateInputType | true;
};
export interface MarketplaceProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MarketplaceProduct'];
        meta: {
            name: 'MarketplaceProduct';
        };
    };
    /**
     * Find zero or one MarketplaceProduct that matches the filter.
     * @param {MarketplaceProductFindUniqueArgs} args - Arguments to find a MarketplaceProduct
     * @example
     * // Get one MarketplaceProduct
     * const marketplaceProduct = await prisma.marketplaceProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketplaceProductFindUniqueArgs>(args: Prisma.SelectSubset<T, MarketplaceProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MarketplaceProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketplaceProductFindUniqueOrThrowArgs} args - Arguments to find a MarketplaceProduct
     * @example
     * // Get one MarketplaceProduct
     * const marketplaceProduct = await prisma.marketplaceProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketplaceProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MarketplaceProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MarketplaceProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceProductFindFirstArgs} args - Arguments to find a MarketplaceProduct
     * @example
     * // Get one MarketplaceProduct
     * const marketplaceProduct = await prisma.marketplaceProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketplaceProductFindFirstArgs>(args?: Prisma.SelectSubset<T, MarketplaceProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MarketplaceProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceProductFindFirstOrThrowArgs} args - Arguments to find a MarketplaceProduct
     * @example
     * // Get one MarketplaceProduct
     * const marketplaceProduct = await prisma.marketplaceProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketplaceProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MarketplaceProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MarketplaceProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketplaceProducts
     * const marketplaceProducts = await prisma.marketplaceProduct.findMany()
     *
     * // Get first 10 MarketplaceProducts
     * const marketplaceProducts = await prisma.marketplaceProduct.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const marketplaceProductWithIdOnly = await prisma.marketplaceProduct.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MarketplaceProductFindManyArgs>(args?: Prisma.SelectSubset<T, MarketplaceProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MarketplaceProduct.
     * @param {MarketplaceProductCreateArgs} args - Arguments to create a MarketplaceProduct.
     * @example
     * // Create one MarketplaceProduct
     * const MarketplaceProduct = await prisma.marketplaceProduct.create({
     *   data: {
     *     // ... data to create a MarketplaceProduct
     *   }
     * })
     *
     */
    create<T extends MarketplaceProductCreateArgs>(args: Prisma.SelectSubset<T, MarketplaceProductCreateArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MarketplaceProducts.
     * @param {MarketplaceProductCreateManyArgs} args - Arguments to create many MarketplaceProducts.
     * @example
     * // Create many MarketplaceProducts
     * const marketplaceProduct = await prisma.marketplaceProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MarketplaceProductCreateManyArgs>(args?: Prisma.SelectSubset<T, MarketplaceProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MarketplaceProducts and returns the data saved in the database.
     * @param {MarketplaceProductCreateManyAndReturnArgs} args - Arguments to create many MarketplaceProducts.
     * @example
     * // Create many MarketplaceProducts
     * const marketplaceProduct = await prisma.marketplaceProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MarketplaceProducts and only return the `id`
     * const marketplaceProductWithIdOnly = await prisma.marketplaceProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MarketplaceProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MarketplaceProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MarketplaceProduct.
     * @param {MarketplaceProductDeleteArgs} args - Arguments to delete one MarketplaceProduct.
     * @example
     * // Delete one MarketplaceProduct
     * const MarketplaceProduct = await prisma.marketplaceProduct.delete({
     *   where: {
     *     // ... filter to delete one MarketplaceProduct
     *   }
     * })
     *
     */
    delete<T extends MarketplaceProductDeleteArgs>(args: Prisma.SelectSubset<T, MarketplaceProductDeleteArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MarketplaceProduct.
     * @param {MarketplaceProductUpdateArgs} args - Arguments to update one MarketplaceProduct.
     * @example
     * // Update one MarketplaceProduct
     * const marketplaceProduct = await prisma.marketplaceProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MarketplaceProductUpdateArgs>(args: Prisma.SelectSubset<T, MarketplaceProductUpdateArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MarketplaceProducts.
     * @param {MarketplaceProductDeleteManyArgs} args - Arguments to filter MarketplaceProducts to delete.
     * @example
     * // Delete a few MarketplaceProducts
     * const { count } = await prisma.marketplaceProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MarketplaceProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, MarketplaceProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MarketplaceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketplaceProducts
     * const marketplaceProduct = await prisma.marketplaceProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MarketplaceProductUpdateManyArgs>(args: Prisma.SelectSubset<T, MarketplaceProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MarketplaceProducts and returns the data updated in the database.
     * @param {MarketplaceProductUpdateManyAndReturnArgs} args - Arguments to update many MarketplaceProducts.
     * @example
     * // Update many MarketplaceProducts
     * const marketplaceProduct = await prisma.marketplaceProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MarketplaceProducts and only return the `id`
     * const marketplaceProductWithIdOnly = await prisma.marketplaceProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketplaceProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MarketplaceProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MarketplaceProduct.
     * @param {MarketplaceProductUpsertArgs} args - Arguments to update or create a MarketplaceProduct.
     * @example
     * // Update or create a MarketplaceProduct
     * const marketplaceProduct = await prisma.marketplaceProduct.upsert({
     *   create: {
     *     // ... data to create a MarketplaceProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketplaceProduct we want to update
     *   }
     * })
     */
    upsert<T extends MarketplaceProductUpsertArgs>(args: Prisma.SelectSubset<T, MarketplaceProductUpsertArgs<ExtArgs>>): Prisma.Prisma__MarketplaceProductClient<runtime.Types.Result.GetResult<Prisma.$MarketplaceProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MarketplaceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceProductCountArgs} args - Arguments to filter MarketplaceProducts to count.
     * @example
     * // Count the number of MarketplaceProducts
     * const count = await prisma.marketplaceProduct.count({
     *   where: {
     *     // ... the filter for the MarketplaceProducts we want to count
     *   }
     * })
    **/
    count<T extends MarketplaceProductCountArgs>(args?: Prisma.Subset<T, MarketplaceProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MarketplaceProductCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MarketplaceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketplaceProductAggregateArgs>(args: Prisma.Subset<T, MarketplaceProductAggregateArgs>): Prisma.PrismaPromise<GetMarketplaceProductAggregateType<T>>;
    /**
     * Group by MarketplaceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceProductGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MarketplaceProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MarketplaceProductGroupByArgs['orderBy'];
    } : {
        orderBy?: MarketplaceProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MarketplaceProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketplaceProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MarketplaceProduct model
     */
    readonly fields: MarketplaceProductFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MarketplaceProduct.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MarketplaceProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brand<T extends Prisma.BrandProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__BrandProfileClient<runtime.Types.Result.GetResult<Prisma.$BrandProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderItems<T extends Prisma.MarketplaceProduct$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketplaceProduct$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketplaceOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.MarketplaceProduct$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketplaceProduct$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cartItems<T extends Prisma.MarketplaceProduct$cartItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketplaceProduct$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MarketplaceProduct model
 */
export interface MarketplaceProductFieldRefs {
    readonly id: Prisma.FieldRef<"MarketplaceProduct", 'String'>;
    readonly brandId: Prisma.FieldRef<"MarketplaceProduct", 'String'>;
    readonly title: Prisma.FieldRef<"MarketplaceProduct", 'String'>;
    readonly description: Prisma.FieldRef<"MarketplaceProduct", 'String'>;
    readonly category: Prisma.FieldRef<"MarketplaceProduct", 'String'>;
    readonly price: Prisma.FieldRef<"MarketplaceProduct", 'Decimal'>;
    readonly stock: Prisma.FieldRef<"MarketplaceProduct", 'Int'>;
    readonly imageUrl: Prisma.FieldRef<"MarketplaceProduct", 'String[]'>;
    readonly status: Prisma.FieldRef<"MarketplaceProduct", 'ProductStatus'>;
    readonly createdAt: Prisma.FieldRef<"MarketplaceProduct", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MarketplaceProduct", 'DateTime'>;
}
/**
 * MarketplaceProduct findUnique
 */
export type MarketplaceProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * Filter, which MarketplaceProduct to fetch.
     */
    where: Prisma.MarketplaceProductWhereUniqueInput;
};
/**
 * MarketplaceProduct findUniqueOrThrow
 */
export type MarketplaceProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * Filter, which MarketplaceProduct to fetch.
     */
    where: Prisma.MarketplaceProductWhereUniqueInput;
};
/**
 * MarketplaceProduct findFirst
 */
export type MarketplaceProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * Filter, which MarketplaceProduct to fetch.
     */
    where?: Prisma.MarketplaceProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketplaceProducts to fetch.
     */
    orderBy?: Prisma.MarketplaceProductOrderByWithRelationInput | Prisma.MarketplaceProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarketplaceProducts.
     */
    cursor?: Prisma.MarketplaceProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketplaceProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketplaceProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarketplaceProducts.
     */
    distinct?: Prisma.MarketplaceProductScalarFieldEnum | Prisma.MarketplaceProductScalarFieldEnum[];
};
/**
 * MarketplaceProduct findFirstOrThrow
 */
export type MarketplaceProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * Filter, which MarketplaceProduct to fetch.
     */
    where?: Prisma.MarketplaceProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketplaceProducts to fetch.
     */
    orderBy?: Prisma.MarketplaceProductOrderByWithRelationInput | Prisma.MarketplaceProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarketplaceProducts.
     */
    cursor?: Prisma.MarketplaceProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketplaceProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketplaceProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarketplaceProducts.
     */
    distinct?: Prisma.MarketplaceProductScalarFieldEnum | Prisma.MarketplaceProductScalarFieldEnum[];
};
/**
 * MarketplaceProduct findMany
 */
export type MarketplaceProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * Filter, which MarketplaceProducts to fetch.
     */
    where?: Prisma.MarketplaceProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketplaceProducts to fetch.
     */
    orderBy?: Prisma.MarketplaceProductOrderByWithRelationInput | Prisma.MarketplaceProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MarketplaceProducts.
     */
    cursor?: Prisma.MarketplaceProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketplaceProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketplaceProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarketplaceProducts.
     */
    distinct?: Prisma.MarketplaceProductScalarFieldEnum | Prisma.MarketplaceProductScalarFieldEnum[];
};
/**
 * MarketplaceProduct create
 */
export type MarketplaceProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a MarketplaceProduct.
     */
    data: Prisma.XOR<Prisma.MarketplaceProductCreateInput, Prisma.MarketplaceProductUncheckedCreateInput>;
};
/**
 * MarketplaceProduct createMany
 */
export type MarketplaceProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketplaceProducts.
     */
    data: Prisma.MarketplaceProductCreateManyInput | Prisma.MarketplaceProductCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MarketplaceProduct createManyAndReturn
 */
export type MarketplaceProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * The data used to create many MarketplaceProducts.
     */
    data: Prisma.MarketplaceProductCreateManyInput | Prisma.MarketplaceProductCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MarketplaceProduct update
 */
export type MarketplaceProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a MarketplaceProduct.
     */
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateInput, Prisma.MarketplaceProductUncheckedUpdateInput>;
    /**
     * Choose, which MarketplaceProduct to update.
     */
    where: Prisma.MarketplaceProductWhereUniqueInput;
};
/**
 * MarketplaceProduct updateMany
 */
export type MarketplaceProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketplaceProducts.
     */
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateManyMutationInput, Prisma.MarketplaceProductUncheckedUpdateManyInput>;
    /**
     * Filter which MarketplaceProducts to update
     */
    where?: Prisma.MarketplaceProductWhereInput;
    /**
     * Limit how many MarketplaceProducts to update.
     */
    limit?: number;
};
/**
 * MarketplaceProduct updateManyAndReturn
 */
export type MarketplaceProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * The data used to update MarketplaceProducts.
     */
    data: Prisma.XOR<Prisma.MarketplaceProductUpdateManyMutationInput, Prisma.MarketplaceProductUncheckedUpdateManyInput>;
    /**
     * Filter which MarketplaceProducts to update
     */
    where?: Prisma.MarketplaceProductWhereInput;
    /**
     * Limit how many MarketplaceProducts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MarketplaceProduct upsert
 */
export type MarketplaceProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the MarketplaceProduct to update in case it exists.
     */
    where: Prisma.MarketplaceProductWhereUniqueInput;
    /**
     * In case the MarketplaceProduct found by the `where` argument doesn't exist, create a new MarketplaceProduct with this data.
     */
    create: Prisma.XOR<Prisma.MarketplaceProductCreateInput, Prisma.MarketplaceProductUncheckedCreateInput>;
    /**
     * In case the MarketplaceProduct was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MarketplaceProductUpdateInput, Prisma.MarketplaceProductUncheckedUpdateInput>;
};
/**
 * MarketplaceProduct delete
 */
export type MarketplaceProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
    /**
     * Filter which MarketplaceProduct to delete.
     */
    where: Prisma.MarketplaceProductWhereUniqueInput;
};
/**
 * MarketplaceProduct deleteMany
 */
export type MarketplaceProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MarketplaceProducts to delete
     */
    where?: Prisma.MarketplaceProductWhereInput;
    /**
     * Limit how many MarketplaceProducts to delete.
     */
    limit?: number;
};
/**
 * MarketplaceProduct.orderItems
 */
export type MarketplaceProduct$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceOrderItem
     */
    select?: Prisma.MarketplaceOrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceOrderItem
     */
    omit?: Prisma.MarketplaceOrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceOrderItemInclude<ExtArgs> | null;
    where?: Prisma.MarketplaceOrderItemWhereInput;
    orderBy?: Prisma.MarketplaceOrderItemOrderByWithRelationInput | Prisma.MarketplaceOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.MarketplaceOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketplaceOrderItemScalarFieldEnum | Prisma.MarketplaceOrderItemScalarFieldEnum[];
};
/**
 * MarketplaceProduct.reviews
 */
export type MarketplaceProduct$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
/**
 * MarketplaceProduct.cartItems
 */
export type MarketplaceProduct$cartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where?: Prisma.CartItemWhereInput;
    orderBy?: Prisma.CartItemOrderByWithRelationInput | Prisma.CartItemOrderByWithRelationInput[];
    cursor?: Prisma.CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartItemScalarFieldEnum | Prisma.CartItemScalarFieldEnum[];
};
/**
 * MarketplaceProduct without action
 */
export type MarketplaceProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceProduct
     */
    select?: Prisma.MarketplaceProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketplaceProduct
     */
    omit?: Prisma.MarketplaceProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketplaceProductInclude<ExtArgs> | null;
};
//# sourceMappingURL=MarketplaceProduct.d.ts.map