import { fixtureCart } from "./fixtureCart.js";
import { fixtureUsersInfo } from "./fixtureUsersInfo.js";
import { fixtureProducts } from "./fixtureProducts.js";
import { LMProduct, LMUser } from "lionmiss-core";
import { faker } from "@faker-js/faker";

const {database} = faker;

const fixtureUser: LMUser = {
  _id: database.mongodbObjectId(),
  cart: fixtureCart,
  user: fixtureUsersInfo[0],
  favProducts: fixtureProducts.slice(0, 3).map((p: LMProduct) => p._id),
};

export { fixtureUser };
