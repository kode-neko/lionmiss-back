import { LMProduct } from "lionmiss-core";
import { LMBError } from "./LMB";

interface IProduct {
  getProduct: (id: string) => Promise<LMProduct | LMBError>;
  getProductAll: () => Promise<LMProduct[] | LMBError>;
  postProduct: (product: LMProduct) => Promise<LMProduct | LMBError>;
  updateProduct: (product: LMProduct) => Promise<boolean | LMBError>;
  deleteProduct: (id: string) => Promise<boolean | LMBError>;
}

export { IProduct };
