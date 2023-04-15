import { InputDefinitionBlock, NexusInputObjectTypeDef } from "nexus/dist/core.js";
import pkg from "nexus/dist/core.js";
const { inputObjectType } = pkg;

const LMParamsInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMParams',
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string('key'),
    t.nonNull.string('value')
  }
})

const LMListParamsInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMParamsInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.list.field('params', {type: LMParamsInput})
  }
})

export { 
  LMParamsInput, 
  LMListParamsInput 
}