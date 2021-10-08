import { LMUser, LMUserInfo } from "lionmiss-core";
import { model } from "mongoose";
import { IUserInfo } from "../IUserInfo";
import { LMBError } from "../LMB";
import { schemaUserInfo } from "./schemas";

const UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "userInfo");

class MGSUserInfo implements IUserInfo {
  getUser(id: string): Promise<LMUser | LMBError> {
    return UserInfoModel.findById(id)
      .then((userInfo) => Promise.resolve(userInfo.user))
      .catch((err) => Promise.reject({ error: err }));
  }

  getUserAll(): Promise<LMUser[] | LMBError> {
    return UserInfoModel.find({}, { user: 1 })
      .then((usersInfo) => Promise.resolve(usersInfo.map((u) => u.user)))
      .catch((err) => Promise.reject({ error: err }));
  }

  postUser(user: LMUser): Promise<boolean | LMBError> {
    const userInfoModel = new UserInfoModel(user);
    return UserInfoModel.validate()
      .then(() => userInfoModel.save())
      .then(() => Promise.resolve(true))
      .catch((err) => Promise.reject({ error: err }));
  }

  updateUser(id: string, user: LMUser): Promise<boolean | LMBError> {
    return UserInfoModel.findByIdAndUpdate(
      id,
      { user: user },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  deleteUser(id: string): Promise<boolean | LMBError> {
    return UserInfoModel.findByIdAndDelete(id)
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }
}

export { MGSUserInfo };
