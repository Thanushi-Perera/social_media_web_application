import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
  count: {
    required: true,
    type: Number,
  },
});

export const Post = mongoose.model("posts", postSchema);
