import Joi, { PartialSchemaMap } from 'joi';
import { LMBLocale } from '../../model/LMB/LMBLocale';

const validLocale: PartialSchemaMap<LMBLocale> = {
  name: Joi
    .string()
    .empty()
    .max(4)
    .required(),
};

export { 
  validLocale 
};