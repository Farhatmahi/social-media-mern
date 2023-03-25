import express from "express";
import { getFeedPosts, getUsersPost, likePost } from "../controllers/postController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/post", verifyToken, getUsersPost);

// Update
router.patch("/:id/like", verifyToken, likePost);

export default router;
