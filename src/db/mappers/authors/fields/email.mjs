// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setEmailAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as authorTableName} from "../authorTable";

import type {Author} from "../../../../entities/author";

const toRow = ({email}: Author, row: mixed) => ({email, ...row});

const defaultOptions = {
  tableAlias: authorTableName
};

const columnName = "email";

const columnAlias = "emailAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const email = setEmailAsStandarField(standarField, toRow);

export default email;
