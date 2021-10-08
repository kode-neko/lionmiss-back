import { model } from "mongoose";
import { ILocale } from "../ILocale";
import { LMBError, LMBLocale } from "../LMB";
import { schemaLocale } from "./schemas";

const LocaleModel = model<LMBLocale>("Locale", schemaLocale);

class MGSLocale implements ILocale {
  getLocaleAll(): Promise<LMBLocale[] | LMBError> {
    return LocaleModel.find({})
      .then(Promise.resolve)
      .catch((err) => Promise.reject({ error: err }));
  }
}

export { MGSLocale };
