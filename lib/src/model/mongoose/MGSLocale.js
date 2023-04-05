import { model } from "mongoose";
import { schemaLocale } from "./schemas/index.js";
class MGSLocale {
    LocaleModel = model("Locale", schemaLocale);
    getLocaleAll() {
        return this.LocaleModel.find({})
            .then(list => list)
            .catch(err => err);
    }
}
export { MGSLocale };
//# sourceMappingURL=MGSLocale.js.map