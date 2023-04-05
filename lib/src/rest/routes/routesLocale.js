import { Router } from "express";
import { ctrLocale as locale } from "../controller/index.js";
const route = Router();
route.get("/all", locale.getLocaleAll);
export default route;
//# sourceMappingURL=routesLocale.js.map