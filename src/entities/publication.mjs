// @flow

import type {Author} from "./author";

type Publication = {
  authors: Array<Author>,
  body: string,
  dateTime: Date,
  id: number,
  title: string
};
