import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  API =" http://localhost:9090";
  public registerCredit(creditData: any){
    
    return this.http.post(this.API + '/registerCredit', creditData);
  };

  
  


}
