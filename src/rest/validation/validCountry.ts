import Joi from 'joi';
import { LMAddress } from 'lionmiss-core';
import validUser from './validUser/validUser.js';
import validImg from './validImg.js';
import validMeasures from './validMeasures.js';

const validCountry: Joi.ObjectSchema<LMAddress> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  comment: Joi
    .string()
    .empty()
    .max(300)
    .required(),
  date: Joi
    .string()
    .empty()
    .isoDate()
    .required(),
  ratting: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  measures: validMeasures,
  user: validUser,
  imgs: Joi.array().items(validImg),
});

export default validCountry;