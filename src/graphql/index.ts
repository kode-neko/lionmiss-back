import path from 'path';
import {readFile} from 'node:fs/promises';
import { connect } from "mongoose";
import {ApolloServer, gql} from 'apollo-server';
import schema from './schema';
import {productResolvers} from './resolvers';

function init() {
  const promisesTypeDef = Object.values(schema).map(sch => 
    readFile(
      path.resolve(`src/graphql/schema/${sch}.graphql`), 
      { encoding: 'utf-8' }
    )
  );
  const promisesTypeDefs = Promise.all(promisesTypeDef)
  const promiseDB = connect('mongodb://localhost:27017/lionmiss?authSource=lionmiss', {
    user: 'lionmiss-admin',
    pass: ';QVuV1as7OBN%-]'
  });
  promiseDB
    .then(() => promisesTypeDefs)
    .then(typeDefsList => {
      const typeDefs = gql`${typeDefsList.join('\n')}`;
      const server = new ApolloServer({ typeDefs, resolvers: productResolvers.default });
      return server.listen();
    })
    .then(({port}) => console.log(`server is runing in port "${port}"`))
    //.catch(err => console.error('Horror', err));
}

init();