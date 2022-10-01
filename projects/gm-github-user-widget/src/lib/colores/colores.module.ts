import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColoresRoutingModule } from './colores-routing.module';
import { AmarilloComponent } from './amarillo/amarillo.component';
import { AzulComponent } from './azul/azul.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AmarilloComponent,
    AzulComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    ColoresRoutingModule
  ]
})
export class ColoresModule { }
