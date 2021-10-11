import { IUserInfo } from "../IUserInfo";
import { MGSUserInfo } from "../mongoose";

function builderUserInfo(): IUserInfo {
  return new MGSUserInfo();
}

export { builderUserInfo };
