import {faker} from "@faker-js/faker";
import {constants} from "./data/index";
import {fixtureAddresses} from "./fixtureAddresses";
import {LMProduct, LMUserInfo} from "lionmiss-core";
import {fixtureProducts} from "./fixtureProducts";
import {fixtureCart} from "./fixtureCart";

const {internet} = faker;

const fixtureUsersInfo: LMUserInfo[] = Array(constants.NUM_USERS)
  .fill({})
  .map((_: LMUserInfo, index: number) => ({
    cart: fixtureCart,
    favProducts: fixtureProducts.slice(0, 3).map((p: LMProduct) => p._id),
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

export {fixtureUsersInfo};
