//@flow

import getQuery from "./getQuery";

const addFieldsToQuery = (fields: mixed, query: any, options: mixed) =>
  //console.log("fields en addFieldsToQuery", fields),
  //console.log("query en addFieldsToQuery", query.toString()),
  //console.log("options en addFieldsToQuery", options),
  getQuery(query, fields, options);

export default addFieldsToQuery;
