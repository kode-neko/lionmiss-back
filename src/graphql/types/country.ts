import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";

const LMCountry: NexusObjectTypeDef<string> = objectType({
  name: "LMCountry",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("name"),
      t.nonNull.string("nameCode"),
      t.nonNull.string("currency"),
      t.nonNull.string("currencyName");
  },
});

const LMCountryInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMCountryInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("name"),
      t.nonNull.string("nameCode"),
      t.nonNull.string("currency"),
      t.nonNull.string("currencyName");
  },
});

export {LMCountry, LMCountryInput};
