import * as faker from "faker";
import {
  LMCart,
  LMCountry,
  LMImg,
  LMProduct,
  LMPromo,
  LMPromoType,
  LMShipping,
  LMUser,
  LMSize,
  LMColor,
} from "lionmiss-core";

const img: LMImg = {
  src: `img01.jpg`,
  title: "A piece of clothes",
  alt: "An example of piece of clothes",
  main: true,
};

const product: LMProduct = {
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
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
  colors: [LMColor.Blue, LMColor.Red, LMColor.Green],
  imgs: [img],
  unds: 10,
};

const promo: LMPromo = {
  type: LMPromoType.Percent,
  qty: 3,
};

const cart: LMCart = {
  products: [
    {
      size: LMSize.L,
      color: LMColor.Aqua,
      unds: 2,
      product: product,
    },
  ],
  promo,
  taxes: 21,
};

const user: LMUser = {
  username: faker.internet.userName(),
  avatar: `avatar01.jpg`,
  lang: "en",
  currency: "EUR",
  measures: {
    chest: 110,
    waist: 60,
    hip: 90,
  },
  email: faker.internet.email(),
  addresses: [],
};

const country: LMCountry = {
  name: "United States of America",
  nameCode: "US",
  currency: "USD",
  currencyName: "United States dollar",
};

const shipping: LMShipping = {
  initDate: new Date(),
  finishDate: new Date(),
  priceShipping: 100,
  shippingMethod: "24h",
  paymentMethod: "bitcoin",
  cart: cart,
};

export { img, product, promo, cart, user, country, shipping };
