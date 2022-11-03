import { Injectable } from '@angular/core';
import { FieldsService } from '../resolvers/fields/fields.service';
import { FormMasterDetailService } from '../resolvers/forms/form-master-detail.service';
import { FormReportService } from '../resolvers/forms/form-report.service';
import { FormSimpleService } from '../resolvers/forms/form-simple.service';

@Injectable({
  providedIn: 'root'
})
export class AntiCorruptionLayerService {

  constructor(private field: FieldsService,
    private formSimple: FormSimpleService,
    private formMasterDetail: FormMasterDetailService,
    private formReport: FormReportService
  ) {
}

public newInstanceField(): FieldsService {
  return this.field;
}

public newInstanceFormSimple(): FormSimpleService {
  return this.formSimple;
}

public newInstanceFormMasterDetail(): FormMasterDetailService {
  return this.formMasterDetail;
}

public newInstanceFormReport(): FormReportService {
  return this.formReport;
}
}
