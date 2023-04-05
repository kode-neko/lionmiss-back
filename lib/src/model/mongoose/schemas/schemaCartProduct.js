import { Schema } from "mongoose";
import { LMSize, LMColor, enumStringToList, } from "lionmiss-core";
import { schemaProduct } from "./schemaProduct.js";
const schemaCartProduct = new Schema({
    size: { type: String, required: true, enum: enumStringToList(LMSize) },
    color: { type: String, required: true, enum: enumStringToList(LMColor) },
    unds: { type: Number, required: true },
    product: schemaProduct,
}, { id: false });
export { schemaCartProduct };
//# sourceMappingURL=schemaCartProduct.js.map