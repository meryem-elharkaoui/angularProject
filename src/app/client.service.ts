import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  API =" http://localhost:9090";
  public registerClient(clientData: any){
    
    
    return this.http.post(this.API + '/registerClient', clientData);
  }
}
