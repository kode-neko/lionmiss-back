import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef,
  ObjectDefinitionBlock,
  inputObjectType,
  objectType,
} from "nexus/dist/core";
import {LMImg, LMImgInput} from "./img";
import {LMMeasures, LMMeasuresInput} from "./measures";
import {LMUser, LMUserInput} from "./user";

const LMComment: NexusObjectTypeDef<string> = objectType({
  name: "LMComment",
  definition(t: ObjectDefinitionBlock<string>) {
    t.id("_id");
    t.nonNull.string("comment"),
      t.nonNull.string("date"),
      t.nonNull.int("ratting"),
      t.nonNull.field("measures", {
        type: LMMeasures,
      }),
      t.nonNull.field("user", {
        type: LMUser,
      }),
      t.nonNull.list.field("imgs", {
        type: LMImg,
      });
  },
});

const LMCommentInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMCommentInput",
  definition(t: InputDefinitionBlock<string>) {
    t.id("_id");
    t.nonNull.string("comment"),
      t.nonNull.string("date"),
      t.nonNull.int("ratting"),
      t.nonNull.field("measures", {
        type: LMMeasuresInput,
      }),
      t.nonNull.field("user", {
        type: LMUserInput,
      }),
      t.nonNull.list.field("imgs", {
        type: LMImgInput,
      });
  },
});

export {LMComment, LMCommentInput};
