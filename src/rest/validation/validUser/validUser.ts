import Joi, { PartialSchemaMap } from 'joi';
import { LMUser } from 'lionmiss-core';
import { validCart, validId } from '../index.js';
import { validUserInfo } from './validUserInfo.js';
import { composeJoiPartialSchemaMap } from '../../utils/validUtils.js';

const validUser: PartialSchemaMap<LMUser> = {
  cart: Joi
    .object(validCart),
  user: Joi
    .object(validUserInfo)
    .required(),
  favProducts: Joi
    .array()
    .items(Joi.string())
    .required()
};

const validUserId: PartialSchemaMap<LMUser> = composeJoiPartialSchemaMap(validId, validUser);

export {
  validUser,
  validUserId
};