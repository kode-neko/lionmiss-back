import {IRouter, Router} from "express";
import {ctrlProduct as product} from "../controller/index";
import {validProduct, validProductId} from "../validation/index";
import {midJoiBody} from "../middleware/midJoi";
import Joi, {Schema} from "joi";
import { validSearchParams } from "../validation/validSearchParams";
// import midJwt from "../middleware/midJwt";

const router: IRouter = Router();

const schemaValidProduct: Schema = Joi.object(validProduct);
const schemaValidProductId: Schema = Joi.object(validProductId);
const schemaValidSearchParams: Schema = Joi.object(validSearchParams);

// router.use(midJwt);

router.get("/:id", product.getProduct);
router.post("/all", midJoiBody(schemaValidSearchParams), product.getProductAll);
router.post("/", midJoiBody(schemaValidProduct), product.postProduct);
router.put("/", midJoiBody(schemaValidProductId), product.updateProduct);
router.delete("/:id", product.deleteProduct);

export default router;
