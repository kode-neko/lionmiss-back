import Joi from 'joi';
import { LMColor, LMPropsBuy, LMSize } from 'lionmiss-core';
import { validateEnum } from '../utils/validUtils';

const validPropsBuy: Joi.ObjectSchema<LMPropsBuy> = Joi.object({
  productId: Joi
    .string()
    .empty()
    .required(),
  color: Joi
    .string()
    .custom(validateEnum(LMColor)),
  size: Joi
    .string()
    .custom(validateEnum(LMSize)),
  qty: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required()
})

export { 
  validPropsBuy 
};