import { model } from "mongoose";
import { LMCartProduct, LMPromo, LMCart } from "lionmiss-core";
import { LMUserInfo } from "lionmiss-core";
import { setUp, dropDb, dropColls } from "../../test/model/MGS";
import { fixtureCart, fixtureUserInfo } from "../../../fixtures";
import { MGSCart } from "./index";
import { schemaCartProduct, schemaUserInfo } from "./schemas";

const UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "usrInfo");
const CartProduct = model<LMCartProduct>("CartProduct", schemaCartProduct);

describe("MGSCart", () => {
  beforeAll(async function () {
    await setUp();
  });

  afterEach(async () => {
    await dropColls();
  });

  afterAll(async () => {
    await dropDb();
  });

  it("getCart: get a single cart", async () => {
    await UserInfoModel.insertMany([fixtureUserInfo]);
    const userInfoList = await UserInfoModel.find({});
    const userInfo = userInfoList[0];
    const mgsCart = new MGSCart();
    const cart = (await mgsCart.getCart(userInfo._id)) as LMCart;
    expect(cart._id).toStrictEqual(userInfo.cart._id);
    expect(cart.promo).toStrictEqual(userInfo.cart.promo);
    expect(cart.taxes).toStrictEqual(userInfo.cart.taxes);
    expect(cart.products.length).toStrictEqual(userInfo.cart.products.length);
  });

  it("getCart: the cart doesn't exist", async () => {
    const mgsCart = new MGSCart();
    const cart = await mgsCart.getCart("123456789000");
    expect(cart).toBeUndefined();
  });

  // it("getCart: the cart has invalid format", async () => {});

  /*
  it("LBMCountry", async () => {});

  it("LBMProduct", async () => {});

  it("LBMShipping", async () => {});

  it("LBMUser", async () => {});
  */
});
