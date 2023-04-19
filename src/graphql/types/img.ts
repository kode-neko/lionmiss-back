import {NexusInputObjectTypeDef, NexusObjectTypeDef, inputObjectType, objectType} from "nexus/dist/core";

const LMImg: NexusObjectTypeDef<string> = objectType({
  name: "LMImg",
  definition(t) {
    t.id("_id");
    t.nonNull.string("src");
    t.string("title");
    t.string("alt");
    t.boolean("main");
  },
});

const LMImgInput: NexusInputObjectTypeDef<string> = inputObjectType({
  name: "LMImgInput",
  definition(t) {
    t.nullable.id("_id");
    t.nonNull.string("src");
    t.string("title");
    t.string("alt");
    t.boolean("main");
  },
});

export {LMImg, LMImgInput};
