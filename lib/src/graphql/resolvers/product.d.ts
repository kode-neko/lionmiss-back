import { Context } from 'apollo-server-core';
import { LMProduct } from 'lionmiss-core';
import { LMBError } from '../../model/LMB/index.js';
type QueryProduct = {
    id: string;
};
type InputMessageProduct = {
    product: LMProduct;
};
declare const productResolvers: {
    Query: {
        product: (_: Context, { id }: QueryProduct) => Promise<LMProduct | LMBError>;
        products: () => Promise<LMProduct[] | LMBError>;
    };
    Mutation: {
        createProduct: (_: Context, { product }: InputMessageProduct) => Promise<LMProduct | LMBError>;
        updateProduct: (_: Context, { product }: InputMessageProduct) => Promise<boolean | LMBError>;
        deleteProduct: (_: Context, id: string) => Promise<boolean | LMBError>;
    };
};
export default productResolvers;
