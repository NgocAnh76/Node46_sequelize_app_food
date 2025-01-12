import express from "express";
import restaurantController from "../controllers/likeAndUnlike.controller.js";

const restaurantRouter = express.Router();
restaurantRouter.post("/like-unlike", restaurantController.likeAndUnlikeList);
restaurantRouter.get(
  "/getLikeRestaurant/:res_id",
  restaurantController.getListRestaurant
);
restaurantRouter.post("/addRated", restaurantController.addRateController);
restaurantRouter.get(
  "/getRated/:res_id",
  restaurantController.getListRateController
);

export default restaurantRouter;
