import { LMShipping } from "lionmiss-core";
import { model } from "mongoose";
import { IShipping } from "../IShipping.js";
import { LMBError } from "../LMB/index.js";
import { schemaShipping } from "./schemas/index.js";

class MGSShipping implements IShipping {
  ShippingModel = model<LMShipping>("Shipping", schemaShipping, "shipping");

  getShipping(id: string): Promise<LMShipping | LMBError> {
    return this.ShippingModel.findById(id)
      .then(shipping => shipping)
      .catch(err => err);
  }

  getShippingAll(): Promise<LMShipping[] | LMBError> {
    return this.ShippingModel.find()
      .then(list => list)
      .catch(err => err);
  }

  postShipping(shipping: LMShipping): Promise<LMShipping | LMBError> {
    const shippingModel = new this.ShippingModel(shipping);
    return shippingModel
      .validate()
      .then(() => shippingModel.save())
      .then(shipping => shipping)
      .catch(err => err);
  }

  updateShipping(shipping: LMShipping): Promise<boolean | LMBError> {
    return this.ShippingModel.findByIdAndUpdate(shipping._id, shipping, {
      runValidators: true,
    })
      .count()
      .then(count => count > 0)
      .catch(err => err);
  }

  deleteShipping(id: string): Promise<boolean | LMBError> {
    return this.ShippingModel.findByIdAndDelete(id)
      .count()
      .then(count => count > 0)
      .catch(err => err);
  }
}

export { MGSShipping };
