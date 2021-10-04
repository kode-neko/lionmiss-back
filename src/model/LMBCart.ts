import { Schema, model } from "mongoose";
import {
  LMCart,
  LMSize,
  LMColor,
  enumStringToList,
  LMCartProduct,
} from "lionmiss-core";
import { productSchema } from "./LMBProduct";

const cartProductSchema = new Schema<LMCartProduct>({
  size: { type: String, required: true, enum: enumStringToList(LMSize) },
  color: { type: String, required: true, enum: enumStringToList(LMColor) },
  unds: { type: Number, required: true },
  product: productSchema,
});

const cartSchema = new Schema<LMCart>({
  products: [cartProductSchema],
  promo: { type: { type: String }, qty: { type: Number, required: true } },
  taxes: { type: Number, required: true },
});

const CartModel = model<LMCart>("Cart", cartSchema, "cart");

export { cartProductSchema, cartSchema, CartModel };
