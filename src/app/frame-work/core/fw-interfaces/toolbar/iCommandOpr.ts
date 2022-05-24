export interface  ICommandOperation {    
    insert(fn: Function, callback: Function): void;  
    edit(fn: Function, callback: Function): void;
    delete(fn: Function, callback: Function): void;
    save(fn: Function, callback: Function): void;
    submit(fn: Function, callback: Function): void;
} 