import { builderLocale } from "../../model/utils/index.js";
// Model Builders
const localeModel = builderLocale();
// Resolvers
const cartResolvers = {
    Query: {
        locales: async () => await localeModel.getLocaleAll(),
    }
};
export default cartResolvers;
//# sourceMappingURL=locale.js.map