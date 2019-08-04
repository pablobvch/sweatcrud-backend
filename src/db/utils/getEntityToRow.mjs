// @flow

const getRowReducer = (entity, entityFields) => (row, fieldName) =>
  entityFields[fieldName].toRow(entity, row);

const getAllFieldNames = entityFields => Object.keys(entityFields);

const getEntityToRow = (
  entity: mixed,
  entityFields: any,
  fieldNames: Array<string> = getAllFieldNames(entityFields)
) => fieldNames.reduce(getRowReducer(entity, entityFields), {});

export default getEntityToRow;
