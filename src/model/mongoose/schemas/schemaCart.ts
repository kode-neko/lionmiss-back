import {Schema} from "mongoose";
import {LMCart} from "lionmiss-core";
import {schemaCartProduct} from "./schemaCartProduct";

const schemaCart: Schema<LMCart> = new Schema<LMCart>(
  {
    products: [schemaCartProduct],
    promo: {type: {type: String}, qty: {type: Number, required: true}},
    taxes: {type: Number, required: true},
  },
  {id: false}
);

export {schemaCart};
