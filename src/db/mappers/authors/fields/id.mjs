// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setIdAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as authorTableName} from "../authorTable";

import type {Author} from "../../../../entities/author";

const toRow = ({id}: Author, row: mixed) => row;

const defaultOptions = {
  tableAlias: authorTableName
};

const columnName = "id";

const columnAlias = "authorId";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const id = setIdAsStandarField(standarField, toRow);

export default id;
