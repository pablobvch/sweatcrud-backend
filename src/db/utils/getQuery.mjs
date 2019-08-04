// @flow

const defaultOptions = entityFields => ({fields: Object.keys(entityFields)});

const getOptionsWithDefaults = (options, entityFields) => ({
  ...defaultOptions(entityFields),
  ...options
});

const getColumnField = (entityFields, options) => (query, field) =>
  entityFields[field].toGet(query, options);

const addFieldsToQueryUsing = (entityFields, options, query) =>
  options.fields.reduce(getColumnField(entityFields, options), query);

const getQuery = (
  entityFields: Array<$Keys<mixed>>,
  options: mixed = {},
  query: any
) =>
  addFieldsToQueryUsing(
    entityFields,
    getOptionsWithDefaults(options, entityFields),
    query
  );

export default getQuery;
