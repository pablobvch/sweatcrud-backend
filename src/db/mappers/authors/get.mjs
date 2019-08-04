// @flow

import {name as authorTableName} from "./authorTable.mjs";
import * as authorFields from "./fields/index";
import authorIdField from "./fields/id.mjs";
import addFieldsToQuery from "../../utils/addFieldsToQuery";
import getRowToEntity from "../../utils/getRowToEntity";

import type {GetOptionsById} from "./types.mjs";

const getRowMapper = (options, authorFields) => row =>
  getRowToEntity(authorFields, row, options);

const initializeQuery = (db, options) =>
  db(authorTableName)
    .select()
    .where(authorIdField.getFullColumnName(options), "=", options.id);

const get = (db: any, options: GetOptionsById) =>
  addFieldsToQuery(
    authorFields,
    initializeQuery(db, options),
    options.fields
  ).map(getRowMapper(options, authorFields));

export default get;
