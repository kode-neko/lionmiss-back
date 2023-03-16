import { model } from "mongoose";
import { LMCountry } from "lionmiss-core";
import { ICountry } from "../ICountry";
import { schemaCountry } from "./schemas";
import { LMBError } from "../LMB";

class MGSCountry implements ICountry {
  CountryModel = model<LMCountry>("Country", schemaCountry, "country");

  getCountry(id: string): Promise<LMCountry | LMBError> {
    return this.CountryModel.findById(id)
      .then(country => country)
      .catch(err => err);
  }

  getCountryAll(): Promise<LMCountry[] | LMBError> {
    return this.CountryModel.find({})
      .then(list => list)
      .catch(err => err);
  }
}

export { MGSCountry };
