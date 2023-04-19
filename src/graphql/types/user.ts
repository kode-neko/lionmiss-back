import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";
import {LMCart, LMCartInput} from "./cart";
import {LMMeasures, LMMeasuresInput} from "./measures";
import {LMAdress, LMAdressInput} from "./adress";
import {LMUser} from "lionmiss-core";

const LMUserInfo: NexusObjectTypeDef<string> = objectType({
  name: "LMUserInfo",
  definition(t: ObjectDefinitionBlock<string>) {
    t.field("cart", {
      type: LMCart,
    });
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasures,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdress,
    });
  },
});

const LMUserInfoInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMUserInfoInput",
  definition(t: InputDefinitionBlock<string>) {
    t.field("cart", {
      type: LMCartInput,
    });
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasuresInput,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdressInput,
    });
  },
});

const LMUser: NexusObjectTypeDef<string> = objectType({
  name: "LMUser",
  definition(t: ObjectDefinitionBlock<string>) {
    t.id("_id"), t.nonNull.string("username");
    t.nonNull.string("pass");
    t.nonNull.field("userInfo", {
      type: LMUserInfo,
    });
  },
});

const LMUserInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMUserInput",
  definition(t: InputDefinitionBlock<string>) {
    t.id("_id"), t.string("username");
    t.string("pass");
    t.field("userInfo", {
      type: LMUserInfoInput,
    });
  },
});

const LMUserReturn: NexusObjectTypeDef<string> = objectType({
  name: "LMUserReturn",
  definition(t: ObjectDefinitionBlock<string>) {
    t.nonNull.string("username");
    t.string("pass");
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasures,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdress,
    });
  },
});

const LMUserReturnInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMUserReturnInput",
  definition(t: InputDefinitionBlock<string>) {
    t.nonNull.string("username");
    t.string("pass");
    t.list.nonNull.string("favProducts");
    t.nonNull.string("avatar");
    t.nonNull.string("lang");
    t.nonNull.string("currency");
    t.nonNull.field("measures", {
      type: LMMeasuresInput,
    });
    t.nonNull.string("email");
    t.nonNull.field("addresses", {
      type: LMAdressInput,
    });
  },
});

export {
  LMUserInfo,
  LMUserInfoInput,
  LMUser,
  LMUserInput,
  LMUserReturn,
  LMUserReturnInput
};
