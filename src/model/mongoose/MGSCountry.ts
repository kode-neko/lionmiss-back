import {Model, model} from "mongoose";
import {LMCountry} from "lionmiss-core";
import {ICountry} from "../ICountry";
import {schemaCountry} from "./schemas/index";
class MGSCountry implements ICountry {
  CountryModel: Model<LMCountry> = model<LMCountry>(
    "Country",
    schemaCountry,
    "country"
  );

  getCountry(id: string): Promise<LMCountry> {
    return this.CountryModel.findById(id).then((country: LMCountry) => country);
  }

  getCountryAll(): Promise<LMCountry[]> {
    return this.CountryModel.find({}).then((list: LMCountry[]) => list);
  }
}

export {MGSCountry};
