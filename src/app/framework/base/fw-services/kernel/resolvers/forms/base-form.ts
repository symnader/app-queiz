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
