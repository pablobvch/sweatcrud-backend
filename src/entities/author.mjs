// @flow

import type {Publication} from "./publication";

type Author = {|
  dateOfBirth: Date,
  email: String,
  id: Number,
  name: String,
  publications: Array<Publication>
|};

export type {Author};
