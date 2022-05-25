import { IBaseVm } from "src/app/frame-work/models/entities/base-entity";
import { ErrorVm } from "src/app/frame-work/models/fw-Vm/error-vm";
import { fwFormGroup } from "src/app/frame-work/services/fw-custome/fw-form-group";
import { IPropertyFrm } from "../../fw-interfaces/form/iFormProperty";
import { IToolbar } from "../../fw-interfaces/toolbar/iToolbar";

export class BForm implements IPropertyFrm, IToolbar {
    constructor() { 
        this._fwForm = new fwFormGroup();
    }
    
    protected _fwForm : fwFormGroup;
    
    setToolbar(aryButtons: ToolbarButtons []): void { };
    setFormProperty(caption: string, displayTyp: DisplayType): void { };
    
    print(fn: Function): any { }
    exportTo(fn: Function): any { };
    importTo(fn: Function): any { };
    exit(fn: Function): any { };

    insert(entity: IBaseVm, callback: Function): void {}
    update(entity: IBaseVm, callback: Function): void {}
    delete(entity: IBaseVm, callback: Function): void {}
    submit(entity: IBaseVm, callback: Function): void {}
    
    getList(): IBaseVm [] { throw new ErrorVm(); }
    getById(id: number): IBaseVm { throw new ErrorVm(); }
    getByFilters(entity: IBaseVm): IBaseVm [] {throw new ErrorVm(); }
}