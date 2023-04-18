import {ICart} from "../ICart";
import {MGSCart} from "../mongoose/index";

function builderCart(): ICart {
  return new MGSCart();
}

export {builderCart};
