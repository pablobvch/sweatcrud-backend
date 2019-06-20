// @flow

import {name as authorTableName} from "../authorTable.mjs";

import type {GetOptions} from "../types.mjs";

const columnName = "name";

const queryColumnAlias = "authorName";

const defaultOptions = {
  tableAlias: authorTableName
};

const getColumnAlias = (options = {}) =>
  `${{...defaultOptions, ...options}.tableAlias}.${columnName}`;

const getQueryToEntity = options => `${options.tableAlias}.${queryColumnAlias}`;

const getQueryColumnAlias = options => ({
  [getQueryToEntity(options)]: getColumnAlias(options)
});

const toRow = (query, options) => {};

const toEntity = (entity, row, options = {}) => ({
  ...entity,
  name: row[getQueryToEntity({...defaultOptions, ...options})]
});

const toGet = (query, options = {}) =>
  query.column(getQueryColumnAlias({...defaultOptions, ...options}));

const toRemove = (query, options) => {};

export {getColumnAlias, toRemove, toGet, toEntity, toRow};
