import Joi from 'joi';
import { LMAddress } from 'lionmiss-core';

const validAddress: Joi.ObjectSchema<LMAddress> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  name: Joi
    .string()
    .empty()
    .max(50)
    .required(),
  adress: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  country: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  state: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  town: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  zip: Joi
    .string()
    .empty()
    .max(20)
    .required(),
  phone: Joi
    .string()
    .empty()
    .max(150)
    .required(),
  mail: Joi
    .string()
    .empty()
    .max(255)
    .email()
    .required(),
  comments: Joi
    .string()
    .empty()
    .max(300)
    .required(),
  main: Joi
    .boolean()
    .empty()
    .required()
});

export default validAddress;