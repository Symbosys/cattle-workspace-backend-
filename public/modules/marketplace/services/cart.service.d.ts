export declare class CartService {
    /**
     * Get or create the cart for an authenticated user
     */
    static getCart(userId: string): Promise<{
        cartItems: ({
            variant: {
                product: {
                    id: string;
                    title: string;
                    images: import("@prisma/client/runtime/client").JsonValue;
                    slug: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
                title: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                isActive: boolean;
                productId: string;
                isDefault: boolean;
                sku: string;
                compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
                stock: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: import("@prisma/client-runtime-utils").Decimal;
            variantId: string;
            quantity: number;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        subTotal: import("@prisma/client-runtime-utils").Decimal;
    }>;
    /**
     * Add an item to the cart (or increment quantity if it already exists)
     */
    static addItem(userId: string, data: {
        variantId: string;
        quantity: number;
    }): Promise<{
        cartItems: ({
            variant: {
                product: {
                    id: string;
                    title: string;
                    images: import("@prisma/client/runtime/client").JsonValue;
                    slug: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
                title: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                isActive: boolean;
                productId: string;
                isDefault: boolean;
                sku: string;
                compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
                stock: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: import("@prisma/client-runtime-utils").Decimal;
            variantId: string;
            quantity: number;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        subTotal: import("@prisma/client-runtime-utils").Decimal;
    }>;
    /**
     * Update the quantity of an existing cart item
     */
    static updateItem(userId: string, itemId: string, data: {
        quantity: number;
    }): Promise<{
        cartItems: ({
            variant: {
                product: {
                    id: string;
                    title: string;
                    images: import("@prisma/client/runtime/client").JsonValue;
                    slug: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
                title: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                isActive: boolean;
                productId: string;
                isDefault: boolean;
                sku: string;
                compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
                stock: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: import("@prisma/client-runtime-utils").Decimal;
            variantId: string;
            quantity: number;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        subTotal: import("@prisma/client-runtime-utils").Decimal;
    }>;
    /**
     * Remove a single item from the cart
     */
    static removeItem(userId: string, itemId: string): Promise<{
        cartItems: ({
            variant: {
                product: {
                    id: string;
                    title: string;
                    images: import("@prisma/client/runtime/client").JsonValue;
                    slug: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
                title: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                isActive: boolean;
                productId: string;
                isDefault: boolean;
                sku: string;
                compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
                stock: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: import("@prisma/client-runtime-utils").Decimal;
            variantId: string;
            quantity: number;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        subTotal: import("@prisma/client-runtime-utils").Decimal;
    }>;
    /**
     * Clear all items from the cart
     */
    static clearCart(userId: string): Promise<{
        cartItems: ({
            variant: {
                product: {
                    id: string;
                    title: string;
                    images: import("@prisma/client/runtime/client").JsonValue;
                    slug: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
                title: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                isActive: boolean;
                productId: string;
                isDefault: boolean;
                sku: string;
                compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
                stock: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: import("@prisma/client-runtime-utils").Decimal;
            variantId: string;
            quantity: number;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        subTotal: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
//# sourceMappingURL=cart.service.d.ts.map