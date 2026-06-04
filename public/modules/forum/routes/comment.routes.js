import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import { createQuestionComment, createAnswerComment, listQuestionComments, listAnswerComments, updateComment, deleteComment, } from "../controllers/comment.controller.js";
const commentRouter = Router();
// Comments on questions
commentRouter.get("/questions/:questionId/comments", listQuestionComments);
commentRouter.post("/questions/:questionId/comments", authenticate, createQuestionComment);
// Comments on answers
commentRouter.get("/answers/:answerId/comments", listAnswerComments);
commentRouter.post("/answers/:answerId/comments", authenticate, createAnswerComment);
// Direct comment operations
commentRouter.put("/comments/:id", authenticate, updateComment);
commentRouter.delete("/comments/:id", authenticate, deleteComment);
export default commentRouter;
//# sourceMappingURL=comment.routes.js.map