import { model } from "mongoose";
import { schemaUserInfo } from "./schemas/index.js";
class MGSUserInfo {
    UserInfoModel = model("UserInfo", schemaUserInfo, "userInfo");
    getUser(id) {
        return this.UserInfoModel.findById(id)
            .then(userInfo => userInfo ? userInfo.user : {})
            .catch(err => err);
    }
    getUserAll() {
        return this.UserInfoModel.find({})
            .then(list => list)
            .catch(err => err);
    }
    postUser(userInfo) {
        const userInfoModel = new this.UserInfoModel(userInfo);
        return userInfoModel.validate()
            .then(() => userInfoModel.save())
            .then(userInfo => userInfo)
            .catch(err => err);
    }
    updateUser(userInfo) {
        return this.UserInfoModel.findOneAndUpdate({ user: userInfo.user }, { ...userInfo }, { runValidators: true })
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
    deleteUser(id) {
        return this.UserInfoModel.findByIdAndDelete(id)
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
}
export { MGSUserInfo };
//# sourceMappingURL=MGSUserInfo.js.map