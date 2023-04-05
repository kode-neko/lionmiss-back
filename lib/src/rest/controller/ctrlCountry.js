import { builderCountry } from "../../model/utils/builderCountry.js";
import { statusErrorCode } from "./utils/index.js";
const country = builderCountry();
function getCountryAll(req, res) {
    country
        .getCountryAll()
        .then((countryList) => res.status(200).json(countryList))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
export { getCountryAll };
//# sourceMappingURL=ctrlCountry.js.map