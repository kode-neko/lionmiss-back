import { IProduct } from "../IProduct.js";
import {  MGSProduct } from "../mongoose/index.js";

function builderProduct(): IProduct {
  return new MGSProduct();
}

export { builderProduct };
