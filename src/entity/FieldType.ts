export interface FieldTypeInterface {
  fieldType: any;
  dataType: any;
}

export class FieldType implements FieldTypeInterface {
  private fieldType: any;
  private dataType: any;

  constructor(
    fieldType: any,
    dataType: any
  ) {
    this.fieldType = fieldType;
    this.dataType = dataType;
  }
}
