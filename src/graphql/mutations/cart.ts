import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
  stringArg,
} from "nexus/dist/core";
import {builderCart} from "../../model/utils/builderCart";
import {ICart} from "../../model/ICart";
import { LMCartUserInput, LMCartProductUserInput, LMProduct } from "../types";

const cartModel: ICart = builderCart();

const LMCartMutationPost: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMCartMutationPost", {
      type: LMProduct,
      args: {
        cartUserInput: LMCartUserInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {
          cartUserInput: {username, cart},
        } = args;
        return cartModel.postCart(username, cart);
      },
    });
  },
});

const LMCartMutationPut: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMCartMutationPut", {
      type: "Boolean",
      args: {
        cartUserInput: LMCartUserInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {
          cartUserInput: {username, cart},
        } = args;
        return cartModel.updateCart(username, cart);
      },
    });
  },
});

const LMCartMutationDelete: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMCartMutationDelete", {
      type: "Boolean",
      args: {
        username: stringArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return cartModel.deleteCart(args.username);
      },
    });
  },
});

const LMCartProductMutationPost: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMCartProductMutationPost", {
      type: LMProduct,
      args: {
        cartProductUserInput: LMCartProductUserInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {
          cartProductUserInput: {username, cartProduct},
        } = args;
        return cartModel.postProductCart(username, cartProduct);
      },
    });
  },
});

const LMCartProductMutationPut: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMCartProductMutationPut", {
      type: "Boolean",
      args: {
        cartProductUserInput: LMCartProductUserInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {
          cartProductUserInput: {username, cartProduct},
        } = args;
        return cartModel.updateProductCart(username, cartProduct);
      },
    });
  },
});

const LMCartProductMutationDelete: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMCartProductMutationDelete", {
      type: "Boolean",
      args: {
        username: stringArg(),
        idProduct: stringArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {username, idProduct} = args;
        return cartModel.deleteProductCart(username, idProduct);
      },
    });
  },
});

export {
  LMCartUserInput,
  LMCartMutationPost,
  LMCartMutationPut,
  LMCartMutationDelete,
  LMCartProductMutationPost,
  LMCartProductMutationPut,
  LMCartProductMutationDelete,
};
