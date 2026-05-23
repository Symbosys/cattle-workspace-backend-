import { Router } from "express";
import { createCategory, getAllCategories, updateCategory, createSubCategory, getAllSubCategories, updateSubCategory, } from "../controller/animal-category.controller.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
const animalCategoryRouter = Router();
// Category Routes
animalCategoryRouter.post("/categories", multerUpload.single("image"), createCategory);
animalCategoryRouter.get("/categories", getAllCategories);
animalCategoryRouter.put("/categories/:id", multerUpload.single("image"), updateCategory);
// SubCategory Routes
animalCategoryRouter.post("/subcategories", multerUpload.single("image"), createSubCategory);
animalCategoryRouter.get("/subcategories", getAllSubCategories);
animalCategoryRouter.put("/subcategories/:id", multerUpload.single("image"), updateSubCategory);
export default animalCategoryRouter;
//# sourceMappingURL=animal-category.routes.js.map