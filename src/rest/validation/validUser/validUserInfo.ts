import Joi, { PartialSchemaMap } from 'joi';
import { LMUserInfo } from 'lionmiss-core';
import { validMeasures } from '../validMeasures.js';
import { validAddress } from '../validAddress.js';

const validUserInfo: PartialSchemaMap<LMUserInfo> = {
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
  validUserInfo
};