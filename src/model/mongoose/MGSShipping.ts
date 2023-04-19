import {LMShipping} from "lionmiss-core";
import {Document, Model, model} from "mongoose";
import {IShipping} from "../IShipping";
import {LMBSearchParams} from "../LMB/index";
import {schemaShipping} from "./schemas/index";

type ModelLMShipping = Document<unknown, unknown, LMShipping> &
  Omit<LMShipping & Required<{_id: string}>, never>;
class MGSShipping implements IShipping {
  ShippingModel: Model<LMShipping> = model<LMShipping>(
    "Shipping",
    schemaShipping,
    "shipping"
  );

  getShipping(id: string): Promise<LMShipping> {
    return this.ShippingModel.findById(id).then(
      (shipping: LMShipping) => shipping
    );
  }

  getShippingAll({
    limit,
    offset,
    search = {},
  }: LMBSearchParams): Promise<LMShipping[]> {
    return this.ShippingModel.find(search)
      .skip(offset)
      .limit(limit)
      .then((list: LMShipping[]) => list);
  }

  postShipping(shipping: LMShipping): Promise<LMShipping> {
    const shippingModel: ModelLMShipping = new this.ShippingModel(shipping);
    return shippingModel
      .validate()
      .then(() => shippingModel.save())
      .then((s: LMShipping) => s);
  }

  updateShipping(shipping: LMShipping): Promise<boolean> {
    return this.ShippingModel.findByIdAndUpdate(shipping._id, shipping, {
      runValidators: true,
    })
      .count()
      .then((count: number) => count > 0);
  }

  deleteShipping(id: string): Promise<boolean> {
    return this.ShippingModel.findByIdAndDelete(id)
      .count()
      .then((count: number) => count > 0);
  }
}

export {MGSShipping};
