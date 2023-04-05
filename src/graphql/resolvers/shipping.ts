import { Context } from 'apollo-server-core';
import { LMShipping } from 'lionmiss-core';
import { LMBError } from '../../model/LMB/index.js';
import { builderShipping } from "../../model/utils/index.js";

// Model Builders
const shippingModel = builderShipping();

// Inputs
type QueryShipping = {
  id: string;
}
type InputMessageShipping = {
  shipping: LMShipping;
}

// Resolvers
const shippingResolvers = {
  Query: {
    shipping: async (_: Context, {id} : QueryShipping): Promise<LMShipping|LMBError> => 
      await shippingModel.getShipping(id),
    shippings: async (): Promise<LMShipping[]|LMBError> => 
      await shippingModel.getShippingAll(),
  },
  Mutation: {
    createShipping: async (_: Context, {shipping}: InputMessageShipping): Promise<LMShipping|LMBError> => 
      await shippingModel.postShipping(shipping),
    updateShipping: async (_: Context, {shipping}: InputMessageShipping): Promise<boolean|LMBError> => 
      await shippingModel.updateShipping(shipping),
    deleteShipping: async (_: Context, id: string): Promise<boolean|LMBError> => 
      await shippingModel.deleteShipping(id),
  }
};

export default shippingResolvers;