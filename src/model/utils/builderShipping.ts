import { IShipping } from "../IShipping";
import { MGSShipping } from "../mongoose";

function builderShipping(): IShipping {
  return new MGSShipping();
}

export { builderShipping };
