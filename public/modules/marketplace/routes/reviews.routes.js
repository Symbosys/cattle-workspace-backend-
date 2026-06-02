import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { createReview, updateReview, addSellerReply, getProductReviews, deleteReview, } from "../controllers/reviews.controller.js";
const reviewsRouter = Router();
// Write routes (protected)
reviewsRouter.post("/product/:productId", authenticate, multerUpload.array("images", 5), createReview);
reviewsRouter.put("/:id", authenticate, multerUpload.array("images", 5), updateReview);
reviewsRouter.post("/:id/reply", authenticate, addSellerReply);
reviewsRouter.delete("/:id", authenticate, deleteReview);
// Read routes (public)
reviewsRouter.get("/product/:productId", getProductReviews);
export default reviewsRouter;
//# sourceMappingURL=reviews.routes.js.map