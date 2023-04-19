import {IProduct} from "../IProduct";
import {MGSProduct} from "../mongoose/index";

function builderProduct(): IProduct {
  return new MGSProduct();
}

export {builderProduct};
