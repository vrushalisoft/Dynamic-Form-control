import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlDropdownComponent } from './form-control-dropdown/form-control-dropdown.component';
import { FormControlRadioComponent } from './form-control-radio/form-control-radio.component';

const routes: Routes = [
  { path : 'dropdown', component : FormControlDropdownComponent },
  { path : 'radio', component : FormControlRadioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
