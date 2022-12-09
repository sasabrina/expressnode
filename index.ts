import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const http = require("http");
const url = require("url");

// Config the .env file
dotenv.config();

// create express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// define Route
app.get("/", (req: Request, res: Response) => {
  // send hello world
  res.send("Welcome to APP Express + TS + Nodemon");
});

// define Route
app.get("/hello", (req: Request, res: Response) => {
  // send hello and name passed by url

  const queryObject = url.parse(req.url, true).query;
  const queryName = queryObject.name ? queryObject.name : "Anónimo";
  res.status(200).json({ data: { message: `Hola, ${queryName}` } });
});

app.get("/bye", (req: Request, res: Response) => {
  // send data json
  res.status(200).json({ data: { message: "Goodbye, world" } });
});

// execute app and listen port
app.listen(port, () =>
  console.log(`EXPRESS SERVER: running at http://localhost:${port}`)
);
