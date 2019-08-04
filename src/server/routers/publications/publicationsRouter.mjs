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

publicationsRouter.get(
  "/author/:id",
  (request: $Request, response: $Response) =>
    apiResultSendFrom(
      response,
      publicationMapper
        .getByAuthorId(
          response.locals.db,
          getUsing(request.params.id, request.body.fields)
        )
        .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
    )
);

publicationsRouter.post("/", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    publicationMapper
      .create(response.locals.db, request)
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

publicationsRouter.put("/", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    publicationMapper
      .update(response.locals.db, request)
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

publicationsRouter.delete("/:id", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    publicationMapper
      .remove(response.locals.db, parseInt(request.params.id))
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

export default publicationsRouter;
