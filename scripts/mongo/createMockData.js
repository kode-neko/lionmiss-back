const faker = require("faker");
const colors = require("./data/colors.json");
const sizes = require("./data/sizes.json");
const countryRaw = require("./data/countryRaw.json");
const locales = require("./data/locales.json");

const NUM_PRODUCTS = 50;
const NUM_USERS = 2;
const NUM_IMGS = 100;
const NUM_ADDRESS = 3;

const countries = countryRaw.map((c) => ({
  name: c.country,
  nameCode: c.country_iso_2_char_code,
  currency: c.currency_iso_3_char_code,
  currencyName: c.currency_name,
}));

const imgs = Array(NUM_IMGS)
  .fill({})
  .map((_, index) => ({
    src: `img${index}.jpg`,
    title: "A piece of clothes",
    alt: "An example of piece of clothes",
    main: index === 0,
  }));

const addresses = Array(NUM_ADDRESS)
  .fill(2)
  .map(() => ({
    name: faker.hacker.noun(),
    address: faker.address.streetAddress(),
    country: faker.address.country(),
    state: faker.address.state(),
    town: faker.address.cityName(),
    zip: faker.address.zipCode(),
    phone: faker.phone.phoneNumber(),
    mail: faker.internet.email(),
    comments: faker.lorem.words(),
  }));

const products = Array(NUM_PRODUCTS)
  .fill({})
  .map(() => ({
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
    colors: ["red", "blue", "green"],
    unds: 100,
    imgs: imgs,
  }));

const users = Array(NUM_USERS)
  .fill({})
  .map((_, index) => ({
    username: faker.internet.userName(),
    avatar: `avatar${index}.jpg`,
    lang: "en",
    currency: "EUR",
    measures: {
      chest: 110,
      waist: 60,
      hip: 90,
    },
    email: faker.internet.email(),
    addresses: addresses,
  }));

module.exports = {
  countries,
  locales,
  colors,
  sizes,
  imgs,
  addresses,
  products,
  users,
};
