import { NextFunction, Request, Response } from "express";
import { ValidationResult, Schema } from "joi";

function midJoiQuery(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const {query} = req;
    const { error }: ValidationResult = schema.validate(query)
    if(!error)
      next();
    else
      throw new Error()
  }
}

function midJoiBody(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const { error }: ValidationResult = schema.validate(body)
    if(!error)
      next();
    else
      throw new Error()
  }
}

export {
  midJoiQuery,
  midJoiBody
};