// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setDateOfBirthAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as authorTableName} from "../authorTable";

import type {Author} from "../../../../entities/author";

const toRow = ({dateOfBirth}: Author, row: mixed) => ({dateOfBirth, ...row});

const defaultOptions = {
  tableAlias: authorTableName
};

const columnName = "dateOfBirth";

const columnAlias = "dateOfBirthAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const dateOfBirth = setDateOfBirthAsStandarField(standarField, toRow);

export default dateOfBirth;
