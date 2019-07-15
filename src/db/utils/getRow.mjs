// @flow

const getRowReducer = (entity, entityFields) => (row, fieldName) =>
  entityFields[fieldName].toRow(entity, row);

const allFieldsNames = entityFields => Object.keys(entityFields);

const getRow = (
  entity,
  entityFields,
  fieldNames = allFieldsNames(entityFields)
) => fieldNames.reduce(getRowReducer(entity, entityFields), {});

export default getRow;
