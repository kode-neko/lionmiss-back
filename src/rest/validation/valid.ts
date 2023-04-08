import Joi from "joi";
import { LMBSearchParams } from "../../model/LMB/LMBSearchParms.js";
import { LIMIT_MAX_SEARCH } from "../config/constants.js";

const validId: Joi.StringSchema = Joi
  .string()
  .empty()
  .required()
;

const validParamSearch: Joi.ObjectSchema<LMBSearchParams> = Joi.object({
  limit: Joi
    .number()
    .integer()
    .min(0)
    .max(LIMIT_MAX_SEARCH)
    .required(),
  offset: Joi
    .number()
    .integer()
    .min(0)
    .required(),
  search: Joi.object()
})

export {
  validId, 
  validParamSearch
};