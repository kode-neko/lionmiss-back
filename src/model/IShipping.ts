import { LMShipping } from "lionmiss-core";
import { LMBSearchParams } from "./LMB/index.js";

interface IShipping {
  getShipping: (id: string) => Promise<LMShipping>;
  getShippingAll: (params: LMBSearchParams) => Promise<LMShipping[]>;
  postShipping: (shipping: LMShipping) => Promise<LMShipping>;
  updateShipping: (shipping: LMShipping) => Promise<boolean>;
  deleteShipping: (id: string) => Promise<boolean>;
}

export { IShipping };
