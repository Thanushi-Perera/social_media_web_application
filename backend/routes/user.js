import express, { Router } from "express";

import { addUser, updateUser, deleteUser, getSingleUser,getAllUsers} from "../controllers/userController.js";

const router = express.Router();

import {verifyAdmin, verifyUser} from '../utils/verifyToken.js'

router.post("/add", addUser);

router.put("/:id",verifyUser, updateUser);

router.delete("/add",verifyUser, deleteUser);

router.get("/id",verifyUser, getSingleUser);

router.get("/",verifyAdmin, getAllUsers);


export default router;
