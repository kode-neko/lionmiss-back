import { Schema } from "mongoose";
import { LMProductProps } from "lionmiss-core";

const schemaProductProps: Schema<LMProductProps> = new Schema<LMProductProps>(
  {
    key: { type: String, required: true },
    value: { type: String, required: true },
  },
  { id: false }
);

export { schemaProductProps };
