import { LMUserInfo } from "lionmiss-core";
import { model } from "mongoose";
import { IUserInfo } from "../IUserInfo";
import { LMBError } from "../LMB";
import { schemaUserInfo } from "./schemas";

class MGSUserInfo implements IUserInfo {
  UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "userInfo");

  getUser(id: string): Promise<LMUserInfo | LMBError> {
    return this.UserInfoModel.findById(id)
      .then(userInfo => userInfo ? userInfo.user : {})
      .catch(err => err);
  }

  getUserAll(): Promise<LMUserInfo[] | LMBError> {
    return this.UserInfoModel.find({})
      .then(list => list)
      .catch(err => err);
  }

  postUser(userInfo: LMUserInfo): Promise<LMUserInfo | LMBError> {
    const userInfoModel = new this.UserInfoModel(userInfo);
    return userInfoModel.validate()
      .then(() => userInfoModel.save())
      .then(userInfo => userInfo)
      .catch(err => err);
  }

  updateUser(id: string, userInfo: LMUserInfo): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndUpdate(
      id,
      { ...userInfo },
      { runValidators: true }
    )
      .count()
      .then(count => count > 0)
      .catch(err => err);
  }

  deleteUser(id: string): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndDelete(id)
      .count()
      .then(count => count > 0)
      .catch(err => err);
  }
}

export { MGSUserInfo };
