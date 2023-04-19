import Joi, {Schema} from "joi";
import {Router} from "express";
import {ctrlUser as user} from "../controller/index";
import { validSearchParams, validUser } from '../validation';
import { midJoiBody } from "../middleware";
// import midJwt from "../middleware/midJwt";

const router: Router = Router();

const schemaValidUser: Schema = Joi.object(validUser);
const schemaValidSearchParams: Schema = Joi.object(validSearchParams);

// router.use(midJwt);

router.get("/:id", user.getUser);
router.post("/all", midJoiBody(schemaValidSearchParams), user.getUserAll);
router.put("/", midJoiBody(schemaValidUser), user.updateUser);
router.delete("/:id", user.deleteUser);

// Login
router.post("/signup", midJoiBody(schemaValidUser), user.signUp);
router.post("/login", user.login);

export default router;
