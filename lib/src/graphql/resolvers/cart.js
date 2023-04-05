import { builderCart } from "../../model/utils/index.js";
// Model Builders
const cartModel = builderCart();
// Resolvers
const cartResolvers = {
    Query: {
        cart: async (_, { idUser }) => await cartModel.getCart(idUser),
    },
    Mutation: {
        // Cart
        createCart: async (_, { idUser, cart }) => await cartModel.postCart(idUser, cart),
        updateCart: async (_, { idUser, cart }) => await cartModel.updateCart(idUser, cart),
        deleteCart: async (_, idUser) => await cartModel.deleteCart(idUser),
        // Cart - Product
        insertProductCart: async (_, { idUser, product }) => await cartModel.postProductCart(idUser, product),
        updateProductCart: async (_, { idUser, product }) => await cartModel.updateProductCart(idUser, product),
        deleteProductCart: async (_, { idUser, product }) => await cartModel.deleteProductCart(idUser, product._id),
    }
};
export default cartResolvers;
//# sourceMappingURL=cart.js.map