"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureAddresses = void 0;
const faker_1 = require("faker");
const fixtureAddresses = Array(50)
    .fill({})
    .map((_, index) => ({
    name: faker_1.hacker.noun(),
    adress: faker_1.address.streetAddress(),
    country: faker_1.address.country(),
    state: faker_1.address.state(),
    town: faker_1.address.cityName(),
    zip: faker_1.address.zipCode(),
    phone: faker_1.phone.phoneNumber(),
    mail: faker_1.internet.email(),
    comments: faker_1.lorem.words(),
    main: index === 0,
}));
exports.fixtureAddresses = fixtureAddresses;
//# sourceMappingURL=fixtureAddresses.js.map