// @flow
// @flow

import Router from "express";

import type {$Request, $Response, $Router} from "express";

import {sendFrom as apiResultSendFrom} from "../../utils/apiResult";
import {throwFrom as apiErrorThrowFrom} from "../../utils/apiError";
import * as apiErrorPayloads from "./apiErrorPayloads";
import * as publicationMapper from "../../../db/mappers/publications/index";

const publicationsRouter: $Router = Router();

publicationsRouter.get("/", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    publicationMapper
      .getAll(response.locals.db, request.body)
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

const getUsing = (id, fields) => (fields ? {id, fields} : {id});

publicationsRouter.get("/:id", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    publicationMapper
      .get(response.locals.db, getUsing(request.params.id, request.body.fields))
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

export default publicationsRouter;
