import { Context } from 'apollo-server-core';
import { LMUserInfo } from 'lionmiss-core';
import { LMBError } from '../../model/LMB/index.js';
type QueryUser = {
    id: string;
};
type InputMessageUser = {
    user: LMUserInfo;
};
declare const userResolvers: {
    Query: {
        user: (_: Context, { id }: QueryUser) => Promise<LMUserInfo | LMBError>;
        users: () => Promise<LMUserInfo[] | LMBError>;
    };
    Mutation: {
        createUser: (_: Context, { user }: InputMessageUser) => Promise<LMUserInfo | LMBError>;
        updateUser: (_: Context, { user }: InputMessageUser) => Promise<boolean | LMBError>;
        deleteUser: (_: Context, id: string) => Promise<boolean | LMBError>;
    };
};
export default userResolvers;
