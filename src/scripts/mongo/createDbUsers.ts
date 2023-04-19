import { Db } from "mongodb";

async function createUser(db: Db) {
  await db.addUser(process.env.DB_USER, process.env.DB_USER_PASS, {
    roles: ["readWrite"],
  });
}

module.exports = {
  createUser,
};
