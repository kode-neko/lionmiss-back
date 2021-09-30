const { collections } = require("./constants");

async function createCollections(db) {
  await db.createCollection(collections.USER);
  await db.createCollection(collections.PRODUCT);
  await db.createCollection(collections.PRODUCT_LANG);
  await db.createCollection(collections.CART);
  await db.createCollection(collections.SHIPPING);
  await db.createCollection(collections.PROMO);
  await db.createCollection(collections.LOCALE);
  await db.createCollection(collections.COUNTRY);
  await db.createCollection(collections.COLOR);
  await db.createCollection(collections.SIZE);
}

module.exports = { createCollections };
