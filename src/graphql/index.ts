import path from 'path';
import {readFile} from 'node:fs/promises';
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
  Promise.all(promisesTypeDef)
    .then(typeDefsList => {
      const typeDefs = gql`${typeDefsList.join('\n')}`;
      const server = new ApolloServer({ typeDefs, resolvers: productResolvers.default });
      return server.listen();
    })
    .then(() => console.log('server is runing'))
    .catch(err => console.error('Horror', err));
}

init();