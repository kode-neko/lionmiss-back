import { faker } from "@faker-js/faker";
import { LMColor, LMProduct } from "lionmiss-core";
import { fixtureImgs } from "./fixtureImgs.js";
import { constants } from "./data/index.js";

const {commerce} = faker;

const fixtureProducts: LMProduct[] = Array(constants.NUM_PRODUCTS)
  .fill({})
  .map(() => ({
    name: commerce.productName(),
    price: Number(commerce.price()),
    description: commerce.productDescription(),
    details: [
      {
        key: "material",
        value: "cotton",
      },
      {
        key: "iron",
        value: "40º",
      },
      {
        key: "washing",
        value: "machine 100º",
      },
    ],
    colors: [LMColor.Red, LMColor.Green, LMColor.Blue],
    unds: 100,
    imgs: fixtureImgs.slice(0, 1),
  }));

export { fixtureProducts };
