//@flow

import getQuery from "./getQuery";

const addFieldsToQuery = (fields, query, options) =>
  getQuery(query, fields, options);

export default addFieldsToQuery;
