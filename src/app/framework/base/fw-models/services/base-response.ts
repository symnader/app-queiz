import { ErrorVm } from "../errors.ts/error";

export class BaseResponse<T> {
    public resultModel!: T;
    public isSuccess: boolean = false;
    public errorModel: ErrorVm[] = [];
  }
