// @flow

const defaultOptions = fields => ({fields: Object.keys(fields)});

const getOptionsWithDefaults = (fields, options) => ({
  ...defaultOptions(fields),
  ...options
});

const getFieldToEntity = (entityFields, row, options) => (entity, field) =>
  entityFields[field].toEntity(entity, row, options);

const getRowToEntityUsing = (entityFields, row, options) =>
  options.fields.reduce(getFieldToEntity(entityFields, row, options), {});

const getRowToEntity = (entityFields: any, row: mixed, options: mixed) =>
  getRowToEntityUsing(
    entityFields,
    row,
    getOptionsWithDefaults(entityFields, options)
  );

export default getRowToEntity;
