"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LMBProduct_1 = __importDefault(require("./model/LMBProduct"));
const mongoose_1 = require("mongoose");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function connectDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const encodeUser = encodeURIComponent(process.env.DB_USER);
        const encodePass = encodeURIComponent(process.env.DB_USER_PASS);
        const credentials = `${encodeUser}:${encodePass}`;
        const host = `${process.env.DB_HOST}:${process.env.DB_PORT}`;
        const path = `mongodb://${credentials}@${host}/${process.env.DB_NAME}`;
        yield (0, mongoose_1.connect)(path);
    });
}
function insertProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        yield LMBProduct_1.default.create({
            name: "test",
            price: 10,
            description: "test",
            details: [
                {
                    key: "key",
                    value: "value",
                },
            ],
            colors: [],
            unds: 20,
            isFav: false,
            imgs: [],
        });
    });
}
connectDb()
    .then(insertProduct)
    .then(() => console.log("executed"))
    .catch((err) => console.error(err))
    .finally(() => console.log("Terminado"));
//# sourceMappingURL=index.js.map