// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setDatetimeAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as publicationTableName} from "../publicationTable";

import type {Publication} from "../../../../entities/publication";

const toRow = ({body}: Publication, row: mixed) => ({datetime, ...row});

const defaultOptions = {
  tableAlias: publicationTableName
};

const columnName = "datetime";

const columnAlias = "datetimeAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const datetime = setDatetimeAsStandarField(standarField, toRow);

export default datetime;
