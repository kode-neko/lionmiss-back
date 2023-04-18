import {Schema} from "mongoose";
import {LMUserInfo} from "lionmiss-core";
import {schemaMeasures} from "./schemaMeasures";
import {schemaAddress} from "./schemaAddress";
import {schemaCart} from "./schemaCart";

const schemaUserInfo: Schema<LMUserInfo> = new Schema<LMUserInfo>(
  {
    cart: schemaCart,
    avatar: {type: String, required: true},
    lang: {type: String, required: true},
    currency: {type: String, required: true},
    measures: schemaMeasures,
    email: {type: String, required: true, unique: true},
    addresses: [schemaAddress],
  },
  {id: false}
);

export {schemaUserInfo};
