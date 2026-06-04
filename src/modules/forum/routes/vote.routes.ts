import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import { castVote, getUserVoteStatus } from "../controllers/vote.controller.js";

const voteRouter = Router();

voteRouter.post("/votes", authenticate, castVote);
voteRouter.get("/votes/status", authenticate, getUserVoteStatus);

export default voteRouter;
