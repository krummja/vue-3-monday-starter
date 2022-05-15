import mondaySdk from "monday-sdk-js";
import { Node } from "@baklavajs/core";

export class QueryNode extends Node {
  constructor() {
    super();

    this.type = "QueryNode";
    this.name = "Query";

    this.addOption("Limit", "NumberOption", 1);

    this.monday = mondaySdk();
    this.boards = [];

    this.addOutputInterface("Board");

    this.getBoards();
  }

  async getBoards() {

    // TODO Use a try/catch here
    const limit = this.getOptionValue("Limit")
    console.log(limit);
    // const query = `query { board (limit: ${limit}) { name } }`
    // const res = await this.monday.api(query);
    // console.log(res);

  }
}
