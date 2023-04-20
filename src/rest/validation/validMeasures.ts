import Joi, { PartialSchemaMap } from 'joi';
import { LMMeasures, LMSize } from 'lionmiss-core';
import { validateEnum } from '../utils/validUtils';

const validMeasures: PartialSchemaMap<LMMeasures> = {
  chest: Joi
    .number()
    .integer()
    .min(0)
    .required(),
  waist: Joi
    .number()
    .integer()
    .min(0)
    .required(),
  hip: Joi
    .number()
    .integer()
    .min(0)
    .required(),
  size: Joi
    .string()
    .custom(validateEnum(LMSize))
};

export {
  validMeasures
};