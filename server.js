import express from "express";
import rootRouter from "./routers/root.router.js";
import { handleError } from "./common/helpers/error.helper.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Node.js Server!");
});

app.use(express.json());
app.use(rootRouter);
app.use(handleError);

app.listen(3069, () => {
  console.log(`Server online at port 3069`);
});
