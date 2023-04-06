import Joi from 'joi';
import { LMProduct } from 'lionmiss-core';
import validMeasures from '../validMeasures.js';
import validAddress from '../validAddress.js';

const validUser: Joi.ObjectSchema<LMProduct> = Joi.object({
  username: Joi
    .string()
    .empty()
    .required(),
  avatar: Joi
    .string()
    .empty()
    .required(),
  lang: Joi
    .string()
    .max(2)
    .empty()
    .required(),
  currency: Joi
    .string()
    .max(2)
    .empty()
    .required(),
  measures: validMeasures,
  email: Joi
    .string()
    .empty()
    .required(),
  addresses: Joi.array().items(validAddress)
});

export default validUser;