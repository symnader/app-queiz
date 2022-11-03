export interface INumberValidation {
  setNumberValidator(min: number, max: number, required: boolean, errorMsg: string): void;
}
