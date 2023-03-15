import { model } from "mongoose";
import { ILocale } from "../ILocale";
import { LMBError, LMBLocale } from "../LMB";
import { schemaLocale } from "./schemas";

class MGSLocale implements ILocale {
  LocaleModel = model<LMBLocale>("Locale", schemaLocale);

  getLocaleAll(): Promise<LMBLocale[] | LMBError> {
    return this.LocaleModel.find({})
      .then(list => list)
      .catch(err => err);
  }
}

export { MGSLocale };
