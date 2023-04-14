import * as dotenv from 'dotenv';
import path, { join } from 'path';
import {readFile} from 'node:fs/promises';
import { connect, set as setMongoose } from "mongoose";
import {ApolloServer, gql } from 'apollo-server';
// import schema from './schema/index.js';
import {productResolvers} from './resolvers/index.js';
import { makeSchema } from 'nexus';
import * as allTypes from './types/index.js';
import { fileURLToPath } from 'url';
dotenv.config()

/*
function init() {
  //  DB config connect
  setMongoose('strictQuery', true);
  const promiseDB = connect('mongodb://localhost:27017/lionmiss?authSource=' + process.env.DB_NAME, {
    user: process.env.DB_USER,
    pass: process.env.DB_USER_PASS,
  });

  // Read schema files
  const promisesTypeDef = Object.values(schema).map(sch => 
    readFile(
      path.resolve(`src/graphql/schema/${sch}.graphql`), 
      { encoding: 'utf-8' }
    )
  );
  const promisesTypeDefs = Promise.all(promisesTypeDef)

  // Connect DB + Init API GQL
  promiseDB
    .then(() => {
      console.log('Connected to DB');
      return promisesTypeDefs
    })
    .then(typeDefsList => {
      const typeDefs = gql`${typeDefsList.join('\n')}`;
      const server = new ApolloServer({ typeDefs, resolvers: productResolvers.default });
      return server.listen();
    })
    .then(({url}) => console.log(`🚀 Server is ready at ${url}`))
    .catch(err => console.error(err));
}

init();
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const schema = makeSchema({
  types: allTypes,
  
  outputs: {
    schema: join(__dirname, 'lionmiss-schema.graphql'),
    typegen: join(__dirname, 'lionmiss-typegen.ts')
  }
})

function init() {
  //  DB config connect
  setMongoose('strictQuery', true);
  const promiseDB = connect('mongodb://localhost:27017/lionmiss?authSource=' + process.env.DB_NAME, {
    user: process.env.DB_USER,
    pass: process.env.DB_USER_PASS,
  });

  // Connect DB + Init API GQL
  promiseDB
    .then(() => {
      console.log(`🗃️  Connected to DB`);
      const server = new ApolloServer({schema});
      return server.listen();
    })
    .then(({url}) => console.log(`🚀 Server is ready at ${url}`))
    .catch(err => console.error('💀', err));
}

init();