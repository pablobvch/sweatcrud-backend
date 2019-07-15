// @flow
import {name as authorTableName} from "./authorTable";
import * as publication from "../publications/index";
import * as authorFields from "./fields/index";
import getRow from "../../utils/getRow";

import type {CreateOptions} from "./types.mjs";

const addUser = (row, userId) => ({...row, Iuser: userId});

const onAuthorCreated = (author, id) => ({
  ...author,
  id
});

const fieldNamesButId = Object.keys(authorFields).filter(
  fieldName => fieldName != authorFields.id.name
);

const getInsertQuery = (db, author) =>
  db
    .insert(getRow(author, authorFields, fieldNamesButId))
    .into(authorTableName);

const createUsing = (db, author) => trx =>
  getInsertQuery(db, author)
    .transacting(trx)
    .then(onAuthorCreated(author, ids[0]));

const create = (db, {body: author}) => db.transaction(createUsing(db, author));

export default create;
