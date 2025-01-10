import express from "express";
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router();
likeRouter.get("/like-list", likeController.likeList);

export default likeRouter;
