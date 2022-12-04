import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnuiteService } from '../annuite.service';

@Component({
  selector: 'app-annuite',
  templateUrl: './annuite.component.html',
  styleUrls: ['./annuite.component.css']
})
export class AnnuiteComponent implements OnInit {

  resultA = {};
  message: boolean = false;
  constructor(private annuiteService:AnnuiteService) { }
  calcula(calculaForm: NgForm){
    
    
    this.annuiteService.calculAnnuite(calculaForm.value).subscribe(

      (resp) => {console.log(resp);
        this.resultA =  resp ;
        this.message = true;
        
      
      },
      (err) =>{ console.log(err);}
    );
  }
  ngOnInit(): void {
  }

}
