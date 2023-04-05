import { ICart } from "../ICart.js";
import { MGSCart } from "../mongoose/index.js";

function builderCart(): ICart {
  return new MGSCart();
}

export { builderCart };
