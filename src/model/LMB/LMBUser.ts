import { LMUser, LMUserInfo } from "lionmiss-core";

interface LMBUser extends Pick<LMUser, 'username'>, LMUserInfo {
  pass?: string;
}

export { LMBUser }