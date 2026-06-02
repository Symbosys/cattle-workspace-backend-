import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
type PrismaClientOrTx = Prisma.TransactionClient | typeof db;
export declare class CartRepository {
    /**
     * Find a user's cart with all items fully populated
     */
    static findByUserId(userId: string, tx?: PrismaClientOrTx): Promise<({
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
    }) | null>;
    /**
     * Create a new empty cart for a user
     */
    static create(userId: string, tx?: PrismaClientOrTx): Promise<{
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
     * Find an existing cart item by composite key (cartId + variantId)
     */
    static findCartItem(cartId: string, variantId: string, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        variantId: string;
        quantity: number;
        cartId: string;
    } | null>;
    /**
     * Find a cart item by its ID
     */
    static findCartItemById(id: string, tx?: PrismaClientOrTx): Promise<({
        variant: {
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
    }) | null>;
    /**
     * Create a new cart item
     */
    static createCartItem(data: {
        cartId: string;
        variantId: string;
        quantity: number;
        total: Prisma.Decimal;
    }, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        variantId: string;
        quantity: number;
        cartId: string;
    }>;
    /**
     * Update an existing cart item's quantity and total
     */
    static updateCartItem(id: string, data: {
        quantity: number;
        total: Prisma.Decimal;
    }, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        variantId: string;
        quantity: number;
        cartId: string;
    }>;
    /**
     * Delete a single cart item
     */
    static deleteCartItem(id: string, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        variantId: string;
        quantity: number;
        cartId: string;
    }>;
    /**
     * Delete all cart items for a cart (clear cart)
     */
    static deleteAllCartItems(cartId: string, tx?: PrismaClientOrTx): Promise<Prisma.BatchPayload>;
    /**
     * Update the cart's cached subTotal
     */
    static updateSubTotal(cartId: string, subTotal: Prisma.Decimal, tx?: PrismaClientOrTx): Promise<{
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
     * Recalculate and update the cart's subTotal by summing all item totals
     */
    static recalculateSubTotal(cartId: string, tx?: PrismaClientOrTx): Promise<{
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
export {};
//# sourceMappingURL=cart.repository.d.ts.map