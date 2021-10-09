import { IProduct } from "../IProduct";
import {  MGSProduct } from "../mongoose";

function builderProduct(): IProduct {
  return new MGSProduct();
}

export { builderProduct };
