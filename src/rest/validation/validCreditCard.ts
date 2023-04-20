import Joi, { PartialSchemaMap } from 'joi';
import { LMCreditCard } from 'lionmiss-core';
import { composeJoiPartialSchemaMap } from '../utils/validUtils';
import { validId } from './validCommon';

const validCreditCard: PartialSchemaMap<LMCreditCard> = {
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
    .integer()
    .min(2)
    .max(2)
    .required(),
  year: Joi
    .number()
    .integer()
    .min(2)
    .max(2)
    .required(),
  cvv: Joi
    .number()
    .integer()
    .min(3)
    .max(3)
    .required()
};

const validCreditCardId: PartialSchemaMap<LMCreditCard> = composeJoiPartialSchemaMap(validId, validCreditCard);

export {
  validCreditCard,
  validCreditCardId
};