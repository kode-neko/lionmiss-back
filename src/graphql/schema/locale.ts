import {
  NexusExtendTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
} from "nexus/dist/core";
import {builderLocale} from "../../model/utils/builderLocale";
import {ILocale} from "../../model/ILocale";
import pkg from "nexus/dist/core";
const {extendType, objectType} = pkg;

const LMLocale: NexusObjectTypeDef<string> = objectType({
  name: "LMLocale",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("name");
  },
});

const lcoaleModel: ILocale = builderLocale();

const LMLocaleQueryList: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field("LMLocaleQueryList", {
      type: "LMLocale",
      resolve: async () => {
        return await lcoaleModel.getLocaleAll();
      },
    });
  },
});

export {LMLocale, LMLocaleQueryList};
