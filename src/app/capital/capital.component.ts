import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CapitalService } from '../capital.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  resultC={};
  message: boolean = false;
  constructor(private capitalService:CapitalService) { }
  calculc(calculcForm: NgForm){

    this.capitalService.calculCapiatl(calculcForm.value).subscribe(

      (resp) => {console.log(resp);
        this.resultC =  resp ;
        this.message = true;
      
      },
      (err) =>{ console.log(err);}
    );


  }
  ngOnInit(): void {
  }

}
