import { Context } from 'apollo-server-core';
import { LMUserInfo } from 'lionmiss-core';
import { LMBError } from '../../model/LMB';
import { builderUserInfo } from "../../model/utils";

// Model Builders
const userModel = builderUserInfo();

// Inputs
type QueryUser = {
  id: string;
}
type InputMessageUser = {
  user: LMUserInfo;
}

// Resolvers
const userResolvers = {
  Query: {
    user: async (_: Context, {id} : QueryUser): Promise<LMUserInfo|LMBError> => 
      await userModel.getUser(id),
    users: async (): Promise<LMUserInfo[]|LMBError> => 
      await userModel.getUserAll(),
  },
  Mutation: {
    createUser: async (_: Context, {user}: InputMessageUser): Promise<LMUserInfo|LMBError> => 
      await userModel.postUser(user),
    updateUser: async (_: Context, {user}: InputMessageUser): Promise<boolean|LMBError> => 
      await userModel.updateUser(user),
    deleteUser: async (_: Context, id: string): Promise<boolean|LMBError> => 
      await userModel.deleteUser(id),
  }
};

export default userResolvers;