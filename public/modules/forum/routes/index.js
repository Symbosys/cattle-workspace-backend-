import { Router } from "express";
import questionRouter from "./question.routes.js";
import answerRouter from "./answer.routes.js";
import commentRouter from "./comment.routes.js";
const forumRouter = Router();
// Question CRUD: /api/v1/forum/questions/*
forumRouter.use("/questions", questionRouter);
// Answer CRUD: /api/v1/forum/questions/:questionId/answers/*
forumRouter.use("/questions", answerRouter);
// Comment CRUD: /api/v1/forum/questions/:qId/comments/* & /api/v1/forum/answers/:aId/comments/*
forumRouter.use("/", commentRouter);
export default forumRouter;
//# sourceMappingURL=index.js.map