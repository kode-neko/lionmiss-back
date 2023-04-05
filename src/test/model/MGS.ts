import { connection, connect, Collection } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo :MongoMemoryServer;

async function setUp(): Promise<void> {
  mongo = await MongoMemoryServer.create();
  const url: string = mongo.getUri();
  await connect(url);
}

async function dropDb(): Promise<void> {
  await connection.dropDatabase();
  await connection.close();
  await mongo.stop();
}

async function dropColls(): Promise<void> {
  const collections: { [index: string]: Collection } = connection.collections;
  Object.keys(collections).map(async (coll) => {
    await collections[coll].deleteMany({});
  });
}

export { setUp, dropDb, dropColls };
