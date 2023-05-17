import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
  idArg,
  stringArg,
} from "nexus/dist/core";
import {IUser} from "../../model/IUser";
import {builderUser} from "../../model/utils/builderUser";
import {LMUser} from "lionmiss-core";
// import {hashSync} from "bcrypt";
import jwt from "jsonwebtoken";
import {LMBUser} from "../../model/LMB/LMBUser";
import { LMUserReturn, LMUserReturnInput } from "../types";

const userModel: IUser = builderUser();

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
        // if (hashSync(pass) !== user.pass) throw Error("error.authorization");

        //Return token
        const token: string = jwt.sign(
          // {username: name},
          {username: ""},
          process.env.KEY_TOKEN,
          {algorithm: "RS256"}
        );
        return token;
      },
    });
  },
});

export {
  LMUserMutationPost,
  LMUserMutationPut,
  LMUserMutationDelete,
  SignUpMutation,
  LoginMutation,
};
