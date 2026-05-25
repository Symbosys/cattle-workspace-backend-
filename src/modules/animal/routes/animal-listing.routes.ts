import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { createAnimalListing, updateAnimalListing } from "../controller/animal-listing.controller.js";

const animalListingRouter = Router();

animalListingRouter.post("/", authenticate, multerUpload.array("images"), createAnimalListing);
animalListingRouter.put("/:id", authenticate, multerUpload.array("images"), updateAnimalListing);

export default animalListingRouter;
