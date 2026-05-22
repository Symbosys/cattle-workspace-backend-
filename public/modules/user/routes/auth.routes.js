import { Router } from "express";
import { sendOtp, verifyOtp } from "../controller/auth.controller.js";
const authRouter = Router();
authRouter.post("/send-otp", sendOtp);
authRouter.post("/generate-otp", sendOtp);
authRouter.post("/verify-otp", verifyOtp);
export default authRouter;
//# sourceMappingURL=auth.routes.js.map