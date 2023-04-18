import {LMProduct} from "lionmiss-core";
import {LMBSearchParams} from "./LMB/index";

interface IProduct {
  getProduct: (id: string) => Promise<LMProduct>;
  getProductAll: (params: LMBSearchParams) => Promise<LMProduct[]>;
  postProduct: (product: LMProduct) => Promise<LMProduct>;
  updateProduct: (product: LMProduct) => Promise<boolean>;
  deleteProduct: (id: string) => Promise<boolean>;
}

export {IProduct};
