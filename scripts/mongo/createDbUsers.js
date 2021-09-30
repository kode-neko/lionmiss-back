async function createUser(db) {
  await db.addUser(process.env.DB_USER, process.env.DB_USER_PASS, {
    roles: ["readWrite"],
  });
}

module.exports = {
  createUser,
};
