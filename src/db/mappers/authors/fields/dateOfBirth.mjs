// @flow

import moment from "moment";

import {name as authorTableName} from "../authorTable.mjs";

import type {Author} from "../../../../entities/Author";
import type {GetOptions} from "../types.mjs";

const columnName = "dateOfBirth";

const defaultOptions = {
  tableAlias: authorTableName
};

const columnAlias = "authorDateOfBirth";

const getOptionsWithDefaults = options => ({...defaultOptions, ...options});

const getTableAlias = options => getOptionsWithDefaults(options).tableAlias;

const getFullColumnName = options => `${getTableAlias(options)}.${columnName}`;

const getFullColumnAlias = options =>
  `${getTableAlias(options)}.${columnAlias}`;

const getColumnMapping = options => ({
  [getFullColumnAlias(options)]: getFullColumnName(options)
});

const toEntity = (entity: Author, row, options = {}) => ({
  ...entity,
  dateOfBirth: moment(row[getFullColumnAlias(options)]).format("MMM Do YY")
});

const toGet = (query: any, options = {}) =>
  query.column(getColumnMapping(options));

export {getFullColumnName, toGet, toEntity};
