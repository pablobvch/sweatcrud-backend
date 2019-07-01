// @flow

import {name as authorTableName} from "../authorTable.mjs";

import type {GetOptions} from "../types.mjs";
import type {Author} from "../../../../entities/author";

const columnName = "id";

const defaultOptions = {
  tableAlias: authorTableName
};

const columnAlias = "authorId";

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
  id: row[getFullColumnAlias(options)]
});

const toGet = (query: any, options = {}) =>
  query.column(getColumnMapping(options));

export {getFullColumnName, toGet, toEntity};
