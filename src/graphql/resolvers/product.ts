import { LMProduct } from 'lionmiss-core';
import { LMBError } from '../../model/LMB';
import { builderProduct } from "../../model/utils";

const product = builderProduct();

const productResolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    product: async (_, {id}): Promise<LMProduct|LMBError> => {
      console.log('test', id); 
      const result = await product.getProduct(id);
      return result;
    },
    products: async (): Promise<LMProduct[]|LMBError> => {
      const result = await product.getProductAll();
      console.log(result);
      return result;
    },
  },
};

export default productResolvers;