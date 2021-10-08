const { collections } = require("./constants");
const { countries, locales, products, userInfo } = require("./createMockData");

async function insertData(db) {
  const countryColl = db.collection(collections.COUNTRY);
  const productColl = db.collection(collections.PRODUCT);
  const userInfoColl = db.collection(collections.USER_INFO);
  const cartColl = db.collection(collections.CART);
  const shippingColl = db.collection(collections.SHIPPING);
  const localeColl = db.collection(collections.LOCALE);

  await countryColl.insertMany(countries);
  await productColl.insertMany(products);
  await userInfoColl.insertMany(userInfo);
  await cartColl.insertMany(countries);
  //await shippingColl.insertMany();
  await localeColl.insertMany(locales);
}

module.exports = {
  insertData,
};
