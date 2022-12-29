/**
 * Root router
 * redirects to routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import goodbyeRouter from "./GoodbayRooter";
import { LogInfo } from "../utils/logger";

let server = express();
let rootRouter = express.Router();

rootRouter.get("/", (req: Request, res: Response) => {
  LogInfo("GET: http:/localhost:8000/api");
  // send hello world
  res.send("Welcome to APP Express + TS + Nodemon");
});

// Redirections to routers and controllers
server.use("/", rootRouter);
server.use("/hello", helloRouter);
server.use("/goodbye", goodbyeRouter);

export default server;
