/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/typedef */
import { NextFunction, Request, Response } from "express";
import { ValidationResult, ObjectSchema } from "joi";
import { validProduct } from "../validation/index.js";

function midJoiQuery(schema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { query } = req;
    const { error }: ValidationResult = schema.validate(query)
    if(!error)
      next();
    else
      throw new Error(error.message)
  }
}

function midJoiBody(schema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { error }: ValidationResult = schema.validate(body)
    if(!error)
      next();
    else
      throw new Error(error.message)
  }
}

export {
  midJoiQuery,
  midJoiBody
};