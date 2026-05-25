import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  createSubCategory,
  getAllSubCategories,
  updateSubCategory,
} from "../controller/animal-category.controller.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { authenticate, authorizeRole } from "../../user/middlewares/auth.middleware.js";

const animalCategoryRouter = Router();

// Category Routes
animalCategoryRouter.get("/categories", getAllCategories);
animalCategoryRouter.post("/categories", authenticate, authorizeRole("ADMIN"), multerUpload.single("image"), createCategory);
animalCategoryRouter.put("/categories/:id", authenticate, authorizeRole("ADMIN"), multerUpload.single("image"), updateCategory);

// SubCategory Routes
animalCategoryRouter.get("/subcategories", getAllSubCategories);
animalCategoryRouter.post("/subcategories", authenticate, authorizeRole("ADMIN"), multerUpload.single("image"), createSubCategory);
animalCategoryRouter.put("/subcategories/:id", authenticate, authorizeRole("ADMIN"), multerUpload.single("image"), updateSubCategory);

export default animalCategoryRouter;
