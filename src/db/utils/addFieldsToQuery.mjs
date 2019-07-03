//@flow

import getQuery from "./getQuery";

const addFieldsToQuery = (fields: mixed, query: any, options: mixed) =>
  getQuery(query, fields, options);

export default addFieldsToQuery;
