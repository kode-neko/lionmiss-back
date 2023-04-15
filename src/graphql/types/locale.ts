import { NexusExtendTypeDef, NexusObjectTypeDef, ObjectDefinitionBlock } from "nexus/dist/core.js";
import { builderLocale } from "../../model/utils/builderLocale.js";
import { ILocale } from "../../model/ILocale.js";
import pkg from "nexus/dist/core.js";
const { extendType, objectType } = pkg;

const LMLocale: NexusObjectTypeDef<string> = objectType({
  name: 'LMLocale',
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string('name')
  }
});

const lcoaleModel: ILocale = builderLocale();

const LMLocaleQueryList: NexusExtendTypeDef<'Query'> = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field('LMLocaleQueryList', {
      type: 'LMLocale',
      resolve: async () => {
        return await lcoaleModel.getLocaleAll()
      }
    })
  }
})

export {
  LMLocale,
  LMLocaleQueryList
}