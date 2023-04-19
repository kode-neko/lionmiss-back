import {
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  extendType,
} from "nexus/dist/core";
import {builderLocale} from "../../model/utils/builderLocale";
import {ILocale} from "../../model/ILocale";

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

export {
  LMLocaleQueryList
}