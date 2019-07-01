// @flow

import {name as authorTableName} from "./authorTable.mjs";
import * as authorFields from "./fields/index";
import addFieldsToQuery from "../../utils/addFieldsToQuery";
import getRowToEntity from "../../utils/getRowToEntity";

import type {GetOptions} from "./types.mjs";

const initializeQuery = query => query(authorTableName).select();

const getRowMapper = (options, authorFields) => row =>
  getRowToEntity(authorFields, row, options);

const getAll = (db: any, options: GetOptions) =>
  addFieldsToQuery(authorFields, initializeQuery(db), options.fields).map(
    getRowMapper(options, authorFields)
  );

export default getAll;
