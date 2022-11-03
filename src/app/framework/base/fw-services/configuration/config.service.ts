import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseConfig } from '../../fw-models/services/base-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends BaseConfig {
  // events :
  constructor(private http: HttpClient) {
    super();

  }

  // fields :
  private _configIsReadSuccess : boolean = false;


  // methods :
  public load() {
    let _env: string = "development";
    if (environment.production)
      _env = "production"

    this.http.get<BaseConfig>(`../../../../../assets/config/${_env}.json`)
        .subscribe(result => {
          this.baseUrl = result.baseUrl;
          this._configIsReadSuccess = true;
        })
  }

  public configIsReadSuccessfully() : boolean {
    return this._configIsReadSuccess;
  }

  }
