import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { addToCartSchema, updateCartItemSchema } from "../schema/cart.schema.js";
import { CartService } from "../services/cart.service.js";
/**
 * Get the authenticated user's cart
 */
export const getCart = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const cart = await CartService.getCart(req.user.id);
    return SuccessResponse(res, "Cart fetched successfully", cart, 200);
});
/**
 * Add an item to the cart
 */
export const addToCart = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const validated = addToCartSchema.parse(req.body);
    const cart = await CartService.addItem(req.user.id, {
        variantId: validated.variantId,
        quantity: validated.quantity,
    });
    return SuccessResponse(res, "Item added to cart", cart, 200);
});
/**
 * Update the quantity of a cart item
 */
export const updateCartItem = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const itemId = req.params.itemId;
    if (!itemId) {
        return next(new ErrorResponse("Cart item ID is required", 400));
    }
    const validated = updateCartItemSchema.parse(req.body);
    const cart = await CartService.updateItem(req.user.id, itemId, {
        quantity: validated.quantity,
    });
    return SuccessResponse(res, "Cart item updated", cart, 200);
});
/**
 * Remove a single item from the cart
 */
export const removeCartItem = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const itemId = req.params.itemId;
    if (!itemId) {
        return next(new ErrorResponse("Cart item ID is required", 400));
    }
    const cart = await CartService.removeItem(req.user.id, itemId);
    return SuccessResponse(res, "Item removed from cart", cart, 200);
});
/**
 * Clear all items from the cart
 */
export const clearCart = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const cart = await CartService.clearCart(req.user.id);
    return SuccessResponse(res, "Cart cleared", cart, 200);
});
//# sourceMappingURL=cart.controller.js.map