
import { Schema } from "mongoose";
import { LMUserInfo } from "lionmiss-core";
import { schemaCart } from "./schemaCart.js";
import { schemaUser } from "./schemaUser.js";

const schemaUserInfo: Schema<LMUserInfo> = new Schema<LMUserInfo>({
  cart: schemaCart,
  user: schemaUser,
  favProducts: [String],
});

export { schemaUserInfo };
