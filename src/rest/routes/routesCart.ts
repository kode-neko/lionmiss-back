import { Router } from "express";
import { ctrlCart as cart } from "../controller/index.js";
import validRequest from 'valid-request-joi';
import Joi from "joi";
import {validId, validCart } from '../validation/index.js'


const router: Router = Router();


const paramsPost = validRequest({
  body: Joi.object({
    body: {validId, validCart}
  })
});
const paramsPut = validRequest({
  body: Joi.object({
    body: {validId, validCart}
  })
});


router.get("/:idUser", cart.getCart);
router.post("/", paramsPost, cart.createCart);
router.put("/", cart.updateCart);
router.delete("/:idUser", cart.deleteCart);

router.post("/product", cart.postCartProduct);
router.put("/product", cart.putCartProduct);
router.delete("/:idUser/product/:idProduct", cart.delCartProduct);

export default router;