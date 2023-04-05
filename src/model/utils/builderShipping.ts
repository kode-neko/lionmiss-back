import { IShipping } from "../IShipping.js";
import { MGSShipping } from "../mongoose/index.js";

function builderShipping(): IShipping {
  return new MGSShipping();
}

export { builderShipping };
