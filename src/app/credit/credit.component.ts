
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { CreditService } from '../credit.service';
import {FormsModule} from '@angular/forms';
import {map} from "rxjs/operators";
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
result = {
  tauCre :'',
  monCre :'',
  numCli :0,
  durCre: ''

};
 



  constructor(private clientService:ClientService, private creditService:CreditService) { }
  register(registerForm: NgForm){
   
    this.result = registerForm.value;


   
    console.log(this.result.tauCre, this.result.monCre);




   
   this.clientService.registerClient(registerForm.value).pipe(map((resp:any)=> {console.log("before",resp);
    
   return resp.numCli;}
   )).subscribe(
      resp => {
        
        this.result.numCli = resp;
        console.log(resp);
      
        console.log(resp);
        
        registerForm.reset();

       
      },
      (err) =>{ console.log(err);}
    );

    this.creditService.registerCredit(this.result) .subscribe(

  

      (resp) => {console.log(this.result);
        
      
      },
      (err) =>{ console.log(err);}
    );



}
  ngOnInit(): void {
    
  }

}
