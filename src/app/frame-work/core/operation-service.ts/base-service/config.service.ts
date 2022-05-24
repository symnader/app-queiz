import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ConfigBase } from '../../../models/fw-models/config-base';

@Injectable({
  providedIn: 'root',
})

export class ConfigService extends ConfigBase {
  constructor(private http: HttpClient) {
    super();
  }

  private _configIsReadSuccess : boolean = false;

  public load() {
    let _env: string = "development";
    if (environment.production) 
      _env = "production"

    this.http.get<ConfigBase>(`../../../assets/config/${_env}.json`)
        .subscribe(result => {
          this.baseUrl = result.baseUrl;          
          this._configIsReadSuccess = true;
        })
    }

  public configIsReadSuccessfully() : boolean{
    return this._configIsReadSuccess;
  }
    
}
