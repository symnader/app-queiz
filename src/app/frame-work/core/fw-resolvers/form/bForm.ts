import { fwFormGroup } from "src/app/frame-work/services/fw-custome/fw-form-group";
import { IPropertyFrm } from "../../fw-interfaces/form/iFormProperty";
import { IToolbar } from "../../fw-interfaces/toolbar/iToolbar";

export class BForm implements IPropertyFrm, IToolbar {
    constructor() { 
        this._fwForm = new fwFormGroup();
    }
    
    protected _fwForm : fwFormGroup;
    
    setToolbar(aryButtons: ToolbarButtons []): void {};
    setFormProperty(caption: string, displayTyp: DisplayType): void {};

    print(fn: Function): any {}
    exportTo(fn: Function): any {};
    importTo(fn: Function): any {};
    exit(fn: Function): any {};

    insert(fn: Function, callback: Function): void{};     
    edit(fn: Function, callback: Function): void {}
    delete(fn: Function, callback: Function): void {}
    save(fn: Function, callback: Function): void {}
    submit(fn: Function, callback: Function): void {}  

    getList(fn: Function, callback: Function): any {}
    getById(fn: Function, callback: Function): any {}
    getByFilters(fn: Function, callback: Function): any {}    
}