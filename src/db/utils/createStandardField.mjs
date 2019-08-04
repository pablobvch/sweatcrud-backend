//@flow

import moment from "moment";

type TDefaultOptions = {|
  tableAlias: string
|};

const getOptionsWithDefaults = (defaultOptions, options): any => ({
  ...defaultOptions,
  ...options
});

const getTableAlias = (defaultOptions, options) =>
  getOptionsWithDefaults(defaultOptions, options).tableAlias;

const getFullColumnName = (columnName: string, defaultOptions, options: {}) =>
  `${getTableAlias(defaultOptions, options)}.${columnName}`;

const getFullColumnAlias = (columnAlias, defaultOptions, options): string =>
  `${getTableAlias(defaultOptions, options)}.${columnAlias}`;

const getColumnMapping = (
  columnAlias,
  columnName,
  defaultOptions,
  options
) => ({
  [getFullColumnAlias(columnAlias, defaultOptions, options)]: getFullColumnName(
    columnName,
    defaultOptions,
    options
  )
});

const toGet = (
  columnAlias: string,
  columnName: string,
  defaultOptions: TDefaultOptions,
  query: any,
  options: {} = {}
) =>
  query.column(
    getColumnMapping(columnAlias, columnName, defaultOptions, options)
  );

const checkIfFieldIsDate = columnName =>
  columnName === "dateOfBirth" || columnName === "dateTime";

const toEntity = (
  columnAlias: string,
  columnName: string,
  defaultOptions: TDefaultOptions,
  entity: {},
  row: {},
  options: {} = {}
) => ({
  ...entity,
  [columnName]: checkIfFieldIsDate(columnName)
    ? moment(
        row[getFullColumnAlias(columnAlias, defaultOptions, options)]
      ).format()
    : row[getFullColumnAlias(columnAlias, defaultOptions, options)]
});

const createStandardField = (
  columnAlias: string,
  columnName: string,
  defaultOptions: TDefaultOptions
) => ({
  getColumnName: () => columnName,
  getFullColumnName: (options: mixed) =>
    getFullColumnName(columnName, defaultOptions, options),
  toEntity: (entity: mixed, row: mixed, options: mixed) =>
    toEntity(columnAlias, columnName, defaultOptions, entity, row, options),
  toGet: (query: any, options: mixed) =>
    toGet(columnAlias, columnName, defaultOptions, query, options)
});

export default createStandardField;
