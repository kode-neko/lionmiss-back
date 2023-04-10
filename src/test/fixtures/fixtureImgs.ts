import { LMImg } from "lionmiss-core";
import { constants } from "./data/index.js";

const fixtureImgs: LMImg[] = Array(constants.NUM_IMGS)
  .fill({})
  .map((_: unknown, index: number) => ({
    src: `img${index}.jpg`,
    title: "A piece of clothes",
    alt: "An example of piece of clothes",
    main: index === 0,
  }));

export { fixtureImgs };
