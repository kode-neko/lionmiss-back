import { LMCart, LMCartProduct } from 'lionmiss-core';
import { Context } from 'apollo-server-core';
import { LMBError } from '../../model/LMB/index.js';
type QueryCart = {
    idUser: string;
};
type InputMessageCart = {
    idUser: string;
    cart: LMCart;
};
type InputMessageProductCart = {
    idUser: string;
    product: LMCartProduct;
};
declare const cartResolvers: {
    Query: {
        cart: (_: Context, { idUser }: QueryCart) => Promise<LMCart | LMBError>;
    };
    Mutation: {
        createCart: (_: Context, { idUser, cart }: InputMessageCart) => Promise<boolean | LMBError>;
        updateCart: (_: Context, { idUser, cart }: InputMessageCart) => Promise<boolean | LMBError>;
        deleteCart: (_: Context, idUser: string) => Promise<boolean | LMBError>;
        insertProductCart: (_: Context, { idUser, product }: InputMessageProductCart) => Promise<boolean | LMBError>;
        updateProductCart: (_: Context, { idUser, product }: InputMessageProductCart) => Promise<boolean | LMBError>;
        deleteProductCart: (_: Context, { idUser, product }: InputMessageProductCart) => Promise<boolean | LMBError>;
    };
};
export default cartResolvers;
