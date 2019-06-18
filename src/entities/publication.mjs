// @flow

import type { Author } from "./Author";

type Publication = {
  authors: Array<Author>,
  body: string,
  date: Date,
  id: number,
  time: number,
  title: string
};
