import Joi from 'joi';
import { LMCartProduct, LMColor, LMSize } from 'lionmiss-core';
import validProduct from '../validProduct/validProduct.js';

const validCartProduct: Joi.ObjectSchema<LMCartProduct> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  size: Joi.any().valid(...Object.values(LMSize)),
  color: Joi.any().valid(...Object.values(LMColor)),
  unds: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  product: validProduct,
});

export default validCartProduct;