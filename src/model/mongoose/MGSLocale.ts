import {Model, model} from "mongoose";
import {ILocale} from "../ILocale";
import {LMBLocale} from "../LMB/index";
import {schemaLocale} from "./schemas/index";

class MGSLocale implements ILocale {
  LocaleModel: Model<LMBLocale> = model<LMBLocale>("Locale", schemaLocale);

  getLocaleAll(): Promise<LMBLocale[]> {
    return this.LocaleModel.find({}).then((list: LMBLocale[]) => list);
  }
}

export {MGSLocale};
