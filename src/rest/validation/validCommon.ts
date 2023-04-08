import Joi, { PartialSchemaMap, Schema } from "joi";
import { LMBSearchParams } from "../../model/LMB/LMBSearchParms.js";
import { LIMIT_MAX_SEARCH } from "../config/constants.js";

const validId: PartialSchemaMap<{_id: string}> = {
  _id: Joi
    .string()
    .empty()
    .required()
};

const validParamSearch: PartialSchemaMap<LMBSearchParams> = {
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
}

export {
  validId, 
  validParamSearch
};