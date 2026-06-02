import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../controllers/cart.controller.js";

const cartRouter = Router();

// All cart routes require authentication
cartRouter.get("/", authenticate, getCart);
cartRouter.post("/items", authenticate, addToCart);
cartRouter.put("/items/:itemId", authenticate, updateCartItem);
cartRouter.delete("/items/:itemId", authenticate, removeCartItem);
cartRouter.delete("/", authenticate, clearCart);

export default cartRouter;
