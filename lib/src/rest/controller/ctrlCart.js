import { builderCart } from "../../model/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
const userInfo = builderCart();
function getCart(req, res) {
    const { idUser } = req.params;
    userInfo
        .getCart(idUser)
        .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function createCart(req, res) {
    const { idUser, cart } = req.body;
    userInfo
        .postCart(idUser, cart)
        .then((ok) => res.status(ok ? 201 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function updateCart(req, res) {
    const { idUser, cart } = req.body;
    userInfo
        .updateCart(idUser, cart)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function deleteCart(req, res) {
    const { idUser } = req.params;
    userInfo
        .deleteCart(idUser)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function postCartProduct(req, res) {
    const { idUser, cartProduct } = req.body;
    userInfo
        .postProductCart(idUser, cartProduct)
        .then((ok) => res.status(ok ? 201 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function putCartProduct(req, res) {
    const { idUser, cartProduct } = req.body;
    userInfo
        .updateProductCart(idUser, cartProduct)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function delCartProduct(req, res) {
    const { idUser, idProduct } = req.params;
    userInfo
        .deleteProductCart(idUser, idProduct)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
export { getCart, createCart, updateCart, deleteCart, postCartProduct, putCartProduct, delCartProduct };
//# sourceMappingURL=ctrlCart.js.map