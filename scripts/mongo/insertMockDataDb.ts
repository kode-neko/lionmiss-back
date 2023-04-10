import { LMProduct } from "lionmiss-core";
import { 
  fixtureCart,
  fixtureCountries,
  fixtureLocales,
  fixtureProducts,
  fixtureUser,
  fixtureUsersInfo 
} from "../../src/test/fixtures/index.js";
import { collections } from "./constants.js";
import { Collection, Db, ObjectId } from "mongodb";

async function insertData(db: Db) {
  const countryColl: Collection = db.collection(collections.COUNTRY);
  const localeColl: Collection = db.collection(collections.LOCALE);
  const productColl: Collection = db.collection(collections.PRODUCT);
  const userInfoColl: Collection = db.collection(collections.USER_INFO);
  const userColl: Collection = db.collection(collections.USER);
  const cartColl: Collection = db.collection(collections.CART);
  // const shippingColl: Collection = db.collection(collections.SHIPPING);

  await countryColl.insertMany(fixtureCountries);
  await localeColl.insertMany(fixtureLocales);
  await productColl.insertMany(fixtureProducts.map((p: LMProduct) => ({...p, _id:  new ObjectId(p._id)})));
  await userInfoColl.insertMany(fixtureUsersInfo);
  await userColl.insertMany([{...fixtureUser, _id: new ObjectId(fixtureUser._id)}]);
  await cartColl.insertMany([{...fixtureCart, _id: new ObjectId(fixtureCart._id)}]);
  // await shippingColl.insertMany([]);
}

export {
  insertData,
};
