import { InputDefinitionBlock, NexusInputObjectTypeDef, NexusObjectTypeDef, ObjectDefinitionBlock } from "nexus/dist/core.js";
import pkg from "nexus/dist/core.js";
const { inputObjectType, objectType } = pkg;


const LMCreditCard: NexusObjectTypeDef<string> = objectType({
  name: 'LMCreditCard',
  definition(t: ObjectDefinitionBlock<string>) {
    t.id('_id')
    t.nonNull.int('creditNumber'),
    t.nonNull.string('fullName'),
    t.nonNull.int('month'),
    t.nonNull.int('year'),
    t.nonNull.int('cvv')
  }
});

const LMCreditCardInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMCreditCardInput',
  definition(t: InputDefinitionBlock<string>) {
    t.id('_id')
    t.nonNull.int('creditNumber'),
    t.nonNull.string('fullName'),
    t.nonNull.int('month'),
    t.nonNull.int('year'),
    t.nonNull.int('cvv')
  }
});

export {
  LMCreditCard,
  LMCreditCardInput
}