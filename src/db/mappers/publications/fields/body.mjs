// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setBodyAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as publicationTableName} from "../publicationTable";

import type {Publication} from "../../../../entities/publication";

const toRow = ({body}: Publication, row: mixed) => ({body, ...row});

const defaultOptions = {
  tableAlias: publicationTableName
};

const columnName = "body";

const columnAlias = "bodyAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const body = setBodyAsStandarField(standarField, toRow);

export default body;
