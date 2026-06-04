import { Router } from "express";
import { authenticate, authorizeRole, } from "../../user/middlewares/auth.middleware.js";
import { createReport, listReports, getPendingCount, getReport, reviewReport, } from "../controllers/report.controller.js";
const reportRouter = Router();
// User endpoints
reportRouter.post("/reports", authenticate, createReport);
// Admin-only endpoints
reportRouter.get("/reports", authenticate, authorizeRole("ADMIN"), listReports);
reportRouter.get("/reports/pending-count", authenticate, authorizeRole("ADMIN"), getPendingCount);
reportRouter.get("/reports/:id", authenticate, authorizeRole("ADMIN"), getReport);
reportRouter.patch("/reports/:id", authenticate, authorizeRole("ADMIN"), reviewReport);
export default reportRouter;
//# sourceMappingURL=report.routes.js.map