import {
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  objectType,
} from "nexus/dist/core";

const LMLocale: NexusObjectTypeDef<string> = objectType({
  name: "LMLocale",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("name");
  },
});

export {LMLocale};
