import { model } from "mongoose";
import { LMCountry } from "lionmiss-core";
import { ICountry } from "../ICountry";
import { schemaCountry } from "./schemas";
import { LMBError } from "../LMB";

class MGSCountry implements ICountry {
  CountryModel = model<LMCountry>("Country", schemaCountry, "countries");

  getCountry(id: string): Promise<LMCountry | LMBError> {
    return this.CountryModel.findById(id)
      .then(Promise.resolve)
      .catch((err) => Promise.reject(err));
  }

  getCountryAll(): Promise<LMCountry[] | LMBError> {
    return this.CountryModel.find({})
      .then(Promise.resolve)
      .catch((err) => Promise.reject(err));
  }
}

export { MGSCountry };
