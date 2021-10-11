"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawLocales = exports.rawCountries = exports.constants = void 0;
const constants = {
    NUM_ADRRES: 10,
    NUM_IMGS: 50,
    NUM_PRODUCTS: 100,
    NUM_USERS: 10
};
exports.constants = constants;
var rawCountries_json_1 = require("./rawCountries.json");
Object.defineProperty(exports, "rawCountries", { enumerable: true, get: function () { return __importDefault(rawCountries_json_1).default; } });
var rawLocales_json_1 = require("./rawLocales.json");
Object.defineProperty(exports, "rawLocales", { enumerable: true, get: function () { return __importDefault(rawLocales_json_1).default; } });
//# sourceMappingURL=index.js.map