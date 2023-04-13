import { CollectionInfo, Db } from "mongodb";

async function dropCollections(db: Db) {
  const colls: (CollectionInfo | Pick<CollectionInfo, "name" | "type">)[] = await db.listCollections().toArray();
  const promises: Promise<boolean>[] = colls.map((coll: CollectionInfo) => db.collection(coll.name).drop());
  await Promise.all(promises);
}

async function dropUsers(db: Db) {
  await db.removeUser(process.env.DB_USER);
}

export {
  dropCollections,
  dropUsers
}
