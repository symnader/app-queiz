import { IBaseVm } from "src/app/frame-work/models/entities/base-entity";

export interface  ICommandOperation {    
    insert(entity: IBaseVm, callback: Function): void;
    update(entity: IBaseVm, callback: Function): void;
    delete(entity: IBaseVm, callback: Function): void;
    submit(entity: IBaseVm, callback: Function): void;
} 