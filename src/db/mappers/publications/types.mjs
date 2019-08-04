// @flow

import type {Publication} from "../../../entities/publication.mjs";

type GetOptions = {|
  fields: Array<$Keys<Publication>>
|};

type GetOptionsById = {|
  id: number,
  fields: Array<$Keys<Publication>>
|};

type CreateOptions = {|entity: Publication|};

export type {CreateOptions, GetOptions, GetOptionsById};
