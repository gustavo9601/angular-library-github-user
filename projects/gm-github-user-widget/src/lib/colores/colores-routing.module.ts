import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AmarilloComponent} from "./amarillo/amarillo.component";
import {AzulComponent} from "./azul/azul.component";

const routes: Routes = [
  {path: '', redirectTo: 'amarillo'},
  {
    path: 'amarillo',
    component: AmarilloComponent
  },
  {
    path: 'azul',
    component: AzulComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColoresRoutingModule {
}
