import {
  ArgsValue,
  InputDefinitionBlock,
  NexusExtendTypeDef,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
} from "nexus/dist/core";
import {LMCart, LMCartInput} from "./cart";
import {LMMeasures, LMMeasuresInput} from "./measures";
import {LMAdress, LMAdressInput} from "./adress";
import {IUser} from "../../model/IUser";
import {builderUser} from "../../model/utils/builderUser";
import {LMListParamsInput} from "./params";
import {listToObjKeyVal} from "../utils";
import pkg from "nexus/dist/core";
import {LMUser} from "lionmiss-core";
import {hashSync} from "bcrypt";
import jwt from "jsonwebtoken";
import {LMBUser} from "../../model/LMB/LMBUser";
const {inputObjectType, objectType, extendType, idArg, intArg, stringArg} = pkg;

const LMUserInfo: NexusObjectTypeDef<string> = objectType({
  name: "LMUserInfo",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("cart", {
      type: LMCart,
    });
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasures,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdress,
    });
  },
});

const LMUserInfoInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMUserInfoInput",
  definition(t: InputDefinitionBlock<string>) {
    t.field("cart", {
      type: LMCartInput,
    });
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasuresInput,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdressInput,
    });
  },
});

const LMUser: NexusObjectTypeDef<string> = objectType({
  name: "LMUser",
  definition(t: ObjectDefinitionBlock<string>) {
    t.id("_id"), t.nonNull.string("username");
    t.nonNull.string("pass");
    t.nonNull.string("salt");
    t.nonNull.field("userInfo", {
      type: LMUserInfo,
    });
  },
});

const LMUserInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMUserInput",
  definition(t: InputDefinitionBlock<string>) {
    t.id("_id"), t.string("username");
    t.string("pass");
    t.string("salt");
    t.field("userInfo", {
      type: LMUserInfoInput,
    });
  },
});

const LMUserReturn: NexusObjectTypeDef<string> = objectType({
  name: "LMUserReturn",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("username");
    t.string("pass");
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasures,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdress,
    });
  },
});

const LMUserReturnInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMUserReturnInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("username");
    t.string("pass");
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasuresInput,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdressInput,
    });
  },
});

const userModel: IUser = builderUser();

const LMUserQuery: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMUserQuery", {
      type: LMUserReturn,
      args: {
        id: idArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return await userModel.getUser(args.id);
      },
    });
  },
});

const LMUserQueryList: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.list.field("LMUserQueryList", {
      type: LMUserReturn,
      args: {
        offset: intArg(),
        limit: intArg(),
        searchList: LMListParamsInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {offset, limit, searchList} = args;
        const search: {[key: string]: string} = listToObjKeyVal(searchList);
        return await userModel.getUserAll({limit, offset, search});
      },
    });
  },
});

const LMUserByNameQuery: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMUserByNameQuery", {
      type: LMUserReturn,
      args: {
        username: stringArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return await userModel.getUserByName(args.username);
      },
    });
  },
});

const LMUserMutationPost: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMUserMutationPost", {
      type: LMUserReturn,
      args: {
        user: LMUserReturnInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return userModel.postUser(args.user);
      },
    });
  },
});

const LMUserMutationPut: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMUserMutationPut", {
      type: "Boolean",
      args: {
        id: idArg(),
        user: LMUserReturnInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {id, user} = args;
        return userModel.updateUser({_id: id, ...user});
      },
    });
  },
});

const LMUserMutationDelete: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMUserMutationDelete", {
      type: "Boolean",
      args: {
        username: stringArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return userModel.deleteUser(args.username);
      },
    });
  },
});

const SignUpMutation: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("SignUpMutation", {
      type: "LMUserReturn",
      args: {
        user: LMUserReturnInput,
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {user} = args;
        const newUser: LMBUser = await userModel.postUser(user);
        return {...newUser, pass: null};
      },
    });
  },
});

const LoginMutation: NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LoginMutation", {
      type: "String",
      args: {
        username: stringArg(),
        pass: stringArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        const {username, pass} = args;
        const user: LMUser = await userModel.getUserByName(username);

        // Check user
        if (!user) throw Error("error.user");

        // Check pass
        if (hashSync(pass) !== user.pass) throw Error("error.authorization");

        //Return token
        const token: string = jwt.sign(
          {username: name},
          process.env.KEY_TOKEN,
          {algorithm: "RS256"}
        );
        return token;
      },
    });
  },
});

export {
  LMUserInfo,
  LMUserInfoInput,
  LMUser,
  LMUserInput,
  LMUserReturn,
  LMUserReturnInput,
  LMUserQuery,
  LMUserQueryList,
  LMUserByNameQuery,
  LMUserMutationPost,
  LMUserMutationPut,
  LMUserMutationDelete,
  LoginMutation,
};
