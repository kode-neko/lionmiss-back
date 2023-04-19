import {Router} from "express";
import {ctrlCountry as country} from "../controller/index";

const router: Router = Router();

router.get("/all", country.getCountryAll);

export default router;
