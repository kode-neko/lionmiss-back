import Joi from 'joi';
import { LMImg } from 'lionmiss-core';

const validImg: Joi.ObjectSchema<LMImg> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  src: Joi
    .string()
    .empty()
    .required(),
  title: Joi
    .string()
    .empty()
    .required(),
  alt: Joi
    .string()
    .empty()
    .required(),
  main: Joi
    .string()
    .empty()
    .required(),
});

export default validImg;