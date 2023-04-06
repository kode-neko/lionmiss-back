import Joi from 'joi';
import { LMPromo, LMPromoType } from 'lionmiss-core';

const validPromo: Joi.ObjectSchema<LMPromo> = Joi.object({
  type: Joi
    .any()
    .valid(...Object.values(LMPromoType)),
  qty: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required()
});

export default validPromo;