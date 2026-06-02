import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import {
  createVariant,
  updateVariant,
  deleteVariant,
  getVariantById,
} from "../controllers/variants.controller.js";

const variantsRouter = Router();

// Write routes (protected, owner checked in service/controller)
variantsRouter.post(
  "/product/:productId",
  authenticate,
  multerUpload.single("image"),
  createVariant
);

variantsRouter.put(
  "/:id",
  authenticate,
  multerUpload.single("image"),
  updateVariant
);

variantsRouter.delete(
  "/:id",
  authenticate,
  deleteVariant
);

// Read route (public)
variantsRouter.get("/:id", getVariantById);

export default variantsRouter;
