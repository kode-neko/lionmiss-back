import { LMProduct } from 'lionmiss-core';
import { LMBError } from '../../model/LMB';
import { builderProduct } from "../../model/utils";

const Product = builderProduct();

const productResolvers = {
  Query: {
    product: async (id: string): Promise<LMProduct|LMBError> => { 
      const result = await Product.getProduct(id);
      return result;
    },
  },
};

export default productResolvers;