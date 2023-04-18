import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
} from "nexus/dist/core";
import {LMSize} from "./enums";
import pkg from "nexus/dist/core";
const {inputObjectType, objectType} = pkg;

const LMMeasures: NexusObjectTypeDef<string> = objectType({
  name: "LMMeasures",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.int("chest"),
      t.nonNull.int("waist"),
      t.nonNull.int("hip"),
      t.nonNull.field("size", {type: LMSize});
  },
});

const LMMeasuresInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMMeasuresInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.int("chest"),
      t.nonNull.int("waist"),
      t.nonNull.int("hip"),
      t.nonNull.field("size", {type: LMSize});
  },
});

export {LMMeasures, LMMeasuresInput};
