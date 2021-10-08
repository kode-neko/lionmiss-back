const { collections } = require("./constants");
const {
  fixtureCountries,
  fixtureProducts,
  fixtureUserInfo,
  fixtureCart,
  fixtureLocales,
} = require("../../fixtures");

async function insertData(db) {
  const countryColl = db.collection(collections.COUNTRY);
  const productColl = db.collection(collections.PRODUCT);
  const userInfoColl = db.collection(collections.USER_INFO);
  const cartColl = db.collection(collections.CART);
  const shippingColl = db.collection(collections.SHIPPING);
  const localeColl = db.collection(collections.LOCALE);

  await countryColl.insertMany(fixtureCountries);
  await productColl.insertMany(fixtureProducts);
  await userInfoColl.insertMany([fixtureUserInfo]);
  await cartColl.insertMany([fixtureCart]);
  //await shippingColl.insertMany();
  await localeColl.insertMany(fixtureLocales);
}

module.exports = {
  insertData,
};
