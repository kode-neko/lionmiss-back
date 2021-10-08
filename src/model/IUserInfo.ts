import { LMUser } from "lionmiss-core";
import { LMBError } from "./LMB";

interface IUserInfo {
  getUser: (id: string) => Promise<LMUser | LMBError>;
  postUser: (user: LMUser) => Promise<boolean | LMBError>;
  updateUser: (id: string, user: LMUser) => Promise<boolean | LMBError>;
  deleteUser: (id: string) => Promise<boolean | LMBError>;
}

export { IUserInfo };
