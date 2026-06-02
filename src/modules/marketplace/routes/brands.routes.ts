import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { registerBrand, getBrandsByLocation, getBrandById, updateBrand } from "../controllers/brands.controller.js";

const brandsRouter = Router();

brandsRouter.post(
  "/register",
  authenticate,
  multerUpload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  registerBrand
);

brandsRouter.get(
  "/",
  getBrandsByLocation
);

brandsRouter.get(
  "/:id",
  getBrandById
);

brandsRouter.put(
  "/:id",
  authenticate,
  multerUpload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  updateBrand
);

export default brandsRouter;
