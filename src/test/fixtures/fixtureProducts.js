"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureProducts = void 0;
const faker_1 = require("faker");
const lionmiss_core_1 = require("lionmiss-core");
const fixtureImgs_1 = require("./fixtureImgs");
const data_1 = require("./data");
const fixtureProducts = Array(data_1.constants.NUM_PRODUCTS)
    .fill({})
    .map(() => ({
    name: faker_1.commerce.productName(),
    price: Number(faker_1.commerce.price()),
    description: faker_1.commerce.productDescription(),
    details: [
        {
            key: "material",
            value: "cotton",
        },
        {
            key: "iron",
            value: "40º",
        },
        {
            key: "washing",
            value: "machine 100º",
        },
    ],
    colors: [lionmiss_core_1.LMColor.Red, lionmiss_core_1.LMColor.Green, lionmiss_core_1.LMColor.Blue],
    unds: 100,
    imgs: fixtureImgs_1.fixtureImgs.slice(0, 1),
}));
exports.fixtureProducts = fixtureProducts;
//# sourceMappingURL=fixtureProducts.js.map