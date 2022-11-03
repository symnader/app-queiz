import { Injectable } from '@angular/core';
import { IBaseVm } from 'src/app/framework/base/fw-models/entities/base-entity';
import { ISimpleFrm } from 'src/app/framework/base/_kernel/_types/form-simple';
import { HttpFormService } from '../../../http/http-form.service';
import { fwFormControl } from '../../forms/form-controls';
import { fwFormGroup } from '../../forms/form-group';
import { BForm } from './base-form';

@Injectable({
  providedIn: 'root'
})
export class FormSimpleService  extends BForm implements ISimpleFrm {

  private _infoPanel : fwFormGroup;
  private _fieldPanel : fwFormGroup;

  public get infoPanel() : fwFormGroup {
      return this._infoPanel;
  }

  public set infoPanel(v : fwFormGroup) {
      this._infoPanel = v;
  }

  public get fieldPanel() : fwFormGroup {
      return this._fieldPanel;
  }

  public set fieldPanel(v : fwFormGroup) {
      this._fieldPanel = v;
  }

  constructor(private httpFormService: HttpFormService) {
      super();
      this._infoPanel = new fwFormGroup();
      this._fieldPanel = new fwFormGroup();
  }

  setInfoPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void {
      this.infoPanel.stylePanel = stylePnl;
      aryFormCntrl.forEach(p => {
          this.infoPanel.setControl('', p );
      });
  }

  setFieldPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void {
      this.fieldPanel.stylePanel = stylePnl;
      aryFormCntrl.forEach(p => {
          this.fieldPanel.setControl('', p);
      });
  }

  getObjectFormSimple(): fwFormGroup {
      this._fwForm.setControl('', this.infoPanel);
      this._fwForm.setControl('', this.fieldPanel);
      const instanceForm = JSON.parse(JSON.stringify(this._fwForm));

      return instanceForm;
  }

  override setFormProperty(caption: string, displayTyp: DisplayType): void {
      this._fwForm.caption = caption;
      this._fwForm.displayType = displayTyp;
  }

  override setToolbar(aryButtons: ToolbarButtons []): void {
      this._fwForm.toolbarBtn = aryButtons;
  }

  override insert(entity: IBaseVm, callback: Function): void {
      this.httpFormService.Insert(entity).subscribe(p => {
          if (p) {
              callback();
          }
      });
  };

  override update(entity: IBaseVm, callback: Function): void {
      this.httpFormService.update(entity).subscribe(p => {
          if(p) {
              callback();
          }
      })
  }

  override delete(entity: IBaseVm, callback: Function): void {
      this.httpFormService.Delete(entity.id).subscribe(p => {
          if(p) {
              callback();
          }
      })
  }

  override getList(): any {
      this.httpFormService.getList().subscribe((p) => {
          return p;
      });
  }

  override getById(id: number): any {
      this.httpFormService.getById(id).subscribe(p => {
          return p;
      })
  }

  override getByFilters(entity: IBaseVm): any {
      this.httpFormService.getByFilters(entity).subscribe(p => {
          return p;
      })
  }

}
