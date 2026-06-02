import { Router } from "express";
import brandsRouter from "./brands.routes.js";
import categoriesRouter from "./categories.routes.js";
import productsRouter from "./products.routes.js";
import variantsRouter from "./variants.routes.js";
import reviewsRouter from "./reviews.routes.js";
import cartRouter from "./cart.routes.js";
const marketplaceRouter = Router();
// Register sub-routers
marketplaceRouter.use("/brands", brandsRouter);
marketplaceRouter.use("/categories", categoriesRouter);
marketplaceRouter.use("/products", productsRouter);
marketplaceRouter.use("/variants", variantsRouter);
marketplaceRouter.use("/reviews", reviewsRouter);
marketplaceRouter.use("/cart", cartRouter);
export default marketplaceRouter;
//# sourceMappingURL=index.js.map