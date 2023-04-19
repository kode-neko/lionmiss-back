import {Db, MongoClient} from "mongodb";
import {Mongoose, connect} from "mongoose";

let urlDb: string;
let client: MongoClient;
let db: Db;
let mongooseDb: Mongoose;

async function initDbTest(): Promise<void> {
  const {DB_HOST, DB_PORT, DB_NAME} = process.env;
  urlDb = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  // MongoDb
  client = new MongoClient(urlDb);
  await client.connect();
  db = client.db(DB_NAME);
  // Mongoose
  mongooseDb = await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
}

async function cleanDbTest(): Promise<void> {
  if (mongooseDb) {
    await mongooseDb.disconnect();
  }
  if (client) {
    await client.close();
  }
}

function getDb(): Db {
  return db;
}

export {initDbTest, cleanDbTest, getDb};
