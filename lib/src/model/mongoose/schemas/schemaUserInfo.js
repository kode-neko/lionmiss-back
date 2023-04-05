import { schemaCart } from "./schemaCart.js";
import { Schema } from "mongoose";
import { schemaUser } from "./schemaUser.js";
const schemaUserInfo = new Schema({
    cart: schemaCart,
    user: schemaUser,
    favProducts: [String],
});
export { schemaUserInfo };
//# sourceMappingURL=schemaUserInfo.js.map