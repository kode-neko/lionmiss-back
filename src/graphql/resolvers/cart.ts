import { LMCart, LMCartProduct } from 'lionmiss-core';
import { Context } from 'apollo-server-core';
import { LMBError } from '../../model/LMB';
import { builderCart } from "../../model/utils";

// Model Builders
const cartModel = builderCart();

// Inputs
type QueryCart = {
  idUser: string
}
type InputMessageCart = {
  idUser: string,
  cart: LMCart
}
type InputMessageProductCart = {
  idUser: string,
  product: LMCartProduct
}

// Resolvers
const cartResolvers = {
  Query: {
    cart: async (_: Context, {idUser} : QueryCart): Promise<LMCart|LMBError> => 
      await cartModel.getCart(idUser),
  },
  Mutation: {
    // Cart
    createCart: async (_, {idUser, cart}: InputMessageCart): 
    Promise<boolean|LMBError> => 
      await cartModel.postCart(idUser, cart),
    updateCart: async (_: Context, {idUser, cart}: InputMessageCart): 
    Promise<boolean|LMBError> => 
      await cartModel.updateCart(idUser, cart),
    deleteCart: async (_: Context, idUser: string): 
    Promise<boolean|LMBError> => 
      await cartModel.deleteCart(idUser),

    // Cart - Product
    insertProductCart: async (_: Context, {idUser, product}: InputMessageProductCart): 
    Promise<boolean|LMBError> => 
      await cartModel.postProductCart(idUser, product),
    
    updateProductCart: async (_: Context, {idUser, product}: InputMessageProductCart): 
    Promise<boolean|LMBError> => 
      await cartModel.updateProductCart(idUser, product),
    deleteProductCart: async (_: Context, {idUser, product}: InputMessageProductCart): 
    Promise<boolean|LMBError> => 
      await cartModel.deleteProductCart(idUser, product._id),
  }
};

export default cartResolvers;