export interface IStringValidation {
  setStringValidator(minLength: number, maxLength: number, required: boolean, errorMsg: string): void;
}
