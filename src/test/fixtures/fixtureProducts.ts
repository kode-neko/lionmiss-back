import {faker} from "@faker-js/faker";
import {LMColor, LMProduct} from "lionmiss-core";
import {fixtureImgs} from "./fixtureImgs";
import {constants} from "./data/index";

const {commerce, database} = faker;

const fixtureProducts: LMProduct[] = Array(constants.NUM_PRODUCTS)
  .fill({})
  .map(() => ({
    _id: database.mongodbObjectId(),
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

export {fixtureProducts};
