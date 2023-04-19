import {builderProduct} from "../../model/utils/builderProduct";
import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
  idArg,
  intArg,
} from "nexus/dist/core";
import {IProduct} from "../../model/IProduct";
import {LMListParamsInput, LMProduct} from "../types";
import {listToObjKeyVal} from "../utils";

const productModel: IProduct = builderProduct();

const LMProductQuery: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMProductQuery", {
      type: LMProduct,
      args: {
        id: idArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return await productModel.getProduct(args.id);
      },
    });
  },
});

const LMProductQueryList: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field("LMProductQueryList", {
      type: LMProduct,
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
        return await productModel.getProductAll({limit, offset, search});
      },
    });
  },
});

export {
  LMProductQuery,
  LMProductQueryList
}