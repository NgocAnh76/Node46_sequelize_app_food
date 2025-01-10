import express from "express";
import likeRouter from "./like.router.js";

const rootRouter = express.Router();

rootRouter.get("/", (req, ses, next) => {
  res.json(`ok`);
});

rootRouter.use("/like", likeRouter);

export default rootRouter;
