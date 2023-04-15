import pkg from "nexus";
import { InputDefinitionBlock, NexusInputObjectTypeDef, NexusObjectTypeDef, ObjectDefinitionBlock } from "nexus/dist/core.js";
const { inputObjectType, objectType } = pkg;

const LMAdress: NexusObjectTypeDef<string> = objectType({
  name: 'LMAdress',
  definition(t: ObjectDefinitionBlock<string>) {
    t.id('_id', {})
    t.nonNull.string('name', {})
    t.nonNull.string('adress', {})
    t.nonNull.string('country', {})
    t.nonNull.string('state', {})
    t.nonNull.string('town', {})
    t.nonNull.string('zip', {})
    t.nonNull.string('phone', {})
    t.nonNull.string('mail', {})
    t.nonNull.string('comments', {})
    t.nonNull.boolean('main', {})
  }
});

const LMAdressInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMAdressInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nullable.id('_id', {})
    t.nonNull.string('name', {})
    t.nonNull.string('adress', {})
    t.nonNull.string('country', {})
    t.nonNull.string('state', {})
    t.nonNull.string('town', {})
    t.nonNull.string('zip', {})
    t.nonNull.string('phone', {})
    t.nonNull.string('mail', {})
    t.nonNull.string('comments', {})
    t.nonNull.boolean('main', {})
  }
});

export {
  LMAdress,
  LMAdressInput
}