import * as dotenv from 'dotenv';
import path, { join } from 'path';
import { Mongoose, connect, set as setMongoose } from "mongoose";
import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer, StandaloneServerContextFunctionArgument } from '@apollo/server/standalone';
import { makeSchema } from 'nexus';
import * as allTypes from './schema/index.js';
import { fileURLToPath } from 'url';
import { NexusGraphQLSchema } from 'nexus/dist/core.js';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { LMUser } from 'lionmiss-core';
import { builderUser } from '../model/utils/builderUser.js';
import { IUser } from '../model/IUser.js';

dotenv.config()

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

export const schema: NexusGraphQLSchema = makeSchema({
  types: allTypes,
  outputs: {
    schema: join(__dirname, 'lionmiss-schema.graphql'),
    typegen: join(__dirname, 'lionmiss-typegen.ts')
  },
})

interface LMContext extends BaseContext {
  username: string
}

const userModel: IUser = builderUser();

const context: (args: StandaloneServerContextFunctionArgument) => Promise<LMContext> = async ({req}: StandaloneServerContextFunctionArgument) => {
  /*
  const authHeader: string = req.headers['authorization'];
  const token: string = authHeader && authHeader.split(' ')[1];

  if(token === null)
    throw Error('error.authorization');

    let payload: JwtPayload;
  try {
    const payload: JwtPayload = jwt.verify(token, process.env.KEY_TOKEN) as JwtPayload;
    const user: LMUser = await userModel.getUserByName(payload.username);
    if(!user)
      throw Error('error.user');
  } catch(err) {
    throw Error('error.authorization');
  }
  */

  return {
    username: 'test'
  }
}

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
      const server: ApolloServer = new ApolloServer<BaseContext>({schema});
      return startStandaloneServer(server, {context: context})
    })
    .then(({url}: {url: string}) => console.log(`🚀 Server is ready at ${url}`))
    .catch((err: Error) => console.error('💀', err));
}

init();