import { Router } from "express";
import questionRouter from "./question.routes.js";
import answerRouter from "./answer.routes.js";
import commentRouter from "./comment.routes.js";
import voteRouter from "./vote.routes.js";
import bookmarkRouter from "./bookmark.routes.js";
import reportRouter from "./report.routes.js";
const forumRouter = Router();
// Question CRUD: /api/v1/forum/questions/*
forumRouter.use("/questions", questionRouter);
// Answer CRUD: /api/v1/forum/questions/:questionId/answers/*
forumRouter.use("/questions", answerRouter);
// Comment CRUD: /api/v1/forum/questions/:qId/comments/* & /api/v1/forum/answers/:aId/comments/*
forumRouter.use("/", commentRouter);
// Vote: /api/v1/forum/votes/*
forumRouter.use("/", voteRouter);
// Bookmark: /api/v1/forum/bookmarks/*
forumRouter.use("/", bookmarkRouter);
// Report: /api/v1/forum/reports/*
forumRouter.use("/", reportRouter);
export default forumRouter;
//# sourceMappingURL=index.js.map