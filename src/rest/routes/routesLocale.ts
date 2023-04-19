import {Router} from "express";
import {ctrLocale as locale} from "../controller/index";

const route: Router = Router();

route.get("/all", locale.getLocaleAll);

export default route;
