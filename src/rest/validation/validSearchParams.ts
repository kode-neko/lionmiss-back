import Joi, {PartialSchemaMap} from "joi";
import {LMBSearchParams} from "../../model/LMB/LMBSearchParms";

const validSearchParams: PartialSchemaMap<LMBSearchParams> = {
  limit: Joi.number().integer().min(0).required(),
  offset: Joi.number().integer().min(0).required(),
  search: Joi.string().min(0),
};

export {validSearchParams};
