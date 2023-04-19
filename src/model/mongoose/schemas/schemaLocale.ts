import {Schema} from "mongoose";
import {LMBLocale} from "../../LMB/index";

const schemaLocale: Schema<LMBLocale> = new Schema<LMBLocale>(
  {
    name: {type: String, require: true},
  },
  {id: false}
);

export {schemaLocale};
