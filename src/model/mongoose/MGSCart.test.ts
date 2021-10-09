import { model } from "mongoose";
import { LMCart } from "lionmiss-core";
import { LMUserInfo } from "lionmiss-core";
import { setUp, dropDb, dropColls } from "../../test/model/MGS";
import { fixtureCart, fixtureUserInfo } from "../../../fixtures";
import { MGSCart } from "./index";
import { schemaUserInfo } from "./schemas";

const UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "userInfo");

const mgsCart = new MGSCart();

async function getUserInfoObj(): Promise<LMUserInfo> {
  await UserInfoModel.insertMany([fixtureUserInfo]);
  const userInfoList = await UserInfoModel.find({});
  const userInfo = userInfoList[0];
  return userInfo;
}

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
    const userInfo = await getUserInfoObj();
    const cart = (await mgsCart.getCart(userInfo._id)) as LMCart;
    expect(cart._id).toStrictEqual(userInfo.cart._id);
    expect(cart.promo).toStrictEqual(userInfo.cart.promo);
    expect(cart.taxes).toStrictEqual(userInfo.cart.taxes);
    expect(cart.products.length).toStrictEqual(userInfo.cart.products.length);
  });

  it("getCart: the cart doesn't exist", async () => {
    const cart = await mgsCart.getCart("123456789000");
    expect(cart).toEqual({});
  });
  
  it("postCart: a valid one", async () => {
    const userInfo = await getUserInfoObj();
    const ok = await mgsCart.postCart(userInfo._id, fixtureCart);
    expect(ok).toBeTruthy();
  });

  it("postCart: missing fields", async () => {
    const userInfo = await getUserInfoObj();
    expect(
      mgsCart.postCart(userInfo._id, { taxes: 21 } as LMCart)
    ).rejects.toEqual(expect.anything());
  });

  it("updateCart: update one succesfully", async () => {
    const userInfo = await getUserInfoObj();
    const cart = (await mgsCart.getCart(userInfo._id)) as LMCart;
    cart.taxes = 42;
    const ok = await mgsCart.updateCart(userInfo._id, cart);
    expect(ok).toBeTruthy();
  });

  it("updateCart: the id doesn't existe", async () => {
    const userInfo = await getUserInfoObj();
    const cart = (await mgsCart.getCart(userInfo._id)) as LMCart;
    cart.taxes = 42;
    const ok = await mgsCart.updateCart("123456789000", cart);
    expect(ok).toBeFalsy();
  });
});
