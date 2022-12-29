import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class HelloController implements IHelloController {
  public async getMEssage(name?: string | undefined): Promise<BasicResponse> {
    LogSuccess("[/api/hello] Get Request");

    return {
      message: `Hello ${name || "anónimo!"}`,
    };
  }
}
