import { Schema, model } from "mongoose";
import { LMCountry } from "lionmiss-core";

const countrySchema = new Schema<LMCountry>({
  name: { type: String, required: true },
  nameCode: { type: String, required: true },
  currency: { type: String, required: true },
  currencyName: { type: String, required: true },
});

const CountryModel = model<LMCountry>("Country", countrySchema, "country");

export { countrySchema, CountryModel };
