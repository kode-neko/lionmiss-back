import { idArg, intArg } from "nexus";
import { builderProduct } from "../../model/utils/builderProduct.js";
import { LMImg, LMImgInput } from "./img.js";
import { ArgsValue, InputDefinitionBlock, NexusExtendTypeDef, NexusInputObjectTypeDef, NexusObjectTypeDef, ObjectDefinitionBlock, SourceValue } from "nexus/dist/core.js";
import { IProduct } from "../../model/IProduct.js";
import { LMListParamsInput } from "./params.js";
import { listToObjKeyVal } from "../utils.js";
import pkg from "nexus/dist/core.js";
const { inputObjectType, objectType, extendType } = pkg;

const LMProductProps: NexusObjectTypeDef<string> = objectType({
  name: 'LMProductProps',
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string('key')
    t.nonNull.string('value')
  }
});

const LMProductPropsInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMProductPropsInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string('key')
    t.nonNull.string('value')
  }
});

const LMProduct: NexusObjectTypeDef<string> = objectType({
  name: 'LMProduct',
  definition(t: ObjectDefinitionBlock<string>) {
    t.id('_id')
    t.nonNull.string('name'),
    t.nonNull.float('price'),
    t.nonNull.string('description'),
    t.nonNull.list.field('details', {
      type: LMProductProps
    }),
    t.nonNull.string('colors'),
    t.nonNull.int('unds'),
    t.nonNull.list.field('imgs', {
      type: LMImg
    })
  }
});

const LMProductInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMProductInput',
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string('name'),
    t.nonNull.float('price'),
    t.nonNull.string('description'),
    t.nonNull.list.field('details', {
      type: LMProductPropsInput
    }),
    t.nonNull.string('colors'),
    t.nonNull.int('unds'),
    t.nonNull.list.field('imgs', {
      type: LMImgInput
    })
  }
});

const productModel: IProduct = builderProduct();

const LMProductQuery: NexusExtendTypeDef<'Query'> = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMProductQuery', {
      type: LMProduct,
      args: {
        id: idArg()
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return await productModel.getProduct(args.id);
      }
    })
  }
})

const LMProductQueryList: NexusExtendTypeDef<'Query'> = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field('LMProductQueryList', {
      type: LMProduct,
      args: {
        offset: intArg(),
        limit: intArg(),
        searchList: LMListParamsInput 
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const { offset, limit, searchList } = args;
        const search: {[key: string]: string} = listToObjKeyVal(searchList);
        return await productModel.getProductAll({limit, offset, search})
      }
    })
  }
})

const LMProductMutationPost: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMProductMutationPost', {
      type: LMProduct,
      args: {
        product: LMProductInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return productModel.postProduct(args.product);
      }
    })
  }
})

const LMProductMutationPut: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMProductMutationPut', {
      type: "Boolean",
      args: {
        id: idArg(),
        product: LMProductInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const {id, product} = args;
        return productModel.updateProduct({_id: id, ...product});
      }
    })
  }
})

const LMProductMutationDelete: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMProductMutationDelete', {
      type: "Boolean",
      args: {
        id: idArg()
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return productModel.deleteProduct(args.id);
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
  LMProductMutationPut,
  LMProductMutationDelete
};
