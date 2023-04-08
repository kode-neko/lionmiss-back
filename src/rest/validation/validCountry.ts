import Joi, { PartialSchemaMap } from 'joi';
import { LMCountry } from 'lionmiss-core';

const validCountry: PartialSchemaMap<LMCountry> = {
  name: Joi
    .string()
    .empty()
    .max(50)
    .required(),
  nameCode: Joi
    .string()
    .empty()
    .max(3)
    .required(),
  currency: Joi
    .string()
    .empty()
    .max(5)
    .required(),
  currencyName: Joi
    .string()
    .empty()
    .max(50)
    .required(),
};

export {
  validCountry
};