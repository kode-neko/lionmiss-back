import {Db, MongoClient} from "mongodb";
import {MongoMemoryServer} from "mongodb-memory-server";
import {Mongoose, connect} from "mongoose";

let mongoMem: MongoMemoryServer;
let urlDb: string;
let client: MongoClient;
let db: Db;
let mongooseDb: Mongoose;

async function initDbTest(): Promise<void> {
  // Mem
  mongoMem = await MongoMemoryServer.create();
  urlDb = mongoMem.getUri();
  // MongoDb
  client = new MongoClient(urlDb);
  await client.connect();
  db = client.db("lionmiss");
  // Mongoose
  mongooseDb = await connect(urlDb + "lionmiss?authSource=lionmiss");
}

async function cleanDbTest(): Promise<void> {
  await mongooseDb.disconnect();
  await client.close();
  await mongoMem.stop();
}

function getDb(): Db {
  return db;
}

export {initDbTest, cleanDbTest, getDb};
