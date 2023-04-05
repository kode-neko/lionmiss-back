import { builderLocale } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
const locale = builderLocale();
function getLocaleAll(req, res) {
    locale
        .getLocaleAll()
        .then((list) => res.status(200).json(list))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
export { getLocaleAll };
//# sourceMappingURL=ctrLocale.js.map