import { NextFunction, Request, Response } from "express";
import { ValidationResult, Schema, ValidationErrorItem } from "joi";

function commonMidJoi(schema: Schema, contentPending: {[key: string]: unknown}, res: Response, next: NextFunction) {
  const validate: ValidationResult = schema.validate(contentPending, {abortEarly: false})
  if(!validate.error)
    next();
  else
    res
      .status(500)
      .json(validate.error.details.map(
        (err: ValidationErrorItem) => err.message)
    );
}

function midJoiQuery(schema: Schema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { query } = req;
    commonMidJoi(schema, query, res, next)
  }
}

function midJoiBody(schema: Schema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    commonMidJoi(schema, body, res, next)
  }
}

export {
  midJoiQuery,
  midJoiBody
};