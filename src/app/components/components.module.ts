import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIconosComponent } from './section-iconos/section-iconos.component';
import { SobreTechproComponent } from './sobre-techpro/sobre-techpro.component';



@NgModule({
  declarations: [
    SectionIconosComponent,
    SobreTechproComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionIconosComponent,
    SobreTechproComponent
  ]
})
export class ComponentsModule { }
