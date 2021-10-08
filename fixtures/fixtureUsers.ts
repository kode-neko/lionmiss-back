import { internet } from "faker";
import { constants } from "./data";
import { fixtureAddresses } from "./fixtureAddresses";

const fixtureUsers = Array(constants.NUM_USERS)
  .fill({})
  .map((_, index) => ({
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
