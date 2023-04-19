import {faker} from "@faker-js/faker";
import {LMCart, LMSize, LMColor} from "lionmiss-core";
import {fixtureProducts} from "./fixtureProducts";
import {fixturePromo} from "./fixturePromo";

const {database} = faker;

const fixtureCart: LMCart = {
  _id: database.mongodbObjectId(),
  products: [
    {
      size: LMSize.L,
      color: LMColor.Aqua,
      unds: 2,
      product: fixtureProducts[0],
    },
  ],
  promo: fixturePromo,
  taxes: 21,
};

export {fixtureCart};
