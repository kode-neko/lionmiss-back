import {
  InputDefinitionBlock,
  NexusExtendTypeDef,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
} from "nexus/dist/core";
import pkg from "nexus/dist/core";
const {inputObjectType, objectType, extendType} = pkg;
import {builderCountry} from "../../model/utils/builderCountry";
import {ICountry} from "../../model/ICountry";

const LMCountry: NexusObjectTypeDef<string> = objectType({
  name: "LMCountry",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("name"),
      t.nonNull.string("nameCode"),
      t.nonNull.string("currency"),
      t.nonNull.string("currencyName");
  },
});

const LMCountryInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMCountryInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("name"),
      t.nonNull.string("nameCode"),
      t.nonNull.string("currency"),
      t.nonNull.string("currencyName");
  },
});

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

export {LMCountry, LMCountryInput, LMCountryQueryList};
