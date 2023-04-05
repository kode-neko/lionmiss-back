import { model } from "mongoose";
import { ILocale } from "../ILocale.js";
import { LMBError, LMBLocale } from "../LMB/index.js";
import { schemaLocale } from "./schemas/index.js";

class MGSLocale implements ILocale {
  LocaleModel = model<LMBLocale>("Locale", schemaLocale);

  getLocaleAll(): Promise<LMBLocale[] | LMBError> {
    return this.LocaleModel.find({})
      .then(list => list)
      .catch(err => err);
  }
}

export { MGSLocale };
