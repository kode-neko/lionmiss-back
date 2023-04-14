import { objectType, inputObjectType } from "nexus";

const LMAdress = objectType({
  name: 'LMAdress',
  definition(t) {
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

const LMAdressInput = inputObjectType({
  name: 'InputLMAdress',
  definition(t) {
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