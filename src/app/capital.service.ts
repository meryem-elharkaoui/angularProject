import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  constructor(private http: HttpClient) { }
  API ='http://localhost:9090';
  public calculCapiatl(capitalData: any){

    return this.http.post(this.API + '/capital',capitalData );
  }
}
