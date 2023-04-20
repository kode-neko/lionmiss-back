import Joi, { PartialSchemaMap } from 'joi';
import { LMImg } from 'lionmiss-core';
import { composeJoiPartialSchemaMap } from '../utils/validUtils';
import { validId } from './validCommon';

const validImg: PartialSchemaMap<LMImg> = {
  src: Joi
    .string()
    .empty()
    .max(250)
    .required(),
  title: Joi
    .string()
    .max(100),
  alt: Joi
    .string()
    .max(100),
  main: Joi
    .boolean(),
};

const validImgId: PartialSchemaMap<LMImg> = composeJoiPartialSchemaMap(validId, validImg);

export {
  validImg,
  validImgId
};