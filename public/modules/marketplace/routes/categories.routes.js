import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import { createCategory, updateCategory, getCategoryById, getCategories, deleteCategory, } from "../controllers/categories.controller.js";
const categoriesRouter = Router();
categoriesRouter.post("/", authenticate, createCategory);
categoriesRouter.put("/:id", authenticate, updateCategory);
categoriesRouter.get("/:id", getCategoryById);
categoriesRouter.get("/", getCategories);
categoriesRouter.delete("/:id", authenticate, deleteCategory);
export default categoriesRouter;
//# sourceMappingURL=categories.routes.js.map