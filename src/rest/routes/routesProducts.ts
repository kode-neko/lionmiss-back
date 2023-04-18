import {IRouter, Router} from "express";
import {ctrlProduct as product} from "../controller/index";
import {validProduct, validProductId} from "../validation/index.js";
import {midJoiBody} from "../middleware/midJoi";
import Joi, {Schema} from "joi";
import midJwt from "../middleware/midJwt";

const router: IRouter = Router();

const schemaValidProduct: Schema = Joi.object(validProduct);
const schemaValidProductId: Schema = Joi.object(validProductId);

router.use(midJwt);

router.get("/:id", product.getProduct);
router.get("/all", product.getProductAll);
router.post("/", midJoiBody(schemaValidProduct), product.postProduct);
router.put("/", midJoiBody(schemaValidProductId), product.updateProduct);
router.delete("/:id", product.deleteProduct);

export default router;
