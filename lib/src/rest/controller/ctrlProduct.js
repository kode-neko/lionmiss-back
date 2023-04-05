import { builderProduct } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
const productModel = builderProduct();
function getProduct(req, res) {
    const { id } = req.params;
    productModel
        .getProduct(id)
        .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function getProductAll(req, res) {
    productModel
        .getProductAll()
        .then((list) => res.status(200).json(list))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function postProduct(req, res) {
    const { product } = req.body;
    productModel
        .postProduct(product)
        .then((newProduct) => res.status(201).json(newProduct))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function updateProduct(req, res) {
    const { product } = req.body;
    productModel
        .updateProduct(product)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function deleteProduct(req, res) {
    const { id } = req.params;
    productModel
        .deleteProduct(id)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
export { getProduct, getProductAll, postProduct, updateProduct, deleteProduct };
//# sourceMappingURL=ctrlProduct.js.map