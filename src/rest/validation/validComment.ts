import Joi, { PartialSchemaMap } from 'joi';
import { LMComment } from 'lionmiss-core';
import { composeJoiPartialSchemaMap } from '../utils/validUtils.js';
import { validId } from './validCommon.js';
import { validImg, validMeasures, validUser } from './index.js';

const validComments: PartialSchemaMap<LMComment> = {
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
    .required(),
  measures: Joi
    .object(validMeasures),
  user: Joi
    .object(validUser),
  imgs: Joi
    .array()
    .items(Joi.object(validImg))
    .required(),
};

const validCommentsId: PartialSchemaMap<LMComment> = composeJoiPartialSchemaMap(validId, validComments);

export {
  validCommentsId, 
  validComments
};