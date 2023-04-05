import { model } from "mongoose";
import { schemaCountry } from "./schemas/index.js";
class MGSCountry {
    CountryModel = model("Country", schemaCountry, "country");
    getCountry(id) {
        return this.CountryModel.findById(id)
            .then(country => country)
            .catch(err => err);
    }
    getCountryAll() {
        return this.CountryModel.find({})
            .then(list => list)
            .catch(err => err);
    }
}
export { MGSCountry };
//# sourceMappingURL=MGSCountry.js.map