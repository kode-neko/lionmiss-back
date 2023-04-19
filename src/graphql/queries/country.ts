import {
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  extendType,
} from "nexus/dist/core";
import {builderCountry} from "../../model/utils/builderCountry";
import {ICountry} from "../../model/ICountry";

const countryModel: ICountry = builderCountry();

const LMCountryQueryList: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field("LMCountryQueryList", {
      type: "LMCountry",
      resolve: async () => {
        return countryModel.getCountryAll();
      },
    });
  },
});

export {
  LMCountryQueryList
}