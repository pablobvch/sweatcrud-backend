// @flow

const getFieldsNamesButId = (entityFields: any, entityIdField: any) =>
  Object.keys(entityFields).filter(
    fieldName => fieldName != entityIdField.getFullColumnName()
  );

export default getFieldsNamesButId;
