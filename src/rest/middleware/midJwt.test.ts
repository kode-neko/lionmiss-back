import * as dotenv from "dotenv";
import httpMocks, {MockRequest, MockResponse} from "node-mocks-http";
import {describe, expect, test, jest, beforeAll, afterAll} from "@jest/globals";
import midJwt from "./midJwt";
import {NextFunction, Request, Response} from "express";
import {faker} from "@faker-js/faker";
import {default as jwt} from "jsonwebtoken";
import {MongoMemoryServer} from "mongodb-memory-server";
import {Collection, Db, MongoClient, ObjectId} from "mongodb";
import {fixtureUser, fixtureUsersInfo} from "../../test/fixtures";
import path from "path";
import {Mongoose, connect} from "mongoose";

const {random} = faker;
dotenv.config({path: path.resolve(process.cwd(), ".env.test")});

describe("[Middleware | midJwt] Check user jwt token", () => {
  let mongoMem: MongoMemoryServer;
  let urlDb: string;
  let client: MongoClient;
  let db: Db;
  let mongooseDb: Mongoose;

  let userInfoColl: Collection;
  let userColl: Collection;

  beforeAll(async () => {
    mongoMem = await MongoMemoryServer.create();
    urlDb = mongoMem.getUri();
    client = new MongoClient(urlDb);
    await client.connect();
    db = client.db("lionmiss");
    userInfoColl = await db.createCollection("userInfo");
    userColl = await db.createCollection("user");

    mongooseDb = await connect(urlDb + "lionmiss?authSource=lionmiss");
  });

  beforeEach(async () => {
    await userInfoColl.insertOne(fixtureUsersInfo[0]);
    await userColl.insertOne({...fixtureUser, _id: new ObjectId()});
  });

  afterEach(async () => {
    await userInfoColl.deleteMany({});
    await userColl.deleteMany({});
  });

  afterAll(async () => {
    // await userInfoColl.drop();
    // await userColl.drop();
    await mongooseDb.disconnect();
    await client.close();
    await mongoMem.stop();
  });

  test("There is no token", () => {
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {},
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    midJwt(request, response, next);

    expect(response.statusCode).toBe(400);
    expect(response._getJSONData()).toEqual({msj: "error.generic"});
  });

  test("The token is wrong formed", () => {
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

  test("The token is correct for the user", async () => {
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
