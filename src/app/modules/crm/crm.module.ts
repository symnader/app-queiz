import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { EmployeeComponent } from './base-info/employee/employee.component';
import { UnitsComponent } from './base-info/units/units.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    UnitsComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule
  ]
})
export class CrmModule { }
