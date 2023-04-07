import { NextFunction, Request, Response } from "express";
import Joi from "joi";

function midJoiQuery(schema: Joi.Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const {query} = req;
    const isValid = schema.validate(query)
  }
}

function midJoiBody(schema: Joi.Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const isValid = schema.validate(body)
    if(isValid)
      next();
    else
      throw new LMBError()
  }
}

export {
  midJoiQuery,
  midJoiBody
};