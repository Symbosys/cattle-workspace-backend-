import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import {
  createAnswer,
  listAnswers,
  updateAnswer,
  deleteAnswer,
  acceptAnswer,
} from "../controllers/answer.controller.js";

const answerRouter = Router();

// Nested under /questions/:questionId/answers
answerRouter.get("/:questionId/answers", listAnswers);
answerRouter.post("/:questionId/answers", authenticate, createAnswer);

// Direct answer operations
answerRouter.put("/answers/:id", authenticate, updateAnswer);
answerRouter.delete("/answers/:id", authenticate, deleteAnswer);
answerRouter.patch("/answers/:id/accept", authenticate, acceptAnswer);

export default answerRouter;
