import { Schema } from "mongoose";
import {
  LMSize,
  LMColor,
  enumStringToList,
  LMCartProduct,
} from "lionmiss-core";
import { schemaProduct } from "./schemaProduct.js";

const schemaCartProduct: Schema<LMCartProduct> = new Schema<LMCartProduct>(
  {
    size: { type: String, required: true, enum: enumStringToList(LMSize) },
    color: { type: String, required: true, enum: enumStringToList(LMColor) },
    unds: { type: Number, required: true },
    product: schemaProduct,
  },
  { id: false }
);

export { schemaCartProduct };
