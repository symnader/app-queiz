import { Injectable } from '@angular/core';
import { FieldsService } from '../../core/fw-resolvers/fields/fields.service';
import { FormMasterDetailService } from '../../core/fw-resolvers/form/formMasterDetail.service';
import { FormReportService } from '../../core/fw-resolvers/form/formReport.service';
import { FormSimpleSevice } from '../../core/fw-resolvers/form/formSimple.service';

@Injectable({
  providedIn: 'root'
})

export class AntiCorruptionLayerService {
  constructor(private field: FieldsService, 
      private formSimple: FormSimpleSevice,
      private formMasterDetail: FormMasterDetailService,
      private formReport: FormReportService
    ) {
  }

  public newInstanceField(): FieldsService {
    return this.field;
  }

  public newInstanceFormSimple(): FormSimpleSevice {
    return this.formSimple;
  }

  public newInstanceFormMasterDetail(): FormMasterDetailService {
    return this.formMasterDetail;
  }    

  public newInstanceFormReport(): FormReportService {
    return this.formReport;
  }        
}
