import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import multerUpload from "../../../middlewares/multer.middleware.js";
import { 
  registerDoctor,
  getDoctorById,
  updateDoctor,
  getDoctorsByLocation
} from "../controllers/doctor.controller.js";

const doctorRouter = Router();

doctorRouter.post(
  "/register",
  authenticate,
  multerUpload.single("qualificationDoc"),
  registerDoctor
);

doctorRouter.get(
  "/location",
  getDoctorsByLocation
);

doctorRouter.get(
  "/:id",
  getDoctorById
);


doctorRouter.put(
  "/:id",
  authenticate,
  multerUpload.single("qualificationDoc"),
  updateDoctor
);

export default doctorRouter;
