import { Schema } from "mongoose";
const schemaImg = new Schema({
    src: { type: String, required: true },
    title: { type: String, required: true },
    alt: { type: String, required: true },
    main: { type: Boolean, required: true },
});
export { schemaImg };
//# sourceMappingURL=schemaImg.js.map