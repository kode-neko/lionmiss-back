import { Context } from 'apollo-server-core';
import { LMUser } from 'lionmiss-core';
import { LMBError, LMBSearchParams } from '../../model/LMB/index.js';
import { builderUser } from "../../model/utils/index.js";
import { IUser } from '../../model/IUser.js';

// Model Builders
const userModel: IUser = builderUser();

// Inputs
type QueryUser = {
  id: string;
}
type InputMessageUser = {
  user: LMUser;
}

// Resolvers
const userResolvers = {
  Query: {
    user: async (_: Context, {id} : QueryUser): Promise<LMUser|LMBError> => 
      await userModel.getUser(id),
    users: async (params: LMBSearchParams): Promise<LMUser[]|LMBError> => 
      await userModel.getUserAll(params),
  },
  Mutation: {
    createUser: async (_: Context, {user}: InputMessageUser): Promise<LMUser|LMBError> => 
      await userModel.postUser(user),
    updateUser: async (_: Context, {user}: InputMessageUser): Promise<boolean|LMBError> => 
      await userModel.updateUser(user),
    deleteUser: async (_: Context, id: string): Promise<boolean|LMBError> => 
      await userModel.deleteUser(id),
  }
};

export default userResolvers;