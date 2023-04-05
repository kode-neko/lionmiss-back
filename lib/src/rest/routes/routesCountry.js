import { Router } from "express";
import { ctrlCountry as country } from "../controller/index.js";
const router = Router();
router.get("/all", country.getCountryAll);
export default router;
//# sourceMappingURL=routesCountry.js.map