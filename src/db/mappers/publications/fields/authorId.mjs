// @flow

import createStandardField from "../../../utils/createStandardField";
import {default as setAuthorIdAsStandarField} from "../../../utils/setToRowToStandardField";
import {name as publicationTableName} from "../publicationTable";

import type {Publication} from "../../../../entities/publication";

const toRow = ({authorId}: Publication, row: mixed) => ({authorId, ...row});

const defaultOptions = {
  tableAlias: publicationTableName
};

const columnName = "authorId";

const columnAlias = "authorIdAlias";

const standarField = createStandardField(
  columnAlias,
  columnName,
  defaultOptions
);

const authorId = setAuthorIdAsStandarField(standarField, toRow);

export default authorId;
