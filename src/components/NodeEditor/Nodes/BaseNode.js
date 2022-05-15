import { Node } from "@baklavajs/core";

export class BaseNode extends Node {
  constructor() {
    super();

    this.type = "BaseNode";
    this.name = "Base";
    this.addInputInterface("Input", "Input", "---");
    this.addOutputInterface("Output");
  }
}
