import { IUserInfo } from "../IUserInfo.js";
import { MGSUserInfo } from "../mongoose/index.js";

function builderUserInfo(): IUserInfo {
  return new MGSUserInfo();
}

export { builderUserInfo };
