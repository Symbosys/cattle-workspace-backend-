import { Router } from "express";
import animalCategoryRouter from "./animal-category.routes.js";
import animalListingRouter from "./animal-listing.routes.js";
const animalRouter = Router();
animalRouter.use("/", animalCategoryRouter);
animalRouter.use("/listing", animalListingRouter);
export default animalRouter;
//# sourceMappingURL=index.js.map