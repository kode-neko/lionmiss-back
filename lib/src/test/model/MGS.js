import { connection, connect } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
let mongo;
async function setUp() {
    mongo = await MongoMemoryServer.create();
    const url = mongo.getUri();
    await connect(url);
}
async function dropDb() {
    await connection.dropDatabase();
    await connection.close();
    await mongo.stop();
}
async function dropColls() {
    const collections = connection.collections;
    Object.keys(collections).map(async (coll) => {
        await collections[coll].deleteMany({});
    });
}
export { setUp, dropDb, dropColls };
//# sourceMappingURL=MGS.js.map