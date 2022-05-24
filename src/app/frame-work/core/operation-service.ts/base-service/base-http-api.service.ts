import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { interval, Observable, Observer, subscribeOn, Subscription } from "rxjs";
import { BaseResponse } from "../../models/fw-Vm/base-response";
import { ConfigService } from "./config.service";
import { ErrorVm } from "../../models/fw-Vm/error-vm";

const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "timeout" : "30000"
    }),
  };

@Injectable({
    providedIn: "root",
  })

export class BaseHttpApiService {
    constructor(private http: HttpClient, 
                private configService: ConfigService) { }
  
    private loadConfigSubscription : Subscription;

    private waitUntilConfigIsLoaded(): Observable<boolean> {
        return new Observable<boolean>((observer: Observer<boolean>) => {
        this.loadConfigSubscription = interval(200).subscribe(item => {
            if (this.configService.configIsReadSuccessfully()) {
            observer.next(true);
            observer.complete();
            }
        });
        });
    }
                
    private joinErrorsMakeString(errorArray:ErrorVm[]) : string{
        if(errorArray.length==0) return "";
        if(errorArray.length==1) return errorArray[0].errorMessage;
    
        let result : string ="";
        errorArray.map(item=>{
            result += item.errorMessage + " - ";
        })

        return result.substring(0,result.length-3);
    }                

    public getService<T>(url: string): Observable<T> {
        return new Observable<T>((observer: Observer<T>) => {
            this.http
              .get<BaseResponse<T>>(
                `${this.configService.baseUrl}${url}`,
                httpOptions
              )
              .subscribe(
                (result) => {
                  if (result.isSuccess) {
                    observer.next(result.resultModel);
                    observer.complete();
                  } else {
                    if (result.errorModel.length > 0) {
                      alert(
                        `عملیات انجام نشد ، خطا : ${this.joinErrorsMakeString(result.errorModel)}`);
                    } else {
                      alert("در حال حاضر امکان انجام عملیات مورد نظر وجود ندارد");
                    }
                    observer.error(result.errorModel);
                  }
                },
                (error) => {
                  observer.error(error);
                  alert("در حال حاضر امکان انجام عملیات مورد نظر وجود ندارد");
                }
              );
          
        });
    }

    public postService<T>(url: string, data: any): Observable<T> {
        return new Observable<T>((observer: Observer<T>) => {
          this.waitUntilConfigIsLoaded().subscribe(() => {
            this.http
              .post<BaseResponse<T>>(
                `${this.configService.baseUrl}${url}`,
                JSON.stringify(data),
                httpOptions
              )
              .subscribe(
                (result) => {
                  if (result.isSuccess) {
                    observer.next(result.resultModel);
                    observer.complete();
                  } else {
                    if (result.errorModel && result.errorModel.length > 0) {
                      alert(
                        `عملیات انجام نشد ، خطا : ${this.joinErrorsMakeString(result.errorModel)}`);
                    } else {
                      alert("در حال حاضر امکان انجام عملیات مورد نظر وجود ندارد");
                    }
                    observer.error(result.errorModel);
                  }
                },
                (error) => {
                  observer.error(error);
                  console.log(error);
                  alert("در حال حاضر امکان انجام عملیات مورد نظر وجود ندارد");
                }
              );
          });
        });
    }
    
    public deleteService<T>(url: string): Observable<T> {
        return new Observable<T>((observer: Observer<T>) => {
          this.waitUntilConfigIsLoaded().subscribe(() => {
            this.http
              .delete<BaseResponse<T>>(
                `${this.configService.baseUrl}${url}`,
                httpOptions
              )
              .subscribe(
                (result) => {
                  if (result.isSuccess) {
                    observer.next(result.resultModel);
                    observer.complete();
                  } else {
                    if (result.errorModel.length > 0) {
                      alert(`عملیات انجام نشد ، خطا : ${this.joinErrorsMakeString(result.errorModel)}`);
                    } else {
                      alert("در حال حاضر امکان انجام عملیات مورد نظر وجود ندارد");
                    }
                    observer.error(result.errorModel);
                  }
                },
                (error) => {
                  observer.error(error);
                  alert("در حال حاضر امکان انجام عملیات مورد نظر وجود ندارد");
                }
              );
          });
        });
    }
      

}
  
