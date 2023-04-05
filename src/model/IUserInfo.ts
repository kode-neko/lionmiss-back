import { LMUserInfo } from "lionmiss-core";
import { LMBError } from "./LMB/index.js";

interface IUserInfo {
  getUser: (id: string) => Promise<LMUserInfo | LMBError>;
  getUserAll: () => Promise<LMUserInfo[] | LMBError>;
  postUser: (user: LMUserInfo) => Promise<LMUserInfo | LMBError>;
  updateUser: (user: LMUserInfo) => Promise<boolean | LMBError>;
  deleteUser: (id: string) => Promise<boolean | LMBError>;
}

export { IUserInfo };
