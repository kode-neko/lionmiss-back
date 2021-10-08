import { model } from "mongoose";
import { LMCountry } from "lionmiss-core";
import { ICountry } from "../ICountry";
import { schemaCountry } from "./schemas";
import { LMBError } from "../LMB";

const CountryModel = model<LMCountry>("Country", schemaCountry, "country");

class MGSCountry implements ICountry {
  getCountry(id: string): Promise<LMCountry | LMBError> {
    return CountryModel.findById(id)
      .then(Promise.resolve)
      .catch((err) => Promise.reject({ error: err }));
  }

  getCountryAll(): Promise<LMCountry[] | LMBError> {
    return CountryModel.find({})
      .then(Promise.resolve)
      .catch((err) => Promise.reject({ error: err }));
  }
}

export { MGSCountry };
