import { Db, MongoClient } from "mongodb";

async function getDb(): Promise<[MongoClient, Db]> {
  const encodeUser: string = encodeURIComponent(process.env.DB_ADMIN);
  const encodePass: string = encodeURIComponent(process.env.DB_ADMIN_PASS);
  const credentials: string = `${encodeUser}:${encodePass}`;
  const host: string = `${process.env.DB_HOST}:${process.env.DB_PORT}`;
  const path: string = `mongodb://${credentials}@${host}/${process.env.DB_NAME}`;

  const client: MongoClient = new MongoClient(path);
  await client.connect();
  const db: Db = client.db(process.env.DB_NAME);

  return [client, db];
}

export default getDb;
