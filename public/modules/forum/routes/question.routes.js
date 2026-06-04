import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import { createQuestion, getQuestion, listQuestions, updateQuestion, deleteQuestion, } from "../controllers/question.controller.js";
const questionRouter = Router();
// Public routes
questionRouter.get("/", listQuestions);
questionRouter.get("/:slug", getQuestion);
// Protected routes (authentication required)
questionRouter.post("/", authenticate, createQuestion);
questionRouter.put("/:id", authenticate, updateQuestion);
questionRouter.delete("/:id", authenticate, deleteQuestion);
export default questionRouter;
//# sourceMappingURL=question.routes.js.map