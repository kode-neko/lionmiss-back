import Joi, { PartialSchemaMap } from 'joi';
import { LMColor, LMProduct } from 'lionmiss-core';
import validProductProps from './validProductProps.js';
import validImg from '../validImg.js';

function validateColor(colorsSelected: string[], helpers: Joi.ExternalHelpers) {
  const colorList: string[] = Object.values(LMColor);
  const validationColorList: boolean = 
    colorsSelected.every((colSel: string) => colorList.includes(colSel));
  return validationColorList || helpers.error('any.invalid');
}

const validProduct: PartialSchemaMap<LMProduct> = {
  name: Joi
    .string()
    .empty()
    .required(),
  price: Joi
    .number()
    .min(0)
    .precision(2)
    .sign('positive')
    .required(),
  description: Joi
    .string()
    .max(100)
    .empty()
    .required(),
  details: Joi.array().items(validProductProps),
  colors: Joi.array().custom(validateColor),
  unds: Joi
    .number()
    .integer()
    .min(0)
    .sign('positive')
    .required(),
  imgs: Joi.array().items(validImg),
};

export default validProduct;