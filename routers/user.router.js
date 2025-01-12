import express from "express";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/getLikeUser/:users_id", userController.getListLikeUser);
userRouter.get("/getRated/:users_id", userController.getRatedUser);
userRouter.post("/oder", userController.oderController);

export default userRouter;
