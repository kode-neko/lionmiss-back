import { Schema } from "mongoose";
import { schemaCart } from './schemaCart.js';
const schemaShipping = new Schema({
    initDate: { type: Date, required: true },
    finishDate: { type: Date, required: true },
    priceShipping: { type: Number, required: true },
    shippingMethod: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    cart: schemaCart,
});
export { schemaShipping };
//# sourceMappingURL=schemaShipping.js.map