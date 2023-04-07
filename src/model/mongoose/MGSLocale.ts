import { Model, model } from "mongoose";
import { ILocale } from "../ILocale.js";
import { LMBLocale } from "../LMB/index.js";
import { schemaLocale } from "./schemas/index.js";

class MGSLocale implements ILocale {
  LocaleModel: Model<LMBLocale> = model<LMBLocale>("Locale", schemaLocale);

  getLocaleAll(): Promise<LMBLocale[]> {
    return this.LocaleModel.find({})
      .then((list: LMBLocale[]) => list);
  }
}

export { MGSLocale };
