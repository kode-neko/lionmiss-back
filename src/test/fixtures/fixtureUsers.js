"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureUsers = void 0;
const faker_1 = require("faker");
const data_1 = require("./data");
const fixtureAddresses_1 = require("./fixtureAddresses");
const fixtureUsers = Array(data_1.constants.NUM_USERS)
    .fill({})
    .map((_, index) => ({
    username: faker_1.internet.userName(),
    avatar: `avatar${index}.jpg`,
    lang: "en",
    currency: "EUR",
    measures: {
        chest: 110,
        waist: 60,
        hip: 90,
    },
    email: faker_1.internet.email(),
    addresses: fixtureAddresses_1.fixtureAddresses,
}));
exports.fixtureUsers = fixtureUsers;
//# sourceMappingURL=fixtureUsers.js.map