import {Schema} from "mongoose";
import {LMShipping} from "lionmiss-core";
import {schemaCart} from "./schemaCart";

const schemaShipping: Schema<LMShipping> = new Schema<LMShipping>({
  initDate: {type: Date, required: true},
  finishDate: {type: Date, required: true},
  priceShipping: {type: Number, required: true},
  shippingMethod: {type: String, required: true},
  paymentMethod: {type: String, required: true},
  cart: schemaCart,
});

export {schemaShipping};
