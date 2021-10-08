import { setUp, dropDb, dropColls } from "../test/model/db";
import {
  img,
  product,
  promo,
  cart,
  user,
  country,
  shipping,
} from "../test/model/fixtures";
import {
  CartModel,
  CountryModel,
  ProductModel,
  ShippingModel,
  UserInfoModel,
} from "./index";

describe("Test model", () => {
  beforeAll(async function () {
    await setUp();
  });

  afterEach(async () => {
    await dropColls();
  });

  afterAll(async () => {
    await dropDb();
  });

  it("LBMCarts", async () => {
    const cartResult = await CartModel.create(cart);
    console.log(cartResult);
  });

  /*
  it("LBMCountry", async () => {});

  it("LBMProduct", async () => {});

  it("LBMShipping", async () => {});

  it("LBMUser", async () => {});
  */
});
