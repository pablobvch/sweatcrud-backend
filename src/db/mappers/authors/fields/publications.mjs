//@flow

import addFieldsToQuery from "../../../utils/addFieldsToQuery";
import getRowToEntity from "../../../utils/getRowToEntity";
import {name as publicationTableName} from "../../publications/publicationTable";
import * as authorFields from "../../authors/fields/index";
import * as authorIdField from "../../authors/fields/id";
import * as publicationAuthorId from "../../publications/fields/authorId";
import * as publicationFields from "../../publications/fields/index";

import type {GetOptions} from "../../publications/types";
import type {Publication} from "../../../../entities/publication";

const defaultOptions = {};

const toRow = (publication, row) => ({...row, publication});

const getJoin = (query: any) =>
  /*console.log(
    "authorIdField.getFullColumnName",
    authorIdField.getFullColumnName({})
  ),
  console.log(
    "publicationAuthorId.getFullColumnName",
    publicationAuthorId.getFullColumnName({})
  ),*/
  query.leftJoin(
    publicationTableName,
    authorIdField.getFullColumnName({}),
    publicationAuthorId.getFullColumnName({})
  );

const toGet = (query: any) =>
  //console.log("parametro entrada en toGet", query),
  //console.log("getJoin de query en toGet", getJoin(query).toString()),
  addFieldsToQuery(publicationFields, getJoin(query), defaultOptions);

const toEntity = (entity, row) =>
  //console.log("entity en toEntity", entity),
  //console.log("row en toEntity", row),
  ({
    ...entity,
    publication: getRowToEntity(publicationFields, row, defaultOptions)
  });

export {toEntity, toGet, toRow};
