import {InputDefinitionBlock, NexusInputObjectTypeDef, inputObjectType} from "nexus/dist/core";

const LMParamsInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMParams",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("key"), t.nonNull.string("value");
  },
});

const LMListParamsInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMParamsInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.list.field("params", {type: LMParamsInput});
  },
});

export {LMParamsInput, LMListParamsInput};
