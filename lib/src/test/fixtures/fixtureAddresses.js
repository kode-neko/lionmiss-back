import { faker } from "@faker-js/faker";
const { hacker, address, phone, internet, lorem } = faker;
const fixtureAddresses = Array(50)
    .fill({})
    .map((_, index) => ({
    name: hacker.noun(),
    adress: address.streetAddress(),
    country: address.country(),
    state: address.state(),
    town: address.cityName(),
    zip: address.zipCode(),
    phone: phone.phoneNumber(),
    mail: internet.email(),
    comments: lorem.words(),
    main: index === 0,
}));
export { fixtureAddresses };
//# sourceMappingURL=fixtureAddresses.js.map