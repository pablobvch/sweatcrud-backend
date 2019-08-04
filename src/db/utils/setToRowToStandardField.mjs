// @flow

const setToRowToStandardField = (standardField: any, toRow: Function) => ({
  ...standardField,
  toRow
});

export default setToRowToStandardField;
