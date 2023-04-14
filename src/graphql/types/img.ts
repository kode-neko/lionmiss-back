import { inputObjectType, objectType } from "nexus";

const LMImg = objectType({
  name: 'LMImg',
  definition(t){
    t.id('_id')
    t.nonNull.string('src')
    t.string('title')
    t.string('alt')
    t.boolean('main')
  }
})

const LMImgInput = inputObjectType({
  name: 'LMImgInput',
  definition(t){
    t.nullable.id('_id')
    t.nonNull.string('src')
    t.string('title')
    t.string('alt')
    t.boolean('main')
  }
})

export {
  LMImg,
  LMImgInput,
}