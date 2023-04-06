import Joi from 'joi';
import { LMCreditCard } from 'lionmiss-core';

const validCreditCard: Joi.ObjectSchema<LMCreditCard> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  creditNumber: Joi
    .string()
    .creditCard()
    .empty()
    .required(),
  fullName: Joi
    .string()
    .creditCard()
    .empty()
    .required(),
  month: Joi
    .number()
    .min(2)
    .max(2)
    .integer()
    .sign('positive')
    .required(),
  year: Joi
    .number()
    .min(2)
    .max(2)
    .integer()
    .sign('positive')
    .required(),
  cvv: Joi
    .number()
    .min(3)
    .max(3)
    .integer()
    .sign('positive')
    .required()
});

export default validCreditCard;