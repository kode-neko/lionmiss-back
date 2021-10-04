import { Schema, model } from "mongoose";
import { LMCart, LMSize, LMColor, enumStringToList } from "lionmiss-core";
import { productSchema } from "./LMBProduct";

const cartSchema = new Schema<LMCart>({
  products: [
    {
      size: { type: String, required: true, enum: enumStringToList(LMSize) },
      color: { type: String, required: true, enum: enumStringToList(LMColor) },
      unds: { type: Number, required: true },
      product: productSchema,
    },
  ],
  promo: { type: { type: String }, qty: { type: Number, required: true } },
  taxes: { type: Number, required: true },
});

const CartModel = model<LMCart>("Cart", cartSchema, "cart");

export { cartSchema, CartModel };
