// @flow

import type {Author} from "./author";

type Publication = {|
  body: string,
  dateTime: Date,
  id: Number,
  title: String,
  authorId: Number
|};

export type {Publication};
