"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    details: [
        {
            key: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
    colors: [{ type: String, required: true }],
    unds: { type: Number, required: true },
    isFav: { type: Boolean, required: true },
    imgs: [
        {
            key: { type: String, required: true },
            src: { type: String, required: true },
            title: { type: String, required: true },
            alt: { type: String, required: true },
            main: { type: String, required: true },
        },
    ],
});
const ProductModel = (0, mongoose_1.model)("Product", productSchema.add, 'product');
exports.default = ProductModel;
//# sourceMappingURL=LMBProduct.js.map