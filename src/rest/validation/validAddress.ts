import Joi, { PartialSchemaMap } from 'joi';
import { LMAddress } from 'lionmiss-core';
import { validId } from './validCommon';
import { composeJoiPartialSchemaMap } from '../utils/validUtils';

const validAddress: PartialSchemaMap<LMAddress> = {
  name: Joi
    .string()
    .empty()
    .max(50)
    .required(),
  adress: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  country: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  state: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  town: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  zip: Joi
    .string()
    .empty()
    .max(20)
    .required(),
  phone: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  mail: Joi
    .string()
    .empty()
    .max(255)
    .email()
    .required(),
  comments: Joi
    .string()
    .empty()
    .max(300)
    .required(),
  main: Joi
    .boolean()
    .empty()
    .required()
};

const validAddressId: PartialSchemaMap<LMAddress> = composeJoiPartialSchemaMap(validId, validAddress);

export {
  validAddress,
  validAddressId
};