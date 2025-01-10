import express from "express";
import restaurantController from "../controllers/likeAndUnlike.controller";

const restaurantRouter = express.Router();
restaurantRouter.post("/like-unlike", restaurantController.likeAndUnlikeList);
export default restaurantRouter;
