// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setIdAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as publicationTableName} from "../publicationTable";

import type {Publication} from "../../../../entities/publication";

const toRow = ({body}: Publication, row: mixed) => ({id, ...row});

const defaultOptions = {
  tableAlias: publicationTableName
};

const columnName = "id";

const columnAlias = "idAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const id = setIdAsStandarField(standarField, toRow);

export default id;
