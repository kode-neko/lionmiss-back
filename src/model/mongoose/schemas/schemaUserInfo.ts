import { schemaCart } from "./schemaCart.js";
import { Schema } from "mongoose";
import { LMUserInfo } from "lionmiss-core";
import { schemaUser } from "./schemaUser.js";

const schemaUserInfo = new Schema<LMUserInfo>({
  cart: schemaCart,
  user: schemaUser,
  favProducts: [String],
});
export { schemaUserInfo };
