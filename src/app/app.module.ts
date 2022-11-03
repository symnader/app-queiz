import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigService } from './framework/base/fw-services/configuration/config.service';
import { AuthInterceptorService } from './framework/base/fw-services/authenticate/auth-interceptor.service';

export function initializerFunction(configServcie: ConfigService) {
  return () => {
    configServcie.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: initializerFunction,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
