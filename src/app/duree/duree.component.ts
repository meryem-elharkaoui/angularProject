import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DureeService } from '../duree.service';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.css']
})
export class DureeComponent implements OnInit {
  resultD = {};
  message: boolean = false;
  constructor(private dureeService:DureeService) { }
  calculd(calculdForm: NgForm){

    this.dureeService.calculDuree(calculdForm.value).subscribe(

      (resp) => {console.log(resp);
        this.resultD =  resp ;
        this.message = true;
      
      },
      (err) =>{ console.log(err);}
    );


  }
  ngOnInit(): void {
  }

}
