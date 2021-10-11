"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureUserInfo = void 0;
const fixtureCart_1 = require("./fixtureCart");
const fixtureUsers_1 = require("./fixtureUsers");
const fixtureProducts_1 = require("./fixtureProducts");
const fixtureUserInfo = {
    cart: fixtureCart_1.fixtureCart,
    user: fixtureUsers_1.fixtureUsers[0],
    favProducts: fixtureProducts_1.fixtureProducts.slice(0, 3).map((p) => p._id),
};
exports.fixtureUserInfo = fixtureUserInfo;
//# sourceMappingURL=fixtureUserInfo.js.map