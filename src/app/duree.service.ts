import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DureeService {

  constructor(private http: HttpClient) { }
  API ='http://localhost:9090';
  public calculDuree(dureeData: any){

    return this.http.post(this.API + '/duree',dureeData );
  }

}
