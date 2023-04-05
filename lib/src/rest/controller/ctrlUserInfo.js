import { builderUserInfo } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
const userInfoModel = builderUserInfo();
function getUser(req, res) {
    const { id } = req.body;
    userInfoModel
        .getUser(id)
        .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function getUserAll(req, res) {
    userInfoModel
        .getUserAll()
        .then((list) => res.status(200).json(list))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function postUser(req, res) {
    const { userInfo } = req.body;
    userInfoModel
        .postUser(userInfo)
        .then((newUserInfo) => res.status(201).json(newUserInfo))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function updateUser(req, res) {
    const { userInfo } = req.body;
    userInfoModel
        .updateUser(userInfo)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function deleteUser(req, res) {
    const { id } = req.body;
    userInfoModel
        .deleteUser(id)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
export { getUser, getUserAll, postUser, updateUser, deleteUser };
//# sourceMappingURL=ctrlUserInfo.js.map