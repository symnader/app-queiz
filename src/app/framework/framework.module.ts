import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FrameworkRoutingModule } from './framework-routing.module';
import { BaseSimpleComponent } from './base/fw-components/forms/base-simple/base-simple.component';
import { BaseReportComponent } from './base/fw-components/forms/base-report/base-report.component';
import { BaseMasterDetailComponent } from './base/fw-components/forms/base-master-detail/base-master-detail.component';
import { PageNotFoundComponent } from './base/fw-components/pages/page-not-found/page-not-found.component';
import { OutOfServiceComponent } from './base/fw-components/pages/out-of-service/out-of-service.component';


@NgModule({
  declarations: [
    BaseSimpleComponent,
    BaseReportComponent,
    BaseMasterDetailComponent,
    PageNotFoundComponent,
    OutOfServiceComponent
  ],
  imports: [
    CommonModule,
    FrameworkRoutingModule,

    HttpClientModule,
  ]
})
export class FrameworkModule { }
