import { model } from "mongoose";
import { schemaShipping } from "./schemas/index.js";
class MGSShipping {
    ShippingModel = model("Shipping", schemaShipping, "shipping");
    getShipping(id) {
        return this.ShippingModel.findById(id)
            .then(shipping => shipping)
            .catch(err => err);
    }
    getShippingAll() {
        return this.ShippingModel.find()
            .then(list => list)
            .catch(err => err);
    }
    postShipping(shipping) {
        const shippingModel = new this.ShippingModel(shipping);
        return shippingModel
            .validate()
            .then(() => shippingModel.save())
            .then(shipping => shipping)
            .catch(err => err);
    }
    updateShipping(shipping) {
        return this.ShippingModel.findByIdAndUpdate(shipping._id, shipping, {
            runValidators: true,
        })
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
    deleteShipping(id) {
        return this.ShippingModel.findByIdAndDelete(id)
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
}
export { MGSShipping };
//# sourceMappingURL=MGSShipping.js.map