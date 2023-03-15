import { Context } from 'apollo-server-core';
import { LMProduct } from 'lionmiss-core';
import { LMBError } from '../../model/LMB';
import { builderProduct } from "../../model/utils";

const product = builderProduct();

const productResolvers = {
  Query: {
    product: async (_: Context, {id} : {id: string}): Promise<LMProduct|LMBError> => {
      const result = await product.getProduct(id);
      return result;
    },
    products: async (): Promise<LMProduct[]|LMBError> => {
      const result = await product.getProductAll();
      return result;
    },
  },
};

export default productResolvers;