"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureImgs = void 0;
const data_1 = require("./data");
const fixtureImgs = Array(data_1.constants.NUM_IMGS)
    .fill({})
    .map((_, index) => ({
    src: `img${index}.jpg`,
    title: "A piece of clothes",
    alt: "An example of piece of clothes",
    main: index === 0,
}));
exports.fixtureImgs = fixtureImgs;
//# sourceMappingURL=fixtureImgs.js.map