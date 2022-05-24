import { ErrorVm } from "./error-vm";

export class BaseResponse<T> {
    public isSuccess: boolean = false;
    public resultModel: T ;
    public errorModel: ErrorVm[] = [];
  }
  