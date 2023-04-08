import { LMCart, LMCartProduct } from "lionmiss-core";

type LMBUserCartParams = {
  idUser: string;
  cart: LMCart
}

type LMBUserCartProdParams = {
  idUser: string;
  cartProduct: LMCartProduct
}

type LMBUserCartProdIdsParams = {
  idUser: string;
  idProduct: string
}

export { 
  LMBUserCartParams, 
  LMBUserCartProdParams,
  LMBUserCartProdIdsParams
};