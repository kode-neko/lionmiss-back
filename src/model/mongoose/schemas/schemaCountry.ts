import { LMCountry } from "lionmiss-core";
import { Schema } from "mongoose";

const schemaCountry: Schema<LMCountry> = new Schema<LMCountry>(
  {
    name: { type: String, required: true },
    nameCode: { type: String, required: true },
    currency: { type: String, required: true },
    currencyName: { type: String, required: true },
  },
  { id: false }
);

export { schemaCountry };
