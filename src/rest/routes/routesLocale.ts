import { Router } from "express";
import { ctrLocale as locale } from "../controller";

const route = Router();

route.get("/all", locale.getLocaleAll);

export default route;
