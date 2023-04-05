import { LMCart, LMCartProduct } from "lionmiss-core";
import { LMBError } from "./LMB/index.js";
interface ICart {
    getCart: (idUser: string) => Promise<LMCart | LMBError>;
    postCart: (idUser: string, cart: LMCart) => Promise<boolean | LMBError>;
    updateCart: (idUser: string, cart: LMCart) => Promise<boolean | LMBError>;
    deleteCart: (idUser: string) => Promise<boolean | LMBError>;
    postProductCart: (idUser: string, cartProduct: LMCartProduct) => Promise<boolean | LMBError>;
    updateProductCart: (idUser: string, cartProduct: LMCartProduct) => Promise<boolean | LMBError>;
    deleteProductCart: (idUser: string, idProduct: string) => Promise<boolean | LMBError>;
}
export { ICart };
