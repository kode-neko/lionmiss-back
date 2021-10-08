import { Schema } from "mongoose";
import { LMImg } from "lionmiss-core";

const schemaImg = new Schema<LMImg>({
  src: { type: String, required: true },
  title: { type: String, required: true },
  alt: { type: String, required: true },
  main: { type: Boolean, required: true },
});

export { schemaImg };
