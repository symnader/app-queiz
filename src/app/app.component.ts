import { Component } from '@angular/core';
import { ConfigService } from './frame-work/core/operation-service.ts/base-service/config.service';
import { FieldSetting } from './frame-work/models/fw-models/field-setting';
import { FieldValidator } from './frame-work/models/fw-models/field-validator';
import { fwFormGroup } from './frame-work/services/fw-custome/fw-form-group';
import { FormGeneratorService } from './services/formGeneratorService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-queiz';
  /**
   *
   */

  private employeeFields: FieldSetting [] = [];
  private employeeValidators: FieldValidator [] = [];
  private employeeFormSetting: FormSetting;
  private employeeForm: fwFormGroup;

  constructor(public configService : ConfigService,
              private formGeneratorService: FormGeneratorService) { }

  createEmployeeField(): void {
    // 1. تعریف فیلد های فرم
    this.employeeFields.push(new FieldSetting('company', fieldParent.infoPnl, fieldDataTyp.string, 'company', fieldFormat.none, controlTyp.label));
    this.employeeFields.push(new FieldSetting('unit', fieldParent.infoPnl, fieldDataTyp.string, 'unit', fieldFormat.none, controlTyp.label));
    this.employeeFields.push(new FieldSetting('fullName', fieldParent.fieldPnl, fieldDataTyp.string, 'fullName', fieldFormat.none, controlTyp.textBox));
    this.employeeFields.push(new FieldSetting('age', fieldParent.fieldPnl, fieldDataTyp.number, 'age', fieldFormat.numberFmt, controlTyp.numberBox));
    this.employeeFields.push(new FieldSetting('salary', fieldParent.fieldPnl, fieldDataTyp.number, 'salary', fieldFormat.numberFmt, controlTyp.numberBox));    

    // 2. تعریف ولیدیشن های فرم
    this.employeeValidators.push(new FieldValidator(0, 50, false, ''));
    this.employeeValidators.push(new FieldValidator(0, 50, false, ''));
    this.employeeValidators.push(new FieldValidator(0, 50, true, 'مقدار این فیلد اجباری می باشد', validators.fromOfString));
    this.employeeValidators.push(new FieldValidator(20, 35, true, 'مقدار این فیلد اجباری می باشد', validators.fromOfNumber));
    this.employeeValidators.push(new FieldValidator(2000000, 100000000, true, 'مقدار این فیلد اجباری می باشد', validators.fromOfNumber));

    // 3. ایجاد فیلد و ولیدیشن های فرم
    this.formGeneratorService.doFieldSetting(this.employeeFields, this.employeeValidators);
    
    // 4. تعریف ویژگی های فرم
    this.employeeFormSetting = new FormSetting('اظلاعات کارمندان', displayTyp.route, stylePnl.material, stylePnl.material);

    // 5. ایجاد شی فـرم، شامل کلیه ویژگی ها
    this.employeeForm = this.formGeneratorService.doFormSimpleSetting(this.employeeFormSetting);
     
  }
  
}
