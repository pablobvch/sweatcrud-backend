// @flow

import addFieldsToQuery from "../../utils/addFieldsToQuery";
import getRowToEntity from "../../utils/getRowToEntity";
import publicationIdField from "./fields/id.mjs";
import {name as publicationTableName} from "./publicationTable.mjs";
import * as publicationFields from "./fields/index";

import type {GetOptionsById} from "./types.mjs";

const getRowMapper = (options, publicationFields) => row =>
  getRowToEntity(publicationFields, row, options);

const initializeQuery = (db, options) =>
  db(publicationTableName)
    .select()
    .where(publicationIdField.getFullColumnName(options), "=", options.id);

const get = (db: any, options: GetOptionsById) =>
  addFieldsToQuery(
    publicationFields,
    initializeQuery(db, options),
    options.fields
  ).map(getRowMapper(options, publicationFields));

export default get;
