import Joi from 'joi';
import { LMColor, LMPropsBuy, LMSize } from 'lionmiss-core';

const validPropsBuy: Joi.ObjectSchema<LMPropsBuy> = Joi.object({
  productId: Joi
    .string()
    .empty()
    .required(),
  color: Joi.any().valid(...Object.values(LMColor)),
  size: Joi.any().valid(...Object.values(LMSize)),
  qty: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required()
})

export default validPropsBuy;