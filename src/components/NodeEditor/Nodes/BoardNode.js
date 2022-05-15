import mondaySdk from "monday-sdk-js";
import { Node } from "@baklavajs/core";

export class BoardNode extends Node {
  constructor() {
    super();

    this.type = "BoardNode";
    
    let board = "Test";
    
    this.monday = mondaySdk();
    
    this.addOption("InputCount", "NumberOption", 1);
    
    this.addInputInterface(`Data In 1`);
    this.addOutputInterface("Data Out");

    this.name = `${board}`;
  }

  addInput() {
    let inputCount = this.getOptionValue("InputCount");
    this.addInputInterface(`Data Input ${inputCount}`);
  }

  calculate() {
    let cachedCount = 1;
    let inputCount = this.getOptionValue("InputCount");
    console.log("Calculate");
    if ( inputCount > cachedCount ) {
      cachedCount++;
      this.addInput();
    }
  }
}

