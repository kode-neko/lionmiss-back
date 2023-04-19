import * as dotenv from "dotenv";
import httpMocks, {MockRequest, MockResponse} from "node-mocks-http";
import {describe, expect, test, jest, beforeAll, afterAll} from "@jest/globals";
import midJwt from "./midJwt";
import {NextFunction, Request, Response} from "express";
import {faker} from "@faker-js/faker";
import {default as jwt} from "jsonwebtoken";
import {Collection, Db, ObjectId} from "mongodb";
import path from "path";
import {cleanDbTest, getDb, initDbTest} from "../../test/db";
import {fixtureUser, fixtureUsersInfo} from "../../test/fixtures";

const {random} = faker;
dotenv.config({path: path.resolve(process.cwd(), ".env.test")});

let userInfoColl: Collection;
let userColl: Collection;

describe("[Mid | midJwt] Check user jwt token", () => {
  beforeAll(async () => {
    try {
      await initDbTest();
      const db: Db = getDb();
      userInfoColl = await db.createCollection("userInfo");
      userColl = await db.createCollection("user");
    } catch (err) {
      console.error(err);
      await cleanDbTest();
    }
  });

  afterAll(async () => {
    try {
      await userColl.drop();
      await userInfoColl.drop();
      await cleanDbTest();
    } catch (err) {
      console.error(err);
      await cleanDbTest();
    }
  });

  beforeEach(async () => {
    try {
      await userInfoColl.insertOne(fixtureUsersInfo[0]);
      await userColl.insertOne({...fixtureUser, _id: new ObjectId()});
    } catch (err) {
      console.error(err);
      await cleanDbTest();
    }
  });

  afterEach(async () => {
    try {
      await userInfoColl.deleteMany({});
      await userColl.deleteMany({});
    } catch (err) {
      console.error(err);
      await cleanDbTest();
    }
  });

  test.skip("There is no token", () => {
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {},
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    midJwt(request, response, next);

    expect(response.statusCode).toBe(400);
    expect(response._getJSONData()).toEqual({msj: "error.generic"});
  });

  test.skip("The token is wrong formed", () => {
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {
        authorization: random.word(),
      },
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    midJwt(request, response, next);

    expect(response.statusCode).toBe(400);
    expect(response._getJSONData()).toEqual({msj: "error.authorization"});
  });

  test("The token not correspond to user", async () => {
    const token: string = jwt.sign({username: "patata"}, process.env.KEY_TOKEN);
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    await midJwt(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response._getJSONData()).toEqual({msj: "error.user"});
  });

  test.skip("The token is correct for the user", async () => {
    const token: string = jwt.sign({username: "test"}, process.env.KEY_TOKEN);
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    await midJwt(request, response, next);

    expect((next as jest.MockedFunction<NextFunction>).mock.calls).toHaveLength(
      1
    );
  });
});
