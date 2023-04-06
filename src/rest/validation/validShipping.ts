import Joi from 'joi';
import { LMProduct } from 'lionmiss-core';
import validCart from './validCart/validCart.js';

const validShipping: Joi.ObjectSchema<LMProduct> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  initDate: Joi
    .string()
    .isoDate()
    .empty()
    .required(),
  finishDate: Joi
    .string()
    .isoDate()
    .empty()
    .required(),
  priceShipping: Joi
    .number()
    .min(0)
    .precision(2)
    .sign('positive')
    .required(),
  shippingMethod: Joi
    .string()
    .empty()
    .required(),
  paymentMethod: Joi
    .string()
    .empty()
    .required(),
  cart: validCart
});

export default validShipping;