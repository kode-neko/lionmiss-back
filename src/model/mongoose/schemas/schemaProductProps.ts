import { Schema } from "mongoose";
import { LMProductProps } from "lionmiss-core";

const schemaProductProps = new Schema<LMProductProps>({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

export { schemaProductProps };
