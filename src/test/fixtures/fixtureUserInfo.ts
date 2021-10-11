import { fixtureCart } from "./fixtureCart";
import { fixtureUsers } from "./fixtureUsers";
import { fixtureProducts } from "./fixtureProducts";

const fixtureUserInfo = {
  cart: fixtureCart,
  user: fixtureUsers[0],
  favProducts: fixtureProducts.slice(0, 3).map((p) => p._id),
};

export { fixtureUserInfo };
