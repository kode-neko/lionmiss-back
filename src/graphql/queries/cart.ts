import {
  ArgsValue,
  NexusExtendTypeDef,
  ObjectDefinitionBlock,
  SourceValue,
  extendType,
  stringArg,
} from "nexus/dist/core";
import {LMProduct} from "../types";
import {builderCart} from "../../model/utils/builderCart";
import {ICart} from "../../model/ICart";

const cartModel: ICart = builderCart();

const LMCartQuery: NexusExtendTypeDef<"Query"> = extendType({
  type: "Query",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("LMCartQuery", {
      type: LMProduct,
      args: {
        username: stringArg(),
      },
      resolve: async (
        root: SourceValue<string>,
        args: ArgsValue<string, string>
      ) => {
        return await cartModel.getCart(args.username);
      },
    });
  },
});

export {
  LMCartQuery
}