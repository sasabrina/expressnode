import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rootRouter from "../routes";

// TODO: HTTPS

// create express app
const server: Express = express();

// http://localhost:8000/api
server.use("/api", rootRouter);

//TODO: Mongoose connection

// Security config
server.use(helmet());
server.use(cors());

//content type config
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

// http://localhost:8000 -> http://localhost:8000/api
server.get("/", (req: Request, res: Response) => {
  res.redirect("/api");
});

export default server;
