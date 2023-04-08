import Joi, { PartialSchemaMap, Schema } from 'joi';
import { LMColor, LMProduct } from 'lionmiss-core';
import { validImgId } from '../validImg.js';
import { composeJoiPartialSchemaMap, validateEnum } from '../../utils/validUtils.js';
import { validId } from '../validCommon.js';
import { validProductProps } from './validProductProps.js';

const schemaValidProductProps: Schema = Joi.object(validProductProps);
const schemaValidImgId: Schema = Joi.object(validImgId);

const validProduct: PartialSchemaMap<LMProduct> = {
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
    .required(),
  details: Joi
    .array()
    .items(schemaValidProductProps)
    .required(),
  colors: Joi
    .array()
    .items(Joi.string().custom(validateEnum(LMColor)))
    .required(),
  unds: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  imgs: Joi
    .array()
    .items(schemaValidImgId)
    .required(),
};

const validProductId: PartialSchemaMap<LMProduct> = composeJoiPartialSchemaMap(validId, validProduct);

export {
  validProduct,
  validProductId
};