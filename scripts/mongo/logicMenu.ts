import { Db } from "mongodb";
// import createCollections from "./createDb.js";
// import createUser from "./createDbUsers.js";
import { dropCollections } from "./drop.js";
import { insertData } from "./insertMockDataDb.js";

const funcs: {[key: string]: (db: Db) => Promise<void> } = {
  createAll: async (db: Db) => {
    await insertData(db);
    // await createUser(db);
  },
  dropAll: async (db: Db) => {
    await dropCollections(db);
    // await dropUsers(db);
  },
};

// eslint-disable-next-line @typescript-eslint/typedef
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

export default options;
