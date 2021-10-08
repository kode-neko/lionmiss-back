import { LMShipping } from "lionmiss-core";
import { model } from "mongoose";
import { IShipping } from "../IShipping";
import { LMBError } from "../LMB";
import { schemaShipping } from "./schemas";

const ShippingModel = model<LMShipping>("Shipping", schemaShipping, "shipping");

class MGSShipping implements IShipping {
  getShipping(id: string): Promise<LMShipping | LMBError> {
    return ShippingModel.findById(id)
      .then(Promise.resolve)
      .catch((err) => Promise.reject({ error: err }));
  }

  getShippingAll(): Promise<LMShipping[] | LMBError> {
    return ShippingModel.find()
      .then(Promise.resolve)
      .catch((err) => Promise.reject({ error: err }));
  }

  postShipping(shipping: LMShipping): Promise<boolean | LMBError> {
    const shippingModel = new ShippingModel(shipping);
    return shippingModel
      .validate()
      .then(() => shippingModel.save())
      .then(() => Promise.resolve(true))
      .catch((err) => Promise.reject({ error: err }));
  }

  updateShipping(shipping: LMShipping): Promise<boolean | LMBError> {
    return ShippingModel.findByIdAndUpdate(shipping._id, shipping, {
      runValidators: true,
    })
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  deleteShipping(id: string): Promise<boolean | LMBError> {
    return ShippingModel.findByIdAndDelete(id)
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }
}

export { MGSShipping };
