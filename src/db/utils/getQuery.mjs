// @flow

const defaultOptions = entityFields => ({fields: Object.keys(entityFields)});

const getOptionsWithDefaults = (options, entityFields) => ({
  ...defaultOptions(entityFields),
  ...options
});

const getColumnField = (options, entityFields) => (query, field) =>
  entityFields[field].toGet(query, options);

const addFieldsToQueryUsing = (query, entityFields, options) =>
  options.fields.reduce(getColumnField(options, entityFields), query);

const getQuery = (query: any, entityFields: mixed, options: mixed = {}) =>
  addFieldsToQueryUsing(
    query,
    entityFields,
    getOptionsWithDefaults(options, entityFields)
  );

export default getQuery;
