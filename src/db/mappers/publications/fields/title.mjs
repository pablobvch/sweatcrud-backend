// @flow

import {name as publicationTableName} from "../publicationTable.mjs";

import type {GetOptions} from "../types.mjs";
import type {Publication} from "../../../../entities/publication";

const columnName = "title";

const defaultOptions = {
  tableAlias: publicationTableName
};

const columnAlias = "publicationTitle";

const getOptionsWithDefaults = options => ({...defaultOptions, ...options});

const getTableAlias = options => getOptionsWithDefaults(options).tableAlias;

const getFullColumnName = options => `${getTableAlias(options)}.${columnName}`;

const getFullColumnAlias = options =>
  `${getTableAlias(options)}.${columnAlias}`;

const getColumnMapping = options => ({
  [getFullColumnAlias(options)]: getFullColumnName(options)
});

const toEntity = (entity: Publication, row, options = {}) => ({
  ...entity,
  title: row[getFullColumnAlias(options)]
});

const toGet = (query: any, options = {}) =>
  query.column(getColumnMapping(options));

export {getFullColumnName, toGet, toEntity};
