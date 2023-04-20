import Joi, { PartialSchemaMap } from 'joi';
import { LMShipping } from 'lionmiss-core';
import { composeJoiPartialSchemaMap } from '../utils/validUtils';
import { validId } from './validCommon';
import { validCart } from './index';

const validShipping: PartialSchemaMap<LMShipping> = {
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
    .integer()
    .min(0)
    .precision(2)
    .required(),
  shippingMethod: Joi
    .string()
    .empty()
    .required(),
  paymentMethod: Joi
    .string()
    .empty()
    .required(),
  cart: Joi
    .object(validCart)
};

const validShippingId: PartialSchemaMap<LMShipping> = composeJoiPartialSchemaMap(validId, validShipping);

export {
  validShipping,
  validShippingId
};