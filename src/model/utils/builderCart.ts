import { ICart } from "../ICart";
import { MGSCart } from "../mongoose";

function builderCart(): ICart {
  return new MGSCart();
}

export { builderCart };
