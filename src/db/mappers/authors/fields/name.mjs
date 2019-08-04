// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setNameAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as authorTableName} from "../authorTable";

import type {Author} from "../../../../entities/author";

const toRow = ({name}: Author, row: mixed) => ({name, ...row});

const defaultOptions = {
  tableAlias: authorTableName
};

const columnName = "name";

const columnAlias = "nameAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const name = setNameAsStandarField(standarField, toRow);

export default name;
