// @flow

import type {$Request, $Response} from "express";

import publicationIdField from "./fields/id";
import getFieldsNamesButId from "../../utils/getFieldsNamesButId";
import getEntityToRow from "../../utils/getEntityToRow";
import {name as publicationTableName} from "./publicationTable";
import * as publication from "../publications";
import * as publicationFields from "./fields";

import type {CreateOptions} from "./types.mjs";

const onPublicationCreated = publication => publication;

const fieldsNamesButId = getFieldsNamesButId(
  publicationFields,
  publicationIdField
);

const getInsertQuery = (db, publication) =>
  db
    .insert(getEntityToRow(publication, publicationFields, fieldsNamesButId))
    .into(publicationTableName)
    .returning("*");

const createUsing = (db, publication) => trx =>
  getInsertQuery(db, publication)
    .transacting(trx)
    .then(onPublicationCreated);

const create = (db: any, {body: publication}: $Request) =>
  db.transaction(createUsing(db, publication));

export default create;
