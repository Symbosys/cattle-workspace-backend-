import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { createAnimalListing } from "../controller/animal-listing.controller.js";

const animalListingRouter = Router();

animalListingRouter.post("/", authenticate, multerUpload.array("images"), createAnimalListing);

export default animalListingRouter;
