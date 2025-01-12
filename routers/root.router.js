import express from "express";

import restaurantRouter from "./restaurant.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();

rootRouter.get("/", (req, ses, next) => {
  res.json(`ok`);
});

rootRouter.use("/user", userRouter);
rootRouter.use("/restaurant", restaurantRouter);

export default rootRouter;
