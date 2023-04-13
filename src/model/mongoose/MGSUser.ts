import { UpdateResult } from 'mongodb';
import { LMUser, LMUserInfo } from "lionmiss-core";
import { Document, Model, model } from "mongoose";
import { IUser } from "../IUser.js";
import { LMBSearchParams, LMBUser } from "../LMB/index.js";
import { schemaUser } from "./schemas/index.js";
import { genSaltSync, hashSync } from "bcrypt-ts/browser";
import { userInfo } from "os";

type ModelLMUser = Document<unknown, unknown, LMUser> & Omit<LMUser, never>;

class MGSUser implements IUser {
  UserModel: Model<LMUser> = model<LMUser>("User", schemaUser, "user");

  getUser(id: string): Promise<LMBUser> {
    return this.UserModel.findById(id)
      .then((user: LMUser) => ({ username: user.username, ...user.userInfo}));
  }

  getUserAll({limit, offset, search = {}}: LMBSearchParams): Promise<LMBUser[]> {
    return this.UserModel.find(search)
      .skip(offset)
      .limit(limit)
      .then((list: LMUser[]) => list.map((user: LMUser) => ({ username: user.username, ...user.userInfo})));
  }

  postUser(user: LMBUser): Promise<LMBUser> {
    const {username, pass, ...userInfo} = user;
    const salt: string = genSaltSync();
    const hash: string = hashSync(pass, salt);
    const userPersist: LMUser = {
      username,
      pass: hash,
      salt,
      userInfo
    }
    const userModel: ModelLMUser = new this.UserModel(userPersist);
    const userRes: LMBUser = {
      username,
      ...userPersist.userInfo
    }
    return userModel.validate()
      .then(() => userModel.save())
      .then(() => userRes);
  }

  updateUser(user: LMBUser): Promise<boolean> {
    const {username, pass, ...rest} = user;
    return this.UserModel.findOne({username})
      .then((found: LMUser) => {
        let salt: string;
        let hash: string;
        if(pass) {
          salt = genSaltSync();
          hash = hashSync(pass, salt)
        } else {
          salt = found.salt;
          hash = found.pass;
        }
        const userUpdate: LMUser = ({
          _id: found._id,
          username,
          pass: hash,
          salt,
          userInfo: {...rest}
        });
        return this.UserModel.updateOne({username}, userUpdate)
      })
      .then(({modifiedCount}: UpdateResult) => modifiedCount > 0)
  }

  deleteUser(id: string): Promise<boolean> {
    return this.UserModel.findByIdAndDelete(id)
      .count()
      .then((count: number) => count > 0);
  }

  getUserByName(username: string): Promise<LMUser> {
    return this.UserModel.findOne({user: {username}})
      .then((user: LMUser) => user);
  }
}

export { MGSUser };
