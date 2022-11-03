import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormMasterDetailService  extends BForm implements IFormMasterDetail {
  setHeaderPanel(): any {};
  setDetailPanel(): any {};
  setFooterPanel(): any {};

  override setFormProperty(caption: string, displayTyp: DisplayType): void {};
  override setToolbar(): any {};
}

