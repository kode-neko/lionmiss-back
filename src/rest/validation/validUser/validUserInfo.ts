import Joi from 'joi';
import { LMProduct } from 'lionmiss-core';
import validCart from '../validCart/validCart.js';
import validUser from './validUser.js';

const validUserInfo: Joi.ObjectSchema<LMProduct> = Joi.object({
  _id: Joi
    .string()
    .empty()
    .required(),
  cart: validCart,
  user: validUser,
  favProducts: Joi.array().items(Joi.string())
});

export default validUserInfo;