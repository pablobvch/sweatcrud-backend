// @flow

import type {$NextFunction, $Request, $Response} from "express";

import db from "../../db/index";

const dependencies = {
  db
};

const dependenciesMiddleware = (
  request: $Request,
  response: $Response,
  next: $NextFunction
) => {
  Object.assign(response.locals, dependencies);
  next();
};

export default dependenciesMiddleware;
