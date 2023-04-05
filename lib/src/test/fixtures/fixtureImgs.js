import { constants } from "./data/index.js";
const fixtureImgs = Array(constants.NUM_IMGS)
    .fill({})
    .map((_, index) => ({
    src: `img${index}.jpg`,
    title: "A piece of clothes",
    alt: "An example of piece of clothes",
    main: index === 0,
}));
export { fixtureImgs };
//# sourceMappingURL=fixtureImgs.js.map