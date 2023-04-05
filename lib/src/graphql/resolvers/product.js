import { builderProduct } from "../../model/utils/index.js";
// Model Builders
const productModel = builderProduct();
// Resolvers
const productResolvers = {
    Query: {
        product: async (_, { id }) => await productModel.getProduct(id),
        products: async () => await productModel.getProductAll(),
    },
    Mutation: {
        createProduct: async (_, { product }) => await productModel.postProduct(product),
        updateProduct: async (_, { product }) => await productModel.updateProduct(product),
        deleteProduct: async (_, id) => await productModel.deleteProduct(id),
    }
};
export default productResolvers;
//# sourceMappingURL=product.js.map