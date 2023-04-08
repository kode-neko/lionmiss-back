/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/typedef */
import { IRouter, Router } from "express";
import { ctrlProduct as product } from "../controller/index.js";
import { validProduct, validId } from '../validation/index.js'
import { midJoiBody } from "../middleware/midJoi.js";
import Joi from "joi";

const router: IRouter = Router();

const bodyProductPost = Joi.object({ ...validProduct });
const bodyProductUpdate = Joi.object({ _id: validId, ...validProduct });

router.get("/:id", product.getProduct);
router.get("/all", product.getProductAll);
router.post("/", midJoiBody(bodyProductPost), product.postProduct);
router.put("/", midJoiBody(bodyProductUpdate), product.updateProduct);
router.delete("/:id", product.deleteProduct);

export default router;
