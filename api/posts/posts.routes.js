const express = require("express");
const {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} = require("./posts.controllers");
const upload = require("../../middleware/multer");
const postrouter = express.Router();

postrouter.get("/posts", getPosts);
postrouter.post("/post", upload.single("image"), createPost);

postrouter.delete("/post/:postId", deletePost);

postrouter.put("/post/:postId", updatePost);

module.exports = postrouter;
