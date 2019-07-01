// @flow

import {name as publicationTableName} from "./publicationTable.mjs";
import * as publicationFields from "./fields/index";
import addFieldsToQuery from "../../utils/addFieldsToQuery";
import getRowToEntity from "../../utils/getRowToEntity";

import type {GetOptions} from "./types.mjs";

const initializeQuery = query => query(publicationTableName).select();

const getRowMapper = (options, publicationFields) => row =>
  getRowToEntity(publicationFields, row, options);

const getAll = (db: any, options: GetOptions) =>
  addFieldsToQuery(publicationFields, initializeQuery(db), options.fields).map(
    getRowMapper(options, publicationFields)
  );

export default getAll;
