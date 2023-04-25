import * as dotenv from "dotenv";
import getDb from "./dbConnection";
import { insertData } from "./insertMockDataDb";
import { dropCollections } from "./drop";

dotenv.config();

async function init() {
  const [_, db] = await getDb();
  await dropCollections(db);
  await insertData(db);
}

init();