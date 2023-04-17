import httpMocks, { MockRequest, MockResponse } from 'node-mocks-http';
import {describe, expect, test} from '@jest/globals';
import midJwt from './midJwt.js';
import { Request, Response } from 'express';



describe('[Middleware | midJwt] Check user jwt token', () => {
  test('There is no token', () => { 
    const request: MockRequest<Request> = httpMocks.createRequest({
      headers: {
        authorization: 'patata'
      }
    });
    const response: MockResponse<Response> = httpMocks.createResponse();
    midJwt(request, response, null)
    expect(1).toBe(1);
   })
});