import Joi from 'joi';
import { LMMeasures, LMSize } from 'lionmiss-core';

const validMeasures: Joi.ObjectSchema<LMMeasures> = Joi.object({
  chest: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  waist: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  hip: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  size: Joi.any().valid(...Object.values(LMSize))
});

export default validMeasures;