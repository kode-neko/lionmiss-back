import { builderShipping } from "../../model/utils/index.js";
// Model Builders
const shippingModel = builderShipping();
// Resolvers
const shippingResolvers = {
    Query: {
        shipping: async (_, { id }) => await shippingModel.getShipping(id),
        shippings: async () => await shippingModel.getShippingAll(),
    },
    Mutation: {
        createShipping: async (_, { shipping }) => await shippingModel.postShipping(shipping),
        updateShipping: async (_, { shipping }) => await shippingModel.updateShipping(shipping),
        deleteShipping: async (_, id) => await shippingModel.deleteShipping(id),
    }
};
export default shippingResolvers;
//# sourceMappingURL=shipping.js.map