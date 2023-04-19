import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
  idArg,
  intArg,
} from "nexus/dist/core";
import {builderShipping} from "../../model/utils/builderShipping";
import {IShipping} from "../../model/IShipping";
import {LMListParamsInput, LMShipping} from "../types";
import {listToObjKeyVal} from "../utils";

const shippingModel: IShipping = builderShipping();

const LMShippingQuery: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMShippingQuery", {
      type: LMShipping,
      args: {
        id: idArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return await shippingModel.getShipping(args.id);
      },
    });
  },
});

const LMShippingQueryList: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field("LMShippingQueryList", {
      type: LMShipping,
      args: {
        offset: intArg(),
        limit: intArg(),
        searchList: LMListParamsInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {offset, limit, searchList} = args;
        const search: {[key: string]: string} = listToObjKeyVal(searchList);
        return await shippingModel.getShippingAll({limit, offset, search});
      },
    });
  },
});

export {
  LMShippingQuery,
  LMShippingQueryList
}