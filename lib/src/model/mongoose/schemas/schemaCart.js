import { Schema } from "mongoose";
import { schemaCartProduct } from "./schemaCartProduct.js";
const schemaCart = new Schema({
    products: [schemaCartProduct],
    promo: { type: { type: String }, qty: { type: Number, required: true } },
    taxes: { type: Number, required: true },
}, { id: false });
export { schemaCart };
//# sourceMappingURL=schemaCart.js.map