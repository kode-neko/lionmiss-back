"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureCountries = void 0;
const data_1 = require("./data");
const fixtureCountries = data_1.rawCountries.map((c) => ({
    name: c.country,
    nameCode: c.country_iso_2_char_code,
    currency: c.currency_iso_3_char_code,
    currencyName: c.currency_name,
}));
exports.fixtureCountries = fixtureCountries;
//# sourceMappingURL=fixtureCountries.js.map