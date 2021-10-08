const { collections } = require("./constants");

async function createCollections(db) {
  await db.createCollection(collections.COUNTRY);
  await db.createCollection(collections.PRODUCT);
  await db.createCollection(collections.USER_INFO);
  await db.createCollection(collections.CART);
  await db.createCollection(collections.SHIPPING);
  await db.createCollection(collections.LOCALE);
}

module.exports = { createCollections };
