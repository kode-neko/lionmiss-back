import { LMShipping } from "lionmiss-core";
import { model } from "mongoose";
import { IShipping } from "../IShipping";
import { LMBError } from "../LMB";
import { schemaShipping } from "./schemas";

class MGSShipping implements IShipping {
  ShippingModel = model<LMShipping>("Shipping", schemaShipping, "shipping");

  getShipping(id: string): Promise<LMShipping | LMBError> {
    return this.ShippingModel.findById(id)
      .then(Promise.resolve)
      .catch((err) => Promise.reject(err));
  }

  getShippingAll(): Promise<LMShipping[] | LMBError> {
    return this.ShippingModel.find()
      .then(Promise.resolve)
      .catch((err) => Promise.reject(err));
  }

  postShipping(shipping: LMShipping): Promise<boolean | LMBError> {
    const shippingModel = new this.ShippingModel(shipping);
    return shippingModel
      .validate()
      .then(() => shippingModel.save())
      .then(() => Promise.resolve(true))
      .catch((err) => Promise.reject(err));
  }

  updateShipping(shipping: LMShipping): Promise<boolean | LMBError> {
    return this.ShippingModel.findByIdAndUpdate(shipping._id, shipping, {
      runValidators: true,
    })
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }

  deleteShipping(id: string): Promise<boolean | LMBError> {
    return this.ShippingModel.findByIdAndDelete(id)
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }
}

export { MGSShipping };
