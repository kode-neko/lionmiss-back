import { LMCart, LMCartProduct } from "lionmiss-core";

interface ICart {
  getCart: (idUser: string) => Promise<LMCart>;
  postCart: (idUser: string, cart: LMCart) => Promise<boolean>;
  updateCart: (idUser: string, cart: LMCart) => Promise<boolean>;
  deleteCart: (idUser: string) => Promise<boolean>;
  postProductCart: (
    idUser: string,
    cartProduct: LMCartProduct
  ) => Promise<boolean >;
  updateProductCart: (
    idUser: string,
    cartProduct: LMCartProduct
  ) => Promise<boolean>;
  deleteProductCart: (
    idUser: string,
    idProduct: string
  ) => Promise<boolean>;
}

export { ICart };
