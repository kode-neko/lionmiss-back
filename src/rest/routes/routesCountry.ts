import { Router } from "express";
import { ctrlCountry as country } from "../controller";

const router = Router();

router.get("/all", country.getCountryAll);

export default router;
