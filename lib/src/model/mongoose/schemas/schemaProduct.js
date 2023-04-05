import { Schema } from "mongoose";
import { schemaProductProps } from "./schemaProductProps.js";
import { schemaImg } from "./schemaImg.js";
const schemaProduct = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    details: [schemaProductProps],
    colors: [{ type: String, required: true }],
    unds: { type: Number, required: true },
    imgs: [schemaImg],
});
export { schemaProduct };
//# sourceMappingURL=schemaProduct.js.map