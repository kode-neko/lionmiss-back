import httpMocks, {MockRequest, MockResponse} from "node-mocks-http";
import {describe, expect, test, jest} from "@jest/globals";
import midJwt from "./midJwt";
import {NextFunction, Request, Response} from "express";
import {faker} from "@faker-js/faker";

const {random} = faker;

describe("[Middleware | midJwt] Check user jwt token", () => {
  test("There is no token", () => {
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {},
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    midJwt(request, response, next);

    expect(response.statusCode).toBe(400);
    expect(response.json).toEqual({msj: "error.generic"});
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
    expect(response.json).toEqual({msj: "error.authorization"});
  });

  test("The token not correspond to user", () => {
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {
        authorization: random.word(),
      },
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    midJwt(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response.json).toEqual({msj: "error.user"});
  });

  test("The token is correct for the user", () => {
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {
        authorization: random.word(),
      },
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    const next: NextFunction = jest.fn();
    midJwt(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response.json).toEqual({msj: "error.user"});
  });
});
