import { IBaseVm } from "src/app/frame-work/models/entities/base-entity";

export interface IQueryOpr {
    getList(): any;
    getById(id: number): any;
    getByFilters(entity: IBaseVm): any;
} 