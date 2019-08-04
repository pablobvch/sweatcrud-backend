// @flow

import Router from "express";

import type {$Request, $Response} from "express";

import {sendFrom as apiResultSendFrom} from "../../utils/apiResult";
import {throwFrom as apiErrorThrowFrom} from "../../utils/apiError";
import * as apiErrorPayloads from "./apiErrorPayloads";
import * as authorMapper from "../../../db/mappers/authors/index";

const authorsRouter = Router();

authorsRouter.get("/", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    authorMapper
      .getAll(response.locals.db, request.body)
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

const getUsing = (id, fields) => (fields ? {id, fields} : {id});

authorsRouter.get("/:id", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    authorMapper
      .get(response.locals.db, getUsing(request.params.id, request.body.fields))
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

authorsRouter.post("/", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    authorMapper
      .create(response.locals.db, request)
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

authorsRouter.put("/", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    authorMapper
      .update(response.locals.db, request)
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

authorsRouter.delete("/:id", (request: $Request, response: $Response) =>
  apiResultSendFrom(
    response,
    authorMapper
      .remove(response.locals.db, parseInt(request.params.id))
      .catch(apiErrorThrowFrom(apiErrorPayloads.unknown))
  )
);

export default authorsRouter;
