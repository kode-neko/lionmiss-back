import {idArg} from "nexus";
import {builderProduct} from "../../model/utils/builderProduct";
import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
} from "nexus/dist/core";
import {IProduct} from "../../model/IProduct";
import { LMProduct, LMProductInput } from "../types";

const productModel: IProduct = builderProduct();

const LMProductMutationPost: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMProductMutationPost", {
      type: LMProduct,
      args: {
        product: LMProductInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return productModel.postProduct(args.product);
      },
    });
  },
});

const LMProductMutationPut: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMProductMutationPut", {
      type: "Boolean",
      args: {
        id: idArg(),
        product: LMProductInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {id, product} = args;
        return productModel.updateProduct({_id: id, ...product});
      },
    });
  },
});

const LMProductMutationDelete: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMProductMutationDelete", {
      type: "Boolean",
      args: {
        id: idArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return productModel.deleteProduct(args.id);
      },
    });
  },
});

export {
  LMProductMutationPost,
  LMProductMutationPut,
  LMProductMutationDelete
}