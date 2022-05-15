import { mondaySdk } from "monday-sdk-js";
import { Node } from "@baklavajs/core";

export class QueryNode extends Node {
  constructor() {
    super();

    this.monday = mondaySdk();
    this.boards = [];

    this.addInputInterface("Query");
  }

  async getBoards() {
    try {
      
      const res = await this.monday.api("query { boards { name id } }");
      console.log(res);
    } catch {
      console.log("undefined");
    }
  }
}
