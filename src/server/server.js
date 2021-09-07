import express from "express";
import logger from "morgan";
import rootRouter from "./router/rootRouter.js";
import apiRouter from "./router/apiRouter.js";

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", rootRouter);
app.use("/api", apiRouter);
app.use("/assets", express.static("assets"));

export default app;
