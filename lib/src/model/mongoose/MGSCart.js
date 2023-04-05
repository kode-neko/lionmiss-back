import { model } from "mongoose";
import { schemaUserInfo } from "./schemas/index.js";
class MGSCart {
    UserInfoModel = model("UserInfo", schemaUserInfo, "userInfo");
    getCart(idUser) {
        return this.UserInfoModel.findById(idUser)
            .then(userInfo => userInfo ? userInfo.cart : {})
            .catch(err => err);
    }
    postCart(idUser, cart) {
        return this.UserInfoModel.updateOne({ _id: idUser }, { cart }, { runValidators: true })
            .then(({ modifiedCount }) => modifiedCount > 0)
            .catch(err => err);
    }
    updateCart(idUser, cart) {
        return this.UserInfoModel.findByIdAndUpdate(idUser, { $set: { ...cart } }, { runValidators: true })
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
    deleteCart(idUser) {
        return this.UserInfoModel.deleteOne({ _id: idUser })
            .then(({ deletedCount }) => deletedCount > 0)
            .catch(err => err);
    }
    postProductCart(idUser, cartProduct) {
        return this.UserInfoModel.findByIdAndUpdate(idUser, { $push: { "cart.products": cartProduct } }, { runValidators: true })
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
    updateProductCart(idUser, cartProduct) {
        return this.UserInfoModel.findOneAndUpdate({
            _id: idUser,
            "cart.products._id": cartProduct._id,
        }, { $set: { "cart.products.$": { ...cartProduct } } }, { runValidators: true })
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
    deleteProductCart(idUser, idProduct) {
        return this.UserInfoModel.findByIdAndUpdate(idUser, { $pull: { "cart.products": { _id: idProduct } } }, { runValidators: true })
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
}
export { MGSCart };
//# sourceMappingURL=MGSCart.js.map