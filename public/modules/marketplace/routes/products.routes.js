import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { createProduct, updateProduct, getProductById, getProductBySlug, getProducts, deleteProduct, } from "../controllers/products.controller.js";
const productsRouter = Router();
// Write routes (protected, owners only checked at controller)
productsRouter.post("/", authenticate, multerUpload.array("images", 10), createProduct);
productsRouter.put("/:id", authenticate, multerUpload.array("images", 10), updateProduct);
productsRouter.delete("/:id", authenticate, deleteProduct);
// Read routes (public)
productsRouter.get("/slug/:slug", getProductBySlug);
productsRouter.get("/:id", getProductById);
productsRouter.get("/", getProducts);
export default productsRouter;
//# sourceMappingURL=products.routes.js.map