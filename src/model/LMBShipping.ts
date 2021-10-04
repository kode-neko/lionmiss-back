import { Schema, model } from "mongoose";
import { LMShipping } from "lionmiss-core";
import { cartSchema } from "./LMBCart";

const shippingSchema = new Schema<LMShipping>({
  id: { type: String, required: true },
  initDate: { type: Date, required: true },
  finishDate: { type: Date, required: true },
  priceShipping: { type: Number, required: true },
  shippingMethod: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  cart: cartSchema,
});

const ShippingModel = model<LMShipping>("Shipping", shippingSchema, "shipping");

export default ShippingModel;
