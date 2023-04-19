import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
  idArg,
  intArg,
  stringArg,
} from "nexus/dist/core";
import {IUser} from "../../model/IUser";
import {builderUser} from "../../model/utils/builderUser";
import {LMListParamsInput, LMUserReturn} from "../types";
import {listToObjKeyVal} from "../utils";

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

export {
  LMUserQuery,
  LMUserQueryList,
  LMUserByNameQuery
};
