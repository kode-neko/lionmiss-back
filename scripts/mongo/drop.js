async function dropCollections(db) {
  await db.listCollections().map(col => db[col].drop());
}

async function dropUsers(db) {
  await db.removeUser(process.env.DB_USER);
}

module.exports = {
  dropCollections,
  dropUsers
}
