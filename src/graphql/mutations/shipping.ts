import {LMShipping, LMShippingInput} from "../types";
import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
  idArg,
} from "nexus/dist/core";
import {builderShipping} from "../../model/utils/builderShipping";
import {IShipping} from "../../model/IShipping";

const shippingModel: IShipping = builderShipping();

const LMShippingMutationPost: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMShippingMutationPost", {
      type: LMShipping,
      args: {
        product: LMShippingInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return shippingModel.postShipping(args.product);
      },
    });
  },
});

const LMShippingMutationPut: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMShippingMutationPut", {
      type: "Boolean",
      args: {
        id: idArg(),
        product: LMShippingInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {id, product} = args;
        return shippingModel.updateShipping({_id: id, ...product});
      },
    });
  },
});

const LMShippingMutationDelete: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMShippingMutationDelete", {
      type: "Boolean",
      args: {
        id: idArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return shippingModel.deleteShipping(args.id);
      },
    });
  },
});

export {
  LMShippingMutationPost,
  LMShippingMutationPut,
  LMShippingMutationDelete,
};
