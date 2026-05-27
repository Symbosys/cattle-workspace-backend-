import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import {
  createAnimalListing,
  updateAnimalListing,
  getListedAnimalsByLocation,
  getAnimalListingById,
} from "../controller/animal-listing.controller.js";

const animalListingRouter = Router();

animalListingRouter.get("/location", getListedAnimalsByLocation);
animalListingRouter.get("/:id", getAnimalListingById);
animalListingRouter.post(
  "/",
  authenticate,
  multerUpload.array("images"),
  createAnimalListing,
);
animalListingRouter.put(
  "/:id",
  authenticate,
  multerUpload.array("images"),
  updateAnimalListing,
);

export default animalListingRouter;
