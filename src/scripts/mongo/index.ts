import * as dotenv from "dotenv";
import getDb from "./dbConnection";
import { insertData } from "./insertMockDataDb";
import { dropCollections } from "./drop";

// Select .env doc
if(process.env.NODE_ENV === 'development') {
  dotenv.config({path: '.env.dev'});
} else {
  dotenv.config();
}

let db;

getDb()
  .then(([_, dbAux]) => {
    db = dbAux;
    return  dropCollections(db);
  })
  .then(() => insertData(db))
  .then(() => console.log("🥳  Data inserted"))
  .catch((err: Error) => console.log("💀  There is an error: " + err))
  .finally(() => process.exit(1));
