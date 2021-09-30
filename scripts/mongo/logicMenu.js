const { createCollections } = require("./createDb");
const { createUser } = require("./createDbUsers");
const { dropCollections, dropUsers } = require("./drop");
const { insertData } = require("./insertMockDataDb");

const funcs = {
  createAll: async (db) => {
    await insertData(db);
    await createUser(db);
  },
  dropAll: async (db) => {
    await dropCollections(db);
    await dropUsers(db);
  },
};

const options = {
  createAll: {
    opt: {
      name: "Create collections + users + data",
      value: "createAll",
      short: "1",
    },
    func: funcs.createAll,
  },
  dropAll: {
    opt: {
      name: "Drop all",
      value: "dropAll",
      short: "4",
    },
    func: funcs.dropAll,
  },
};

module.exports = { options };
