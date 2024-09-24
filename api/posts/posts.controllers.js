const PostSchema = require("../../models/PostSchema");
const Post = require("../../models/PostSchema");
let posts = require("../../models/PostsSchema");

const createPost = async (req, res, next) => {
  try {
    const id = posts[posts.lenght - 1].id + 1;
    const postInfo = req.body;
    console.log(req.file);
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newPost = await PostSchema.create(postInfo);
    return res.status(201).json({ data: newPost });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const deletedPost = await PostSchema.findByIdAndDelete(postId);
    return res.status(200).json({ data: deletedPost });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const updatedPost = await PostSchema.findByIdAndUpdate(postId, req.body);

    const updatedPost2 = await PostSchema.findById(postId);
    if (!updatePosts) {
      return res.status(404).json({ error: "Post doesn't exists" });
    }
    return res.status(200).json({ data: updatedPost2 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPosts = async (req, res, next) => {
  try {
    const posts = await PostSchema.find();
    res.status(200).json({ data: posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createPost,
  deletePost,
  updatePost,
  getPosts,
};
