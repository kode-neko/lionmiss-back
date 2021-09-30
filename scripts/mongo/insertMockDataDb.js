const { collections } = require("./constants");
const {
  countries,
  locales,
  colors,
  sizes,
  products,
  users,
} = require("./createMockData");

async function insertData(db) {
  const userColl = db.collection(collections.USER);
  const productColl = db.collection(collections.PRODUCT);
  const productLangColl = db.collection(collections.PRODUCT_LANG);
  const cartColl = db.collection(collections.CART);
  const promoColl = db.collection(collections.PROMO);
  const localeColl = db.collection(collections.LOCALE);
  const countryColl = db.collection(collections.COUNTRY);
  const colorColl = db.collection(collections.COLOR);
  const sizeColl = db.collection(collections.SIZE);
  await userColl.insertMany(users);
  await productColl.insertMany(products);
  await localeColl.insertMany(locales);
  await countryColl.insertMany(countries);
  await colorColl.insertMany(colors);
  await sizeColl.insertMany(sizes);
}

module.exports = {
  insertData,
};
