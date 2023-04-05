import { Context } from 'apollo-server-core';
import { LMShipping } from 'lionmiss-core';
import { LMBError } from '../../model/LMB/index.js';
type QueryShipping = {
    id: string;
};
type InputMessageShipping = {
    shipping: LMShipping;
};
declare const shippingResolvers: {
    Query: {
        shipping: (_: Context, { id }: QueryShipping) => Promise<LMShipping | LMBError>;
        shippings: () => Promise<LMShipping[] | LMBError>;
    };
    Mutation: {
        createShipping: (_: Context, { shipping }: InputMessageShipping) => Promise<LMShipping | LMBError>;
        updateShipping: (_: Context, { shipping }: InputMessageShipping) => Promise<boolean | LMBError>;
        deleteShipping: (_: Context, id: string) => Promise<boolean | LMBError>;
    };
};
export default shippingResolvers;
