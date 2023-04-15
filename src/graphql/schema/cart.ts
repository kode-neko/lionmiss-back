import { ArgsValue, InputDefinitionBlock, NexusExtendTypeDef, NexusInputObjectTypeDef, NexusObjectTypeDef, ObjectDefinitionBlock, SourceValue } from "nexus/dist/core.js";
import pkg from "nexus/dist/core.js";
const { inputObjectType, extendType, objectType, stringArg } = pkg;
import { LMSize, LMColor } from "./enums.js";
import { LMProduct, LMProductInput } from "./product.js";
import { builderCart } from "../../model/utils/builderCart.js";
import { ICart } from "../../model/ICart.js";
import { LMPromo, LMPromoInput } from "./promo.js";

const LMCartProduct: NexusObjectTypeDef<string> = objectType({
  name: 'LMCartProduct',
  definition(t: ObjectDefinitionBlock<string>) {
    t.id('_id')
    t.nonNull.field('size', {type: LMSize})
    t.nonNull.field('color', {type: LMColor})
    t.nonNull.int('unds')
    t.nonNull.field('product', {type: LMProduct})
  }
});

const LMCart: NexusObjectTypeDef<string> = objectType({
  name: 'LMCart',
  definition(t: ObjectDefinitionBlock<string>) {
    t.id('_id')
    t.nonNull.list.field('products', {type: LMCartProduct})
    t.nonNull.field('products', {type: LMPromo})
    t.nonNull.float('taxes')
  }
});

const LMCartProductInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMCartProductInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nullable.id('_id')
    t.nonNull.field('size', {type: LMSize})
    t.nonNull.field('color', {type: LMColor})
    t.nonNull.int('unds')
    t.nonNull.field('product', {type: LMProductInput})
  }
});

const LMCartInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMCartInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nullable.id('_id')
    t.nonNull.list.field('products', {type: LMCartProductInput})
    t.nonNull.field('products', {type: LMPromoInput})
    t.nonNull.float('taxes')
  }
});

const LMCartUserInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMCartUserInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string('username')
    t.nonNull.field('cart', {type: LMCartInput})
  }
});

const LMCartProductUserInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMCartProductUserInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string('username')
    t.nonNull.field('cartProduct', {type: LMCartProductInput})
  }
});

const cartModel: ICart = builderCart();

const LMCartQuery: NexusExtendTypeDef<'Query'> = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMCartQuery', {
      type: LMProduct,
      args: {
        username: stringArg()
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return await cartModel.getCart(args.username);
      }
    })
  }
})

const LMCartMutationPost: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMCartMutationPost', {
      type: LMProduct,
      args: {
        cartUserInput: LMCartUserInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const {cartUserInput: {username, cart}} = args;
        return cartModel.postCart(username, cart);
      }
    })
  }
})

const LMCartMutationPut: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMCartMutationPut', {
      type: "Boolean",
      args: {
        cartUserInput: LMCartUserInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const {cartUserInput: {username, cart}} = args;
        return cartModel.updateCart(username, cart);
      }
    })
  }
})

const LMCartMutationDelete: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMCartMutationDelete', {
      type: "Boolean",
      args: {
        username: stringArg()
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return cartModel.deleteCart(args.username);
      }
    })
  }
})

const LMCartProductMutationPost: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMCartProductMutationPost', {
      type: LMProduct,
      args: {
        cartProductUserInput: LMCartProductUserInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const {cartProductUserInput: {username, cartProduct}} = args;
        return cartModel.postProductCart(username, cartProduct);
      }
    })
  }
})

const LMCartProductMutationPut: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMCartProductMutationPut', {
      type: "Boolean",
      args: {
        cartProductUserInput: LMCartProductUserInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const {cartProductUserInput: {username, cartProduct}} = args;
        return cartModel.updateProductCart(username, cartProduct);
      }
    })
  }
})

const LMCartProductMutationDelete: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMCartProductMutationDelete', {
      type: "Boolean",
      args: {
        username: stringArg(),
        idProduct: stringArg()
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const {username, idProduct} = args;
        return cartModel.deleteProductCart(username, idProduct);
      }
    })
  }
})

export {
  LMCartProduct,
  LMCart,
  LMCartProductInput,
  LMCartInput,
  LMCartUserInput,
  LMCartQuery,
  LMCartMutationPost,
  LMCartMutationPut,
  LMCartMutationDelete,
  LMCartProductMutationPost,
  LMCartProductMutationPut,
  LMCartProductMutationDelete
}