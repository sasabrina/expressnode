import dotenv from "dotenv";
import server from "./src/server";
import { LogError, LogSuccess } from "./src/utils/logger";

// Config the .env file
dotenv.config();

const port = process.env.PORT || 8000;

server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running at http://localhost:${port}/api`);
});

server.on("error", (error) => {
  LogError(`[SERVER ERROR]: ${error}`);
});
