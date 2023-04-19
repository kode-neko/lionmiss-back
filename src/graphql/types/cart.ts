import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";
import {LMSize, LMColor} from "./enums";
import {LMProduct, LMProductInput} from "./product";
import {LMPromo, LMPromoInput} from "./promo";

const LMCartProduct: NexusObjectTypeDef<string> = objectType({
  name: "LMCartProduct",
  definition(t: ObjectDefinitionBlock<string>) {
    t.id("_id");
    t.nonNull.field("size", {type: LMSize});
    t.nonNull.field("color", {type: LMColor});
    t.nonNull.int("unds");
    t.nonNull.field("product", {type: LMProduct});
  },
});

const LMCart: NexusObjectTypeDef<string> = objectType({
  name: "LMCart",
  definition(t: ObjectDefinitionBlock<string>) {
    t.id("_id");
    t.nonNull.list.field("products", {type: LMCartProduct});
    t.nonNull.field("products", {type: LMPromo});
    t.nonNull.float("taxes");
  },
});

const LMCartProductInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMCartProductInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nullable.id("_id");
    t.nonNull.field("size", {type: LMSize});
    t.nonNull.field("color", {type: LMColor});
    t.nonNull.int("unds");
    t.nonNull.field("product", {type: LMProductInput});
  },
});

const LMCartInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMCartInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nullable.id("_id");
    t.nonNull.list.field("products", {type: LMCartProductInput});
    t.nonNull.field("products", {type: LMPromoInput});
    t.nonNull.float("taxes");
  },
});

const LMCartUserInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMCartUserInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("username");
    t.nonNull.field("cart", {type: LMCartInput});
  },
});

const LMCartProductUserInput: NexusInputObjectTypeDef<string> = inputObjectType(
  {
    name: "LMCartProductUserInput",
    definition(t: InputDefinitionBlock<string>) {
      t.nonNull.string("username");
      t.nonNull.field("cartProduct", {type: LMCartProductInput});
    },
  }
);

export {
  LMCartProduct,
  LMCart,
  LMCartProductInput,
  LMCartInput,
  LMCartUserInput,
  LMCartProductUserInput
};
