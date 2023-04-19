import {Router} from "express";
import {ctrlShipping as shipping} from "../controller/index";
import { validSearchParams, validShipping, validShippingId } from "../validation";
import Joi, {Schema} from "joi";
import { midJoiBody } from "../middleware";
// import midJwt from "../middleware/midJwt";

const router: Router = Router();

const schemaValidShipping: Schema = Joi.object(validShipping);
const schemaValidShippingId: Schema = Joi.object(validShippingId);
const schemaValidSearchParams: Schema = Joi.object(validSearchParams);

// router.use(midJwt);

router.get("/:id", shipping.getShipping);
router.post("/all", midJoiBody(schemaValidSearchParams), shipping.getShippingAll);
router.post("/", midJoiBody(schemaValidShipping), shipping.postShipping);
router.put("/", midJoiBody(schemaValidShippingId), shipping.updateShipping);
router.delete("/:id", shipping.deleteShipping);

export default router;
