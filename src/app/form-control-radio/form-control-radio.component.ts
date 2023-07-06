import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-control-radio',
  templateUrl: './form-control-radio.component.html',
  styleUrls: ['./form-control-radio.component.css']
})
export class FormControlRadioComponent implements OnInit{

  @ViewChild('radioButtons') FormObj : any;

  type : any;
  constructor(){}

  ngOnInit(): void {

  }

	onChange(e:any) {
    this.type= e.target.value;
    console.log(this.type)
 }
}
