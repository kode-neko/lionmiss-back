import { LMCountry } from 'lionmiss-core';
import { LMBError } from '../../model/LMB/index.js';
declare const productResolvers: {
    Query: {
        countries: () => Promise<LMCountry[] | LMBError>;
    };
};
export default productResolvers;
