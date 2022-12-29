import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from express
let helloRouter = express.Router();

// GET -> http://localhost:8000/api/hello?name=Sabrina/
helloRouter.route("/").get(async (req: Request, res: Response) => {
  // Gets a query param
  let name: any = req?.query?.name;
  LogInfo(`Query Param: ${name}`);

  //Controller instance to execute method
  const controller: HelloController = new HelloController();

  // get response
  const response = await controller.getMEssage(name);

  // send response to client
  return res.send(response);
});

export default helloRouter;
