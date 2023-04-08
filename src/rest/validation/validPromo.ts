import Joi, { PartialSchemaMap } from 'joi';
import { LMPromo, LMPromoType } from 'lionmiss-core';
import { validateEnum } from '../utils/validUtils.js';

const validPromo: PartialSchemaMap<LMPromo> = {
  type: Joi
    .string()
    .custom(validateEnum(LMPromoType))
    .required(),
  qty: Joi
    .number()
    .integer()
    .min(0)
    .required()
};

export {
  validPromo
};