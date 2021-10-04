import { Schema, model } from "mongoose";
import { LMImg, LMProduct, LMProductProps } from "lionmiss-core";

const imgSchema = new Schema<LMImg>({
  src: { type: String, required: true },
  title: { type: String, required: true },
  alt: { type: String, required: true },
  main: { type: Boolean, required: true },
});

const productPropsSchema = new Schema<LMProductProps>({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<LMProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  details: [productPropsSchema],
  colors: [{ type: String, required: true }],
  unds: { type: Number, required: true },
  imgs: [imgSchema],
});

const ProductModel = model<LMProduct>("Product", productSchema, "product");

export { imgSchema, productPropsSchema, productSchema, ProductModel };
