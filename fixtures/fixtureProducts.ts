import { commerce } from "faker";
import { LMColor, LMProduct } from "lionmiss-core";
import { fixtureImgs } from "./fixtureImgs";
import { constants } from "./data";

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
    imgs: fixtureImgs,
  }));

export { fixtureProducts };
