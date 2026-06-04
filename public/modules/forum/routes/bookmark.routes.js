import { Router } from "express";
import { authenticate } from "../../user/middlewares/auth.middleware.js";
import { toggleBookmark, listUserBookmarks, checkBookmarkStatus, } from "../controllers/bookmark.controller.js";
const bookmarkRouter = Router();
bookmarkRouter.post("/bookmarks", authenticate, toggleBookmark);
bookmarkRouter.get("/bookmarks", authenticate, listUserBookmarks);
bookmarkRouter.get("/bookmarks/status/:questionId", authenticate, checkBookmarkStatus);
export default bookmarkRouter;
//# sourceMappingURL=bookmark.routes.js.map