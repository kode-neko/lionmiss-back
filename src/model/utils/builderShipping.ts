import {IShipping} from "../IShipping";
import {MGSShipping} from "../mongoose/index";

function builderShipping(): IShipping {
  return new MGSShipping();
}

export {builderShipping};
