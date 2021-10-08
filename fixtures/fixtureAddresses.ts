import { hacker, address, phone, internet, lorem } from "faker";
import { LMAddress } from "lionmiss-core";

const fixtureAddresses: LMAddress[] = Array(50)
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
