import { LMCart, LMCartInput } from "./cart.js";
import { ArgsValue, InputDefinitionBlock, NexusExtendTypeDef, NexusInputObjectTypeDef, NexusObjectTypeDef, ObjectDefinitionBlock, SourceValue } from "nexus/dist/core.js";
import { builderShipping } from "../../model/utils/builderShipping.js";
import { IShipping } from "../../model/IShipping.js";
import { LMListParamsInput } from "./params.js";
import { listToObjKeyVal } from "../utils.js";
import pkg from "nexus/dist/core.js";
const { inputObjectType, objectType, extendType, idArg, intArg } = pkg;

const LMShipping: NexusObjectTypeDef<string> = objectType({
  name: 'LMShipping',
  definition(t: ObjectDefinitionBlock<string>) {
    t.id('_id')
    t.nonNull.string('initDate'),
    t.nonNull.string('finishDate'),
    t.nonNull.string('priceShipping'),
    t.nonNull.string('shippingMethod'),
    t.nonNull.string('paymentMethod'),
    t.nonNull.list.field('cart', {
      type: LMCart
    })
  }
});

const LMShippingInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: 'LMShippingInput',
  definition(t: InputDefinitionBlock<string>) {
    t.id('_id')
    t.nonNull.string('initDate'),
    t.nonNull.string('finishDate'),
    t.nonNull.string('priceShipping'),
    t.nonNull.string('shippingMethod'),
    t.nonNull.string('paymentMethod'),
    t.nonNull.list.field('cart', {
      type: LMCartInput
    })
  }
});


const shippingModel: IShipping = builderShipping();

const LMShippingQuery: NexusExtendTypeDef<'Query'> = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMShippingQuery', {
      type: LMShipping,
      args: {
        id: idArg()
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return await shippingModel.getShipping(args.id);
      }
    })
  }
})

const LMShippingQueryList: NexusExtendTypeDef<'Query'> = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field('LMShippingQueryList', {
      type: LMShipping,
      args: {
        offset: intArg(),
        limit: intArg(),
        searchList: LMListParamsInput 
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const { offset, limit, searchList } = args;
        const search: {[key: string]: string} = listToObjKeyVal(searchList);
        return await shippingModel.getShippingAll({limit, offset, search})
      }
    })
  }
})

const LMShippingMutationPost: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMShippingMutationPost', {
      type: LMShipping,
      args: {
        product: LMShippingInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return shippingModel.postShipping(args.product);
      }
    })
  }
})

const LMShippingMutationPut: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMShippingMutationPut', {
      type: "Boolean",
      args: {
        id: idArg(),
        product: LMShippingInput
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        const {id, product} = args;
        return shippingModel.updateShipping({_id: id, ...product});
      }
    })
  }
})

const LMShippingMutationDelete: NexusExtendTypeDef<'Mutation'> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field('LMShippingMutationDelete', {
      type: "Boolean",
      args: {
        id: idArg()
      },
      resolve: async (root: SourceValue<string>, args: ArgsValue<string, string>) => {
        return shippingModel.deleteShipping(args.id);
      }
    })
  }
})

export {
  LMShipping,
  LMShippingInput,
  LMShippingQuery,
  LMShippingQueryList,
  LMShippingMutationPost,
  LMShippingMutationPut,
  LMShippingMutationDelete
}