// @flow

import Router from "express";

import type {$Request, $Response, $Router} from "express";

import {sendFrom as apiResultSendFrom} from "../../utils/apiResult";
import {throwFrom as apiErrorThrowFrom} from "../../utils/apiError";
import * as apiErrorPayloads from "./apiErrorPayloads";
import * as authorMapper from "../../../db/mappers/author/index";

const authoresRouter: $Router = Router();

authoresRouter.get("/", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    authorMapper
      .getAll(response.locals.db, request.body)
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

const getUsing = (id, fields) => (fields ? {id, fields} : {id});

authoresRouter.get("/:id", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    authorMapper
      .get(response.locals.db, getUsing(request.params.id, request.body.fields))
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

export default authoresRouter;
