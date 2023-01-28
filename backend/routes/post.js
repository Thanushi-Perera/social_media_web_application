import express, { Router } from "express";
import { Post } from "../models/post.js";

const router = express.Router();

router.post("/add", (req, res) => {
  const addPost = new Post({
    title: req.body.title,
    url: req.body.url,
    count: req.body.count,
  });
  addPost.save((error, doc) => {
    if (error) {
      res.send(`error in submitting`);
    } else {
      res.sendStatus(200);
      res.send("submitted");
    }
  });
});

router.get("/all", (req, res) => {
  Post.find((error, doc) => {
    if (error) {
      res.send("no data fetched");
    } else {
      res.json(doc);
    }
  });
});

export default router;
