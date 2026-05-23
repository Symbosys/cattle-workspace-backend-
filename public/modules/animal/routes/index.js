import { Router } from "express";
import animalCategoryRouter from "./animal-category.routes.js";
const animalRouter = Router();
animalRouter.use("/", animalCategoryRouter);
export default animalRouter;
//# sourceMappingURL=index.js.map