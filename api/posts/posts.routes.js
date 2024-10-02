const express = require("express");
const {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} = require("./posts.controllers");
const upload = require("../../multer");
const postRouter = express.Router();

postRouter.get("/posts", getPosts);
postRouter.post("/post", upload.single("image"), createPost);

postRouter.delete("/post/:postId", deletePost);

postRouter.put("/post/:postId", updatePost);

module.exports = postRouter;
