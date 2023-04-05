import { fixtureCart } from "./fixtureCart.js";
import { fixtureUsers } from "./fixtureUsers.js";
import { fixtureProducts } from "./fixtureProducts.js";

const fixtureUserInfo = {
  cart: fixtureCart,
  user: fixtureUsers[0],
  favProducts: fixtureProducts.slice(0, 3).map((p) => p._id),
};

export { fixtureUserInfo };
