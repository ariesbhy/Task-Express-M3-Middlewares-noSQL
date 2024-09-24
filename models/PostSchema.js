const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  body: { type: String },
  image: { type: String },
});

module.exports = model("Post", PostSchema);
