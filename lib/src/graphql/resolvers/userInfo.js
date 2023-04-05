import { builderUserInfo } from "../../model/utils/index.js";
// Model Builders
const userModel = builderUserInfo();
// Resolvers
const userResolvers = {
    Query: {
        user: async (_, { id }) => await userModel.getUser(id),
        users: async () => await userModel.getUserAll(),
    },
    Mutation: {
        createUser: async (_, { user }) => await userModel.postUser(user),
        updateUser: async (_, { user }) => await userModel.updateUser(user),
        deleteUser: async (_, id) => await userModel.deleteUser(id),
    }
};
export default userResolvers;
//# sourceMappingURL=userInfo.js.map