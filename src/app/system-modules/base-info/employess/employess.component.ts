import { FormSimpleSevice } from './../../../frame-work/core/fw-resolvers/form/formSimple.service';
import { BaseFormSimpleComponent } from './../../../frame-work/baseComponent/base-form-simple/base-form-simple.component';
import { Component, OnInit, Injectable } from '@angular/core';
import { FieldValidator } from 'src/app/frame-work/models/fw-models/field-validator';
import { FieldSetting } from 'src/app/frame-work/models/fw-models/field-setting';
import { DispatcherService } from 'src/app/frame-work/services/dispatcher/dispatcher.service';
import { IBaseVm } from 'src/app/frame-work/models/entities/base-entity';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})

export class EmployessComponent extends BaseFormSimpleComponent implements OnInit {
  constructor(private dispatcherService: DispatcherService,
              private formSimpleSevice: FormSimpleSevice
            ) { 
    super();

  }

  // 1. تعریف فیلد های فرم
  override  declareAndCreateFields(): void {
    this.frmFields.push(new FieldSetting('company', fieldParent.infoPnl, fieldDataTyp.string, 'company', fieldFormat.none, controlTyp.label));
    this.frmFields.push(new FieldSetting('unit', fieldParent.infoPnl, fieldDataTyp.string, 'unit', fieldFormat.none, controlTyp.label));
    this.frmFields.push(new FieldSetting('fullName', fieldParent.fieldPnl, fieldDataTyp.string, 'fullName', fieldFormat.none, controlTyp.textBox));
    this.frmFields.push(new FieldSetting('age', fieldParent.fieldPnl, fieldDataTyp.number, 'age', fieldFormat.numberFmt, controlTyp.numberBox));
    this.frmFields.push(new FieldSetting('salary', fieldParent.fieldPnl, fieldDataTyp.number, 'salary', fieldFormat.numberFmt, controlTyp.numberBox));    
  } 

  // 2. تعریف ولیدیشن های فرم  
  override  declareAndCreateValidation(): void {
    this.frmValidators.push(new FieldValidator(0, 50, false, ''));
    this.frmValidators.push(new FieldValidator(0, 50, false, ''));
    this.frmValidators.push(new FieldValidator(0, 50, true, 'مقدار این فیلد اجباری می باشد', validators.fromOfString));
    this.frmValidators.push(new FieldValidator(20, 35, true, 'مقدار این فیلد اجباری می باشد', validators.fromOfNumber));
    this.frmValidators.push(new FieldValidator(2000000, 100000000, true, 'مقدار این فیلد اجباری می باشد', validators.fromOfNumber));    
  }

  // 3. تزریق فیلد و ولیدیشن ها
  override injectFields(): void {
    this.dispatcherService.doInjectFieldToForm(this.frmFields, this.frmValidators);  
  }
  
  // 4. تعریف دکمه های فرم  
  override declareAndCreateToolbar(): void {
    this.frmToolbarButtons.push(toolbarBtn.insertBtn);
    this.frmToolbarButtons.push(toolbarBtn.updateBtn);
    this.frmToolbarButtons.push(toolbarBtn.deleteBtn);  
  }

  // 5. تزریق دکمه های فرم
  override injectButtons(): void {
    this.dispatcherService.doInjectToobarButtons(this.frmToolbarButtons);
  }

  // 6. View یا Html ایجاد شی فـرم، شامل کلیه ویژگی های مورد نیاز برای استفاده در فرم
  override getInstanceFormSimple(): void {
    this.realySimpleFrm = this.dispatcherService.getInstanceFormSimple(this.formSetting);  
  }
  

  /*
    نمونه ای از کد ثبت رکرود جدید در دیتابیس
    وقت نیاز بود Persent اون رو تموم کنـم شاید یک هفته دیگه برای یک  HTML که البته من نرسیدم این کد رو و صفحه 
    این فقط یک مثال می باشد
  */

  override afterInsert = () => {
    this.formSimpleSevice.getById(3)
  }

  override insertHandler(): void {
    let entity = {} as IBaseVm;
    this.formSimpleSevice.insert(entity, this.afterInsert);
  }

  //  تـوجـه
  //  استفاده کرد View یا Html می باشد که می توان در فرم  realySimpleFrm کلیه مشخصات تعریف شده فرم در شیء
  //  کپی کرد  Base کامپوننت Html قالب پیش فرض یا کمکی فرم را می توان از فایل

  override ngOnInit(): void {
    
  }

}
