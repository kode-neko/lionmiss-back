import { builderShipping } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
const shippingModel = builderShipping();
function getShipping(req, res) {
    const { id } = req.body;
    shippingModel
        .getShipping(id)
        .then((shipping) => res.status(isEmpty(shipping) ? 404 : 200).json(shipping))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function getShippingAll(req, res) {
    shippingModel
        .getShippingAll()
        .then((list) => res.status(200).json(list))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function postShipping(req, res) {
    const { shipping } = req.body;
    shippingModel
        .postShipping(shipping)
        .then((shipping) => res.status(201).json(shipping))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function updateShipping(req, res) {
    const { shipping } = req.body;
    shippingModel
        .updateShipping(shipping)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
function deleteShipping(req, res) {
    const { id } = req.body;
    shippingModel
        .deleteShipping(id)
        .then((ok) => res.status(ok ? 200 : 404))
        .catch((err) => res.status(statusErrorCode(err.msg)).json(err));
}
export { getShipping, getShippingAll, postShipping, updateShipping, deleteShipping, };
//# sourceMappingURL=ctrlShipping.js.map