import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-control-dropdown',
  templateUrl: './form-control-dropdown.component.html',
  styleUrls: ['./form-control-dropdown.component.css']
})
export class FormControlDropdownComponent {

  @ViewChild('myForm') myFormObj : any;

  selectedOption = '';
  constructor(){}

  ngOnInit(): void {

  }

	onSelected(value:string): void {
		this.selectedOption = value;
	}

}

