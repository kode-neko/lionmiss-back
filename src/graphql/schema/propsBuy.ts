import { InputDefinitionBlock, NexusInputObjectTypeDef, NexusObjectTypeDef, ObjectDefinitionBlock } from "nexus/dist/core.js";
import { LMColor, LMSize } from "./enums.js";
import pkg from "nexus/dist/core.js";
const { inputObjectType, objectType } = pkg;

const LMPropsBuy: NexusObjectTypeDef<string> = objectType({
  name: 'LMPropsBuy',
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string('productId'),
    t.nonNull.field('color', {type: LMColor}),
    t.nonNull.field('size', {type: LMSize}),
    t.nonNull.int('qty')
  }
});

const LMPropsBuyInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMPropsBuyInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string('productId'),
    t.nonNull.field('color', {type: LMColor}),
    t.nonNull.field('size', {type: LMSize}),
    t.nonNull.int('qty')
  }
});

export {
  LMPropsBuy,
  LMPropsBuyInput
}