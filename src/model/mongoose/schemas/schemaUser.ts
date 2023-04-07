import { Schema } from "mongoose";
import { LMUser } from "lionmiss-core";
import { schemaCart } from "./schemaCart.js";
import { schemaUserInfo } from "./schemaUserInfo.js";

const schemaUser: Schema<LMUser> = new Schema<LMUser>({
  cart: schemaCart,
  user: schemaUserInfo,
  favProducts: [String],
});
export { schemaUser };