import Joi from 'joi';
import { LMBLocale } from '../../model/LMB/LMBLocale.js';

const validLocale: Joi.ObjectSchema<LMBLocale> = Joi.object({
  _id: Joi
    .string()
    .length(2)
    .empty()
    .required()
});

export default validLocale;