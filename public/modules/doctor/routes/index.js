import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { registerDoctor, getDoctorById, updateDoctor, getDoctorsByLocation } from "../controllers/doctor.controller.js";
import { createDoctorReview, getDoctorReviews, getReviewByAppointmentId } from "../controllers/review.controller.js";
const doctorRouter = Router();
doctorRouter.post("/register", authenticate, multerUpload.single("qualificationDoc"), registerDoctor);
doctorRouter.post("/reviews", authenticate, createDoctorReview);
doctorRouter.get("/reviews/appointment/:appointmentId", authenticate, getReviewByAppointmentId);
doctorRouter.get("/location", getDoctorsByLocation);
doctorRouter.get("/:id/reviews", getDoctorReviews);
doctorRouter.get("/:id", getDoctorById);
doctorRouter.put("/:id", authenticate, multerUpload.single("qualificationDoc"), updateDoctor);
export default doctorRouter;
//# sourceMappingURL=index.js.map