export interface IQueryOpr {
    getList(fn: Function, callback: Function): any;  // refresh btn
    getById(fn: Function, callback: Function): any;
    getByFilters(fn: Function, callback: Function): any;
} 