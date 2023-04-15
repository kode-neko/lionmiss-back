import * as dotenv from 'dotenv';
import path, { join } from 'path';
import { Mongoose, connect, set as setMongoose } from "mongoose";
import {ApolloServer, ServerInfo } from 'apollo-server';
import { makeSchema } from 'nexus';
import * as allTypes from './types/index.js';
import { fileURLToPath } from 'url';
import { NexusGraphQLSchema } from 'nexus/dist/core.js';

dotenv.config()

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

export const schema: NexusGraphQLSchema = makeSchema({
  types: allTypes,
  
  outputs: {
    schema: join(__dirname, 'lionmiss-schema.graphql'),
    typegen: join(__dirname, 'lionmiss-typegen.ts')
  }
})

function init() {
  //  DB config connect
  setMongoose('strictQuery', true);
  const promiseDB: Promise<Mongoose> = connect('mongodb://localhost:27017/lionmiss?authSource=' + process.env.DB_NAME, {
    user: process.env.DB_USER,
    pass: process.env.DB_USER_PASS,
  });

  // Connect DB + Init API GQL
  promiseDB
    .then(() => {
      console.log(`🗃️  Connected to DB`);
      const server: ApolloServer = new ApolloServer({schema});
      return server.listen();
    })
    .then(({url}: ServerInfo) => console.log(`🚀 Server is ready at ${url}`))
    .catch((err: Error) => console.error('💀', err));
}

init();