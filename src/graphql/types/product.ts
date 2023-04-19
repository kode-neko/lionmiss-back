import {LMImg, LMImgInput} from "./img";
import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";

const LMProductProps: NexusObjectTypeDef<string> = objectType({
  name: "LMProductProps",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("key");
    t.nonNull.string("value");
  },
});

const LMProductPropsInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMProductPropsInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("key");
    t.nonNull.string("value");
  },
});

const LMProduct: NexusObjectTypeDef<string> = objectType({
  name: "LMProduct",
  definition(t: ObjectDefinitionBlock<string>) {
    t.id("_id");
    t.nonNull.string("name"),
      t.nonNull.float("price"),
      t.nonNull.string("description"),
      t.nonNull.list.field("details", {
        type: LMProductProps,
      }),
      t.nonNull.string("colors"),
      t.nonNull.int("unds"),
      t.nonNull.list.field("imgs", {
        type: LMImg,
      });
  },
});

const LMProductInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMProductInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("name"),
      t.nonNull.float("price"),
      t.nonNull.string("description"),
      t.nonNull.list.field("details", {
        type: LMProductPropsInput,
      }),
      t.nonNull.string("colors"),
      t.nonNull.int("unds"),
      t.nonNull.list.field("imgs", {
        type: LMImgInput,
      });
  },
});

export {
  LMProductProps,
  LMProductPropsInput,
  LMProduct,
  LMProductInput
};
