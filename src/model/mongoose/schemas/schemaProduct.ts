import { Schema } from "mongoose";
import { LMProduct } from "lionmiss-core";
import { schemaProductProps } from "./schemaProductProps";
import { schemaImg } from "./schemaImg";

const schemaProduct = new Schema<LMProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  details: [schemaProductProps],
  colors: [{ type: String, required: true }],
  unds: { type: Number, required: true },
  imgs: [schemaImg],
});

export { schemaProduct };
