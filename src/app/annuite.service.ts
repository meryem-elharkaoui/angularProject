import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnuiteService {

  constructor(private http: HttpClient) { }
  API ='http://localhost:9090';
  public  calculAnnuite(annuiteData: any) {
   
    return this.http.post(this.API + '/annuite',annuiteData );
  }
}
