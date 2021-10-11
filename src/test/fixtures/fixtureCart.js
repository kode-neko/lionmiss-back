"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureCart = void 0;
const lionmiss_core_1 = require("lionmiss-core");
const fixtureProducts_1 = require("./fixtureProducts");
const fixturePromo_1 = require("./fixturePromo");
const fixtureCart = {
    products: [
        {
            size: lionmiss_core_1.LMSize.L,
            color: lionmiss_core_1.LMColor.Aqua,
            unds: 2,
            product: fixtureProducts_1.fixtureProducts[0],
        },
    ],
    promo: fixturePromo_1.fixturePromo,
    taxes: 21,
};
exports.fixtureCart = fixtureCart;
//# sourceMappingURL=fixtureCart.js.map