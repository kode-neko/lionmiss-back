import { LMShipping } from "lionmiss-core";
import { LMBError } from "./LMB/index.js";

interface IShipping {
  getShipping: (id: string) => Promise<LMShipping | LMBError>;
  getShippingAll: () => Promise<LMShipping[] | LMBError>;
  postShipping: (shipping: LMShipping) => Promise<LMShipping | LMBError>;
  updateShipping: (shipping: LMShipping) => Promise<boolean | LMBError>;
  deleteShipping: (id: string) => Promise<boolean | LMBError>;
}

export { IShipping };
