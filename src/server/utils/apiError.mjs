// @flow

type ApiErrorPayload = {|code: number, scope: string|};

type ApiError = Error & {payload: ApiErrorPayload};

const from = (payload: ApiErrorPayload) => (error: Error) =>
  Object.assign(error, {payload});

const throwFrom = payload => error => {
  console.log("payload", payload);
  console.log("error", error);
  throw from(payload)(error);
};

export {throwFrom, from};

export type {ApiError, ApiErrorPayload};
