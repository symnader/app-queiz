import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBaseVm } from "../../models/entities/base-entity";
import { Employee } from "../../models/entities/employee";
import { BaseHttpApiService } from "./base-service/base-http-api.service";


@Injectable({
    providedIn: 'root',
  })
  export class HttpFormService {
    constructor(private baseHttpApiService: BaseHttpApiService) {}
  
    public Insert(entity: IBaseVm): Observable<IBaseVm> {
      return this.baseHttpApiService.postService<IBaseVm>('api address', entity);
    }
  
    public Delete(entityId: number): Observable<IBaseVm> {
      return this.baseHttpApiService.deleteService<IBaseVm>('api address' + entityId);
    }
  
    public update(entity: IBaseVm): Observable<IBaseVm> {
      return this.baseHttpApiService.postService<IBaseVm>('api address', entity);
    }
  
    public getList(): Observable<IBaseVm[]> {
      return this.baseHttpApiService.getService<IBaseVm[]>('api address');
    }
  }
  

  