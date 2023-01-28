import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    required: true,
    type: String,
  },
  userName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
    minLength: 6
  },
  img: {
    type: String,
  },
});

export const User = mongoose.model("users", UserSchema);
