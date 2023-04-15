import { enumType } from "nexus";
import { NexusEnumTypeDef } from "nexus/dist/core.js";

const LMColor: NexusEnumTypeDef<"LMColor"> = enumType({
  name: 'LMColor',
  members: [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Aqua',
    'Blue',
    'Purple',
    'Pink',
    'White',
    'Black'
  ]
});

const LMSize: NexusEnumTypeDef<"LMSize"> = enumType({
  name: 'LMSize',
  members: [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
  ]
});

export {
  LMColor,
  LMSize
}