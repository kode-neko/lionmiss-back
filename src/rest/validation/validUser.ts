import Joi, { PartialSchemaMap } from 'joi';
import { LMUser } from 'lionmiss-core';
import { LMBUser } from '../../model/LMB/LMBUser.js';
import { validMeasures } from './validMeasures.js';
import { validAddress } from './validAddress.js';
import { validCart } from './index.js';
import { composeJoiPartialSchemaMap } from '../utils/validUtils.js';

const validUser: PartialSchemaMap<LMBUser> = {
  username: Joi
    .string()
    .required(),
  pass: Joi
    .string(),
  cart: Joi
    .object(validCart)
    .required(),
  favProducts: Joi
    .array()
    .items(Joi.string())
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
  measures: Joi.object(validMeasures).required(),
  email: Joi
    .string()
    .empty()
    .required(),
  addresses: Joi
    .array()
    .items(Joi.object(validAddress))
    .required()
};

export {
  validUser
};