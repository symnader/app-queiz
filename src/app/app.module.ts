import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './frame-work/core/core.module';
// import { Fields } from './frame-work/core/fw-resolvers/fields/fields';
// import { FormMasterDetail } from './frame-work/core/fw-resolvers/form/formMasterDetail';
// import { FormReport } from './frame-work/core/fw-resolvers/form/formReport';
// import { FormSimple } from './frame-work/core/fw-resolvers/form/formSimple';
// import { FecadeService } from './frame-work/services/fw-commonicate/anti-corruption-layer';
// import { FormGeneratorService } from './services/formGeneratorService';

import { ConfigService } from './frame-work/core/operation-service.ts/base-service/config.service';
import { EmployessComponent } from './system-modules/base-info/employess/employess.component';
import { UnitsComponent } from './system-modules/base-info/units/units.component';


export function initializerFunction(configServcie: ConfigService) {
  return () => {
    configServcie.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    EmployessComponent,
    UnitsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,

    CoreModule
  ],
  
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: initializerFunction,
    },

  ],
    // Fields, FormSimple, FormMasterDetail, FormReport, FecadeService, FormGeneratorService],
  bootstrap: [AppComponent]
})

export class AppModule { }
