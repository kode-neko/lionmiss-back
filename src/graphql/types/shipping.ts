import {LMCart, LMCartInput} from "./cart";
import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";

const LMShipping: NexusObjectTypeDef<string> = objectType({
  name: "LMShipping",
  definition(t: ObjectDefinitionBlock<string>) {
    t.id("_id");
    t.nonNull.string("initDate"),
      t.nonNull.string("finishDate"),
      t.nonNull.string("priceShipping"),
      t.nonNull.string("shippingMethod"),
      t.nonNull.string("paymentMethod"),
      t.nonNull.list.field("cart", {
        type: LMCart,
      });
  },
});

const LMShippingInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMShippingInput",
  definition(t: InputDefinitionBlock<string>) {
    t.id("_id");
    t.nonNull.string("initDate"),
      t.nonNull.string("finishDate"),
      t.nonNull.string("priceShipping"),
      t.nonNull.string("shippingMethod"),
      t.nonNull.string("paymentMethod"),
      t.nonNull.list.field("cart", {
        type: LMCartInput,
      });
  },
});

export {
  LMShipping,
  LMShippingInput
};
