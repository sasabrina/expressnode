import { BasicResponse } from "../types";

export interface IHelloController {
  getMEssage(name?: string): Promise<BasicResponse>;
}

export interface IGoodbyeController {
  getMEssage(date: string, name?: string): Promise<BasicResponse>;
}
