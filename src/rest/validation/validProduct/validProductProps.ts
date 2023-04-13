import Joi, { PartialSchemaMap } from 'joi';
import { LMProductProps } from 'lionmiss-core';
import { composeJoiPartialSchemaMap } from '../../utils/validUtils.js';
import { validId } from '../validCommon.js';

const validProductProps: PartialSchemaMap<LMProductProps> = {
  key: Joi
    .string()
    .max(30)
    .empty()
    .required(),
  value: Joi
    .string()
    .max(30)
    .empty()
    .required(),
};

const validProductPropsId: PartialSchemaMap<LMProductProps> = composeJoiPartialSchemaMap(validId, validProductProps);

export {
  validProductProps,
  validProductPropsId
};