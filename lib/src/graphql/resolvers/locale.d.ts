import { LMBError, LMBLocale } from '../../model/LMB/index.js';
declare const cartResolvers: {
    Query: {
        locales: () => Promise<LMBLocale[] | LMBError>;
    };
};
export default cartResolvers;
