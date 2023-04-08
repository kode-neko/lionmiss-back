import Joi from 'joi';
import validProduct from '../validProduct/validProduct.js';
import validPromo from '../validPromo.js';
import { LMCart } from 'lionmiss-core';

const validCart: Joi.ObjectSchema<LMCart> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  products: Joi.array().items(Joi.object(validProduct)),
  promo: validPromo,
  taxes: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required()
})

export default validCart;