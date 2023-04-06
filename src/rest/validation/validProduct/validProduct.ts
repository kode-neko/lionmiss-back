import Joi from 'joi';
import { LMColor, LMProduct } from 'lionmiss-core';
import validProductProps from './validProductProps.js';
import validImg from '../validImg.js';

const validProduct: Joi.ObjectSchema<LMProduct> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  name: Joi
    .string()
    .empty()
    .required(),
  price: Joi
    .number()
    .min(0)
    .precision(2)
    .sign('positive')
    .required(),
  description: Joi
    .string()
    .max(100)
    .empty()
    .required(),
  details: Joi.array().items(validProductProps),
  colors: Joi.any().valid(...Object.values(LMColor)),
  unds: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  imgs: Joi.array().items(validImg),
});

export default validProduct;