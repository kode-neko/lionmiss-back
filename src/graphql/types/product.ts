import { extendType, idArg, inputObjectType, intArg, objectType, stringArg } from "nexus";
import { builderProduct } from "../../model/utils/builderProduct.js";
import { boolean } from "joi";
import { LMImg, LMImgInput } from "./img.js";

const LMProductProps = objectType({
  name: 'LMProductProps',
  definition(t) {
    t.nonNull.string('key')
    t.nonNull.string('value')
  }
});

const LMProductPropsInput = inputObjectType({
  name: 'LMProductPropsInput',
  definition(t) {
    t.nonNull.string('key')
    t.nonNull.string('value')
  }
});

const LMProduct = objectType({
  name: 'LMProduct',
  definition(t) {
    t.id('_id')
    t.nonNull.string('name'),
    t.nonNull.string('price'),
    t.nonNull.string('description'),
    t.nonNull.list.field('details', {
      type: LMProductProps
    }),
    t.nonNull.string('colors'),
    t.nonNull.string('unds'),
    t.nonNull.list.field('imgs', {
      type: LMImg
    })
  }
});

const LMProductInput = inputObjectType({
  name: 'LMProductInput',
  definition(t) {
    t.nonNull.string('name'),
    t.nonNull.string('price'),
    t.nonNull.string('description'),
    t.nonNull.list.field('details', {
      type: LMProductPropsInput
    }),
    t.nonNull.string('colors'),
    t.nonNull.string('unds'),
    t.nonNull.list.field('imgs', {
      type: LMImgInput
    })
  }
});

const productModel = builderProduct();

const LMProductQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('getLMProduct', {
      type: LMProduct,
      args: {
        id: stringArg()
      },
      resolve: async (root, args, ctx) => {
        return await productModel.getProduct(args.id);
      }
    })
  }
})

const LMProductQueryList = extendType({
  type: 'Query',
  definition(t) {
    t.field('getLMProductList', {
      type: LMProduct,
      args: {
        offset: intArg(),
        limit: intArg()
      },
      resolve: async (root, args, ctx) => {
        return await productModel.getProductAll(args)
      }
    })
  }
})

const LMProductMutationPost = extendType({
  type: "Mutation",
  definition(t) {
    t.field('postLMProduct', {
      type: LMProduct,
      args: {
        product: LMProductInput
      },
      resolve: async (root, args, ctx) => {
        return productModel.postProduct(args.product);
      }
    })
  }
})

const LmProductMutationPut = extendType({
  type: "Mutation",
  definition(t) {
    t.field('putLMProduct', {
      type: "Boolean",
      args: {
        id: idArg(),
        product: LMProductInput
      },
      resolve: async (root, args, cyx) => {
        const {id, product} = args;
        return productModel.updateProduct({_id: id, ...product});
      }
    })
  }
})

export {
  LMProductProps,
  LMProductPropsInput,
  LMProduct,
  LMProductInput,
  LMProductQuery,
  LMProductQueryList,
  LMProductMutationPost,
  LmProductMutationPut
};
