
import { Schema } from "mongoose";
import { LMUserInfo } from "lionmiss-core";
import { schemaMeasures } from "./schemaMeasures.js";
import { schemaAddress } from "./schemaAddress.js";

const schemaUserInfo: Schema<LMUserInfo> = new Schema<LMUserInfo>(
  {
    username: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    lang: { type: String, required: true },
    currency: { type: String, required: true },
    measures: schemaMeasures,
    email: { type: String, required: true, unique: true },
    addresses: [schemaAddress],
  },
  { id: false }
);

export { schemaUserInfo };
