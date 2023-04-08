import Joi, { PartialSchemaMap } from 'joi';
import { validPromo } from '../validPromo.js';
import { LMCart } from 'lionmiss-core';
import { composeJoiPartialSchemaMap } from '../../utils/validUtils.js';
import { validId } from '../validCommon.js';
import { validProduct } from '../index.js';

const validCart: PartialSchemaMap<LMCart> = {
  products: Joi
    .array()
    .items(Joi.object(validProduct))
    .required(),
  promo: Joi
    .object(validPromo),
  taxes: Joi
    .number()
    .integer()
    .min(0)
    .required()
};

const validCartId: PartialSchemaMap<LMCart> = composeJoiPartialSchemaMap(validId, validCart);

export {
  validCart,
  validCartId
};