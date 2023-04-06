import Joi from 'joi';
import { LMProductProps } from 'lionmiss-core';

const validProductProps: Joi.ObjectSchema<LMProductProps> = Joi.object({
  key: Joi
    .string()
    .empty()
    .required(),
  value: Joi
    .string()
    .empty()
    .required(),
});

export default validProductProps;