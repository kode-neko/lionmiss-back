import Joi, { PartialSchemaMap } from 'joi';
import { LMCartProduct, LMColor, LMSize } from 'lionmiss-core';
import { composeJoiPartialSchemaMap, validateEnum } from '../../utils/validUtils';
import { validId } from '../validCommon';
import { validProduct } from '../index';

const validCartProduct: PartialSchemaMap<LMCartProduct> = {
  size: Joi
    .string()
    .custom(validateEnum(LMSize))
    .required(),
  color: Joi
    .string()
    .custom(validateEnum(LMColor)),
  unds: Joi
    .number()
    .integer()
    .min(0)
    .required(),
  product: Joi
    .object(validProduct)
    .required(),
};

const validCartProductId: PartialSchemaMap<LMCartProduct> = composeJoiPartialSchemaMap(validId, validCartProduct);

export {
  validCartProduct,
  validCartProductId
};