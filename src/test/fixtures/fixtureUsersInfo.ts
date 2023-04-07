import { faker } from "@faker-js/faker";
import { constants } from "./data/index.js";
import { fixtureAddresses } from "./fixtureAddresses.js";
import { LMUserInfo } from "lionmiss-core";

const {internet} = faker;

const fixtureUsersInfo: LMUserInfo[] = Array(constants.NUM_USERS)
  .fill({})
  .map((_: LMUserInfo, index: number) => ({
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

export { fixtureUsersInfo };
