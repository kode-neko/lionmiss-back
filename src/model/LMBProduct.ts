import { Schema, model } from "mongoose";
import { LMProduct } from "lionmiss-core";

const productSchema = new Schema<LMProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  details: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  colors: [{ type: String, required: true }],
  unds: { type: Number, required: true },
  isFav: { type: Boolean, required: true },
  imgs: [
    {
      key: { type: String, required: true },
      src: { type: String, required: true },
      title: { type: String, required: true },
      alt: { type: String, required: true },
      main: { type: String, required: true },
    },
  ],
});

const ProductModel = model<LMProduct>("Product", productSchema, "product");

export { productSchema, ProductModel };
