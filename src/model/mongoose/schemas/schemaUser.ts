import {Schema} from "mongoose";
import {LMUser} from "lionmiss-core";
import {schemaUserInfo} from "./schemaUserInfo";

const schemaUser: Schema<LMUser> = new Schema<LMUser>({
  username: {type: String, required: true, unique: true},
  pass: {type: String, required: true},
  userInfo: schemaUserInfo,
});
export {schemaUser};
