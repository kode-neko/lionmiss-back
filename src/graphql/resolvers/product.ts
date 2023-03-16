import { Context } from 'apollo-server-core';
import { LMProduct } from 'lionmiss-core';
import { LMBError } from '../../model/LMB';
import { builderProduct } from "../../model/utils";

// Model Builders
const productModel = builderProduct();

// Inputs
type QueryProduct = {
  id: string;
}
type InputMessageProduct = {
  product: LMProduct;
}

// Resolvers
const productResolvers = {
  Query: {
    product: async (_: Context, {id} : QueryProduct): Promise<LMProduct|LMBError> => 
      await productModel.getProduct(id),
    products: async (): Promise<LMProduct[]|LMBError> => 
      await productModel.getProductAll(),
  },
  Mutation: {
    createProduct: async (_: Context, {product}: InputMessageProduct): Promise<LMProduct|LMBError> => 
      await productModel.postProduct(product),
    updateProduct: async (_: Context, {product}: InputMessageProduct): Promise<boolean|LMBError> => 
      await productModel.updateProduct(product),
    deleteProduct: async (_: Context, id: string): Promise<boolean|LMBError> => 
      await productModel.deleteProduct(id),
  }
};

export default productResolvers;