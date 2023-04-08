import { IRouter, Router } from "express";
import { ctrlProduct as product } from "../controller/index.js";
import { validProduct, validId } from '../validation/index.js'
import { midJoiBody } from "../middleware/midJoi.js";
import { Schema } from "joi";
import { composeJoiScheme } from "../validation/valid.js";

const router: IRouter = Router();

const bodyProductPost: Schema = composeJoiScheme(validProduct);
const bodyProductUpdate: Schema = composeJoiScheme(validId, validProduct);

router.get("/:id", product.getProduct);
router.get("/all", product.getProductAll);
router.post("/", midJoiBody(bodyProductPost), product.postProduct);
router.put("/", midJoiBody(bodyProductUpdate), product.updateProduct);
router.delete("/:id", product.deleteProduct);

export default router;
