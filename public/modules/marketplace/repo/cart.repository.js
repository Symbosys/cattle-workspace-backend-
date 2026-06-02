import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
// Shared include for returning cart items with populated variant + product info
const cartItemInclude = {
    cartItems: {
        include: {
            variant: {
                include: {
                    product: {
                        select: {
                            id: true,
                            title: true,
                            slug: true,
                            images: true,
                        },
                    },
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    },
};
export class CartRepository {
    /**
     * Find a user's cart with all items fully populated
     */
    static async findByUserId(userId, tx = db) {
        return tx.cart.findUnique({
            where: { userId },
            include: cartItemInclude,
        });
    }
    /**
     * Create a new empty cart for a user
     */
    static async create(userId, tx = db) {
        return tx.cart.create({
            data: { userId },
            include: cartItemInclude,
        });
    }
    /**
     * Find an existing cart item by composite key (cartId + variantId)
     */
    static async findCartItem(cartId, variantId, tx = db) {
        return tx.cartItem.findUnique({
            where: {
                cartId_variantId: { cartId, variantId },
            },
        });
    }
    /**
     * Find a cart item by its ID
     */
    static async findCartItemById(id, tx = db) {
        return tx.cartItem.findUnique({
            where: { id },
            include: {
                variant: true,
            },
        });
    }
    /**
     * Create a new cart item
     */
    static async createCartItem(data, tx = db) {
        return tx.cartItem.create({
            data: {
                cartId: data.cartId,
                variantId: data.variantId,
                quantity: data.quantity,
                total: data.total,
            },
        });
    }
    /**
     * Update an existing cart item's quantity and total
     */
    static async updateCartItem(id, data, tx = db) {
        return tx.cartItem.update({
            where: { id },
            data: {
                quantity: data.quantity,
                total: data.total,
            },
        });
    }
    /**
     * Delete a single cart item
     */
    static async deleteCartItem(id, tx = db) {
        return tx.cartItem.delete({
            where: { id },
        });
    }
    /**
     * Delete all cart items for a cart (clear cart)
     */
    static async deleteAllCartItems(cartId, tx = db) {
        return tx.cartItem.deleteMany({
            where: { cartId },
        });
    }
    /**
     * Update the cart's cached subTotal
     */
    static async updateSubTotal(cartId, subTotal, tx = db) {
        return tx.cart.update({
            where: { id: cartId },
            data: { subTotal },
            include: cartItemInclude,
        });
    }
    /**
     * Recalculate and update the cart's subTotal by summing all item totals
     */
    static async recalculateSubTotal(cartId, tx = db) {
        const result = await tx.cartItem.aggregate({
            where: { cartId },
            _sum: { total: true },
        });
        const newSubTotal = result._sum.total ?? new Prisma.Decimal(0);
        return tx.cart.update({
            where: { id: cartId },
            data: { subTotal: newSubTotal },
            include: cartItemInclude,
        });
    }
}
//# sourceMappingURL=cart.repository.js.map