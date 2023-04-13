import { Schema } from "mongoose";
import { LMBLocale } from "../../LMB/index.js";

const schemaLocale: Schema<LMBLocale> = new Schema<LMBLocale>(
  {
    name: { type: String, require: true },
  },
  { id: false }
);

export { schemaLocale };
