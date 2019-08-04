//@flow

import getQuery from "./getQuery";

const addFieldsToQuery = (fields: any, query: any, options: any) =>
  getQuery(fields, options, query);

export default addFieldsToQuery;
