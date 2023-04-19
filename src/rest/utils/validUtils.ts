import Joi, { PartialSchemaMap, Schema } from "joi";

function composeJoiPartialSchemaMap(...list: PartialSchemaMap[]): PartialSchemaMap {
  return list.reduce(
    (prev:PartialSchemaMap, act: PartialSchemaMap) => ({...act, ...prev})
  , {});
}

function composeJoiScheme(...list: PartialSchemaMap[]): Schema {
  return Joi.object(composeJoiPartialSchemaMap(...list));
}

function validateEnum(enumType: {[key: string]: string | number}) {
  return function (value: string | string[], helpers: Joi.ExternalHelpers) {
    const colorList: (string | number)[] = Object.values(enumType);
  
    let validationColorList: boolean;
    if(typeof value === 'string')
      validationColorList = colorList.includes(value);
    else
      validationColorList = 
      value.every((colSel: string) => colorList.includes(colSel));
    
    return validationColorList || helpers.error('any.invalid');
  }
}

export {
  composeJoiPartialSchemaMap,
  composeJoiScheme,
  validateEnum
}