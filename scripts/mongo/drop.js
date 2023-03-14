const { collections } = require("./constants");

async function dropCollections(db) {
  const colls = await db.listCollections().toArray();
  const promises = colls.map((coll) => db.collection(coll.name).drop());
  await Promise.all(promises);
}

async function dropUsers(db) {
  await db.removeUser(process.env.DB_USER);
}

module.exports = {
  dropCollections,
  dropUsers
}
