import {enumType} from "nexus";
import {
  InputDefinitionBlock,
  NexusEnumTypeDef,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";

const LMPromoType: NexusEnumTypeDef<"LMPromoType"> = enumType({
  name: "LMPromoType",
  members: ["Percent", "Qty"],
});

const LMPromo: NexusObjectTypeDef<string> = objectType({
  name: "LMPromo",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.field("type", {type: LMPromoType});
    t.nonNull.float("qty");
  },
});

const LMPromoInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMPromoInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.field("type", {type: LMPromoType});
    t.nonNull.float("qty");
  },
});

export {LMPromoType, LMPromo, LMPromoInput};
