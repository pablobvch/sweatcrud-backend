// @flow

import type { $Response } from "express";

import type { ApiError, ApiErrorPayload } from "./apiError.mjs";

type SuccessfulApiResult<Data> = {| data: Data |};

type FailedApiResult = {| error: ApiErrorPayload |};

type ApiResult<Data> = FailedApiResult | SuccessfulApiResult<Data>;

const getSender = createApiResult => response => params =>
  response.send(createApiResult(params));

const createFailed = ({ payload }: ApiError) => ({
  error: payload
});

const getFailedSender = getSender(createFailed);

const createSuccessful = data => ({ data });

const getSuccessfulSender = getSender(createSuccessful);

const sendFrom = <Data>(response: $Response, promise: Promise<Data>) =>
  promise.then(getSuccessfulSender(response)).catch(getFailedSender(response));

export { sendFrom };

export type { ApiResult };
