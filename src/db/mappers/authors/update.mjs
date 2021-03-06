// @flow

import type {$Request} from "express";

import {name as authorTableName} from "./authorTable";

const onUpdateSucceed = updatedAuthorsCount => updatedAuthorsCount === 1;

const getUpdateQuery = (db, id, row) =>
  db(authorTableName)
    .where({id})
    .update(row);

const updateUsing = (db, {id, ...rest}) => transaction =>
  getUpdateQuery(db, id, rest)
    .transacting(transaction)
    .then(onUpdateSucceed);

const update = (db: any, {body: author, headers}: $Request) =>
  db.transaction(updateUsing(db, author));

export default update;
