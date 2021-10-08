import { Schema } from "mongoose";
import { LMMeasures } from "lionmiss-core";

const schemaMeasures = new Schema<LMMeasures>(
  {
    chest: { type: Number, required: true },
    waist: { type: Number, required: true },
    hip: { type: Number, required: true },
    size: { type: String },
  },
  { id: false }
);

export { schemaMeasures };
