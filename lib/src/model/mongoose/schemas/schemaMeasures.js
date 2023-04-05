import { Schema } from "mongoose";
const schemaMeasures = new Schema({
    chest: { type: Number, required: true },
    waist: { type: Number, required: true },
    hip: { type: Number, required: true },
    size: { type: String },
}, { id: false });
export { schemaMeasures };
//# sourceMappingURL=schemaMeasures.js.map