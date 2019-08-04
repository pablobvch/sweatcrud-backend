// @flow

import type {Author} from "../../../entities/author.mjs";

type GetOptions = {|
  fields: Array<$Keys<Author>>
|};

type GetOptionsById = {|
  id: number,
  fields: Array<$Keys<Author>>
|};

type CreateOptions = {|entity: Author|};

export type {CreateOptions, GetOptions, GetOptionsById};
