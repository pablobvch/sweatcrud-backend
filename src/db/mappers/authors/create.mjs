// @flow

import type {$Request, $Response} from "express";

import authorIdField from "./fields/id";
import getFieldsNamesButId from "../../utils/getFieldsNamesButId";
import getEntityToRow from "../../utils/getEntityToRow";
import {name as authorTableName} from "./authorTable";
import * as publication from "../publications/index";
import * as authorFields from "./fields/index";

import type {CreateOptions} from "./types.mjs";

const onAuthorCreated = author => author;

const fieldsNamesButId = getFieldsNamesButId(authorFields, authorIdField);

const getInsertQuery = (db, author) =>
  db
    .insert(getEntityToRow(author, authorFields, fieldsNamesButId))
    .into(authorTableName)
    .returning("*");

const createUsing = (db, author) => trx =>
  getInsertQuery(db, author)
    .transacting(trx)
    .then(onAuthorCreated);

const create = (db: any, {body: author}: $Request) =>
  db.transaction(createUsing(db, author));

export default create;
