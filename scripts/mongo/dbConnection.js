const { MongoClient } = require("mongodb");

async function getDb() {
  const encodeUser = encodeURIComponent(process.env.DB_ADMIN);
  const encodePass = encodeURIComponent(process.env.DB_ADMIN_PASS);
  const credentials = `${encodeUser}:${encodePass}`;
  const host = `${process.env.DB_HOST}:${process.env.DB_PORT}`;
  const path = `mongodb://${credentials}@${host}/${process.env.DB_NAME}`;

  const client = new MongoClient(path);
  await client.connect();
  const db = client.db(process.env.DB_NAME);

  return [client, db];
}

module.exports = {
  getDb,
};
