import { Schema } from "mongoose";
import { LMBLocale } from "../../LMB";

const schemaLocale = new Schema<LMBLocale>(
  {
    name: { type: String, require: true },
  },
  { id: false }
);

export { schemaLocale };