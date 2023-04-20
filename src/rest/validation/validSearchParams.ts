import Joi, {PartialSchemaMap} from "joi";
import {LMPromoType} from "lionmiss-core";
import {validateEnum} from "../utils/validUtils";
import {LMBSearchParams} from "../../model/LMB/LMBSearchParms";

const validSearchParams: PartialSchemaMap<LMBSearchParams> = {
  limit: Joi.string().custom(validateEnum(LMPromoType)).required(),
  offset: Joi.number().integer().min(0).required(),
  search: Joi.array().items(Joi.string()).required(),
};

export {validSearchParams};
