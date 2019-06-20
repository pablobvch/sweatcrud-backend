// @flow

import {name as authorTableName} from "../authorTable.mjs";

import type {GetOptions} from "../types.mjs";
import type {Author} from "../../../../entities/author";

const columnName = "id";

const defaultOptions = {
  tableAlias: authorTableName
};

const queryColumnAlias = "authorId";

const getColumnAlias = (options = {}) =>
  `${{...defaultOptions, ...options}.tableAlias}.${columnName}`;

const getQueryToEntity = options => `${options.tableAlias}.${queryColumnAlias}`;

const getQueryColumnAlias = options => ({
  [getQueryToEntity(options)]: getColumnAlias(options)
});

const toRow = (query: any, options) => {};

const toEntity = (entity: Author, row, options = {}) => ({
  ...entity,
  id: row[getQueryToEntity({...defaultOptions, ...options})]
});

const toGet = (query: any, options = {}) =>
  query.column(getQueryColumnAlias({...defaultOptions, ...options}));

const toRemove = (query: any, options) => {};

export {getColumnAlias, toRemove, toGet, toEntity, toRow};
