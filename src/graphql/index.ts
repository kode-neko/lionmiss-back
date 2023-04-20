import * as dotenv from "dotenv";
import {join} from "path";
import {Mongoose, connect, set as setMongoose} from "mongoose";
import {ApolloServer, BaseContext} from "@apollo/server";
import {
  startStandaloneServer,
  StandaloneServerContextFunctionArgument,
} from "@apollo/server/standalone";
import {makeSchema} from "nexus";
import * as allTypes from "./types";
import {
  LMProductQuery,
  LMProductQueryList,
  LMCountryQueryList,
  LMLocaleQueryList
} from "./queries";
import {
  LMProductMutationPost,
  LMProductMutationPut,
  LMProductMutationDelete
} from "./mutations";
import {NexusGraphQLSchema} from "nexus/dist/core";
// import {builderUser} from "../model/utils/builderUser";
// import {IUser} from "../model/IUser";

dotenv.config();

export const schema: NexusGraphQLSchema = makeSchema({
  types: {
    ...allTypes,   
    LMProductQuery,
    LMProductQueryList,
    LMCountryQueryList,
    LMLocaleQueryList,
    LMProductMutationPost,
    LMProductMutationPut,
    LMProductMutationDelete
  },
  outputs: {
    schema: join(__dirname, "lionmiss-schema.graphql"),
    typegen: join(__dirname, "lionmiss-typegen.ts"),
  },
});

interface LMContext extends BaseContext {
  username: string;
}

// const userModel: IUser = builderUser();

const context: (
  args: StandaloneServerContextFunctionArgument
) => Promise<LMContext> = async ({ req }: StandaloneServerContextFunctionArgument) => {
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
    username: "test",
  };
};

const {
  GQL_HOST,
  GQL_PORT,
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_USER_PASS
} = process.env;

function graphql() {
  //  DB config connect
  setMongoose("strictQuery", true);
  const promiseDB: Promise<Mongoose> = connect( `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_NAME}`,
    {
      user: DB_USER,
      pass: DB_USER_PASS,
    }
  );

  // Connect DB + Init API GQL
  promiseDB
    .then(() => {
      console.log(`🗂️  Connected to DB`);
      const server: ApolloServer = new ApolloServer<BaseContext>({schema});
      return startStandaloneServer(server, {context, listen: {port: Number(GQL_PORT), host: GQL_HOST}, });
    })
    .then(({url}: {url: string}) => console.log(`🚀 Graphql server is ready at ${url}`))
    .catch((err: Error) => console.error("💀 Error Grapql server:", err));
}

export default graphql;
