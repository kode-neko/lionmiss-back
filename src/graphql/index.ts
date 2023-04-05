import * as dotenv from 'dotenv';
import path from 'path';
import {readFile} from 'node:fs/promises';
import { connect, set as setMongoose } from "mongoose";
import {ApolloServer, gql} from 'apollo-server';
import schema from './schema/index.js';
import {productResolvers} from './resolvers/index.js';

dotenv.config()

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
    .then(({port}) => console.log(`Server is runing in port "${port}"`))
    // .catch(err => console.error(err));
}

init();