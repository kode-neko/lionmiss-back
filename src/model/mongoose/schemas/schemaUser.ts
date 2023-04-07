import { Schema } from "mongoose";
import { LMUser } from "lionmiss-core";
import { schemaMeasures } from "./schemaMeasures.js";
import { schemaAddress } from "./schemaAddress.js";

const schemaUser: Schema<LMUser> = new Schema<LMUser>(
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
export { schemaUser };