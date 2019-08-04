// @flow

import type {$Request} from "express";

import {name as publicationTableName} from "./publicationTable";

const onUpdateSucceed = updatedPublicationsCount =>
  updatedPublicationsCount === 1;

const getUpdateQuery = (db, id, row) =>
  db(publicationTableName)
    .where({id})
    .update(row);

const updateUsing = (db, {id, ...rest}) => transaction =>
  getUpdateQuery(db, id, rest)
    .transacting(transaction)
    .then(onUpdateSucceed);

const update = (db: any, {body: publication, headers}: $Request) =>
  db.transaction(updateUsing(db, publication));

export default update;
