import { faker } from "@faker-js/faker";
import { LMAddress } from "lionmiss-core";

const {hacker, address, phone, internet, lorem} = faker;

const fixtureAddresses: LMAddress[] = Array(50)
  .fill({})
  .map((_: LMAddress, index: number) => ({
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
