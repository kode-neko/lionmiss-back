import { faker } from "@faker-js/faker";
import { constants } from "./data/index.js";
import { fixtureAddresses } from "./fixtureAddresses.js";
import { LMUser } from "lionmiss-core";

const {internet} = faker;

const fixtureUsers: LMUser[] = Array(constants.NUM_USERS)
  .fill({})
  .map((_: LMUser, index: number) => ({
    username: internet.userName(),
    avatar: `avatar${index}.jpg`,
    lang: "en",
    currency: "EUR",
    measures: {
      chest: 110,
      waist: 60,
      hip: 90,
    },
    email: internet.email(),
    addresses: fixtureAddresses,
  }));

export { fixtureUsers };
