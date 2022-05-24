import { ErrorType } from "../../data-types/fw-enums/error-type";

export class ErrorVm {
    public errorMessage : string = '';
    public errorIssuer : string = '';
    public errorType : ErrorType = ErrorType.empty;
}
