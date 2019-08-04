// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setTitleAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as publicationTableName} from "../publicationTable";

import type {Publication} from "../../../../entities/publication";

const toRow = ({body}: Publication, row: mixed) => ({title, ...row});

const defaultOptions = {
  tableAlias: publicationTableName
};

const columnName = "title";

const columnAlias = "titleAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const title = setTitleAsStandarField(standarField, toRow);

export default title;
