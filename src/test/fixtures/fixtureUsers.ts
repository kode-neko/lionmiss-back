import { fixtureCart } from "./fixtureCart.js";
import { fixtureUsersInfo } from "./fixtureUsersInfo.js";
import { fixtureProducts } from "./fixtureProducts.js";
import { LMUser } from "lionmiss-core";

const fixtureUsers: LMUser = {
  cart: fixtureCart,
  user: fixtureUsersInfo[0],
  favProducts: fixtureProducts.slice(0, 3).map((p) => p._id),
};

export { fixtureUsers };
