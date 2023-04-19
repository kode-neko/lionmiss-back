import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";
import {LMColor, LMSize} from "./enums";

const LMPropsBuy: NexusObjectTypeDef<string> = objectType({
  name: "LMPropsBuy",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("productId"),
      t.nonNull.field("color", {type: LMColor}),
      t.nonNull.field("size", {type: LMSize}),
      t.nonNull.int("qty");
  },
});

const LMPropsBuyInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMPropsBuyInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("productId"),
      t.nonNull.field("color", {type: LMColor}),
      t.nonNull.field("size", {type: LMSize}),
      t.nonNull.int("qty");
  },
});

export {LMPropsBuy, LMPropsBuyInput};
