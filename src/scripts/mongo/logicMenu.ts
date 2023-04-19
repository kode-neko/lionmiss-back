import {Db} from "mongodb";
// import createCollections from "./createDb";
// import createUser from "./createDbUsers";
import {dropCollections} from "./drop";
import {insertData} from "./insertMockDataDb";

const funcs: {[key: string]: (db: Db) => Promise<void>} = {
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
