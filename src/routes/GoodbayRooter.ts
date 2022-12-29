import express, { Request, Response } from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { LogInfo } from "../utils/logger";

// Router from express
let goodbyeRouter = express.Router();

// GET -> http://localhost:8000/api/goodbye?name=Sabrina/
goodbyeRouter.route("/").get(async (req: Request, res: Response) => {
  // Gets a query param
  let name: any = req?.query?.name;

  const date = new Date();
  const formatDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  LogInfo(`Query Param: ${name}`);

  //Controller instance to execute method
  const controller: GoodbyeController = new GoodbyeController();

  // get response
  const response = await controller.getMEssage(formatDate, name);

  // send response to client
  return res.send(response);
});

export default goodbyeRouter;
