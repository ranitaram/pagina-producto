import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIconosComponent } from './section-iconos/section-iconos.component';
import { SobreTechproComponent } from './sobre-techpro/sobre-techpro.component';
import { EligeTechComponent } from './elige-tech/elige-tech.component';



@NgModule({
  declarations: [
    SectionIconosComponent,
    SobreTechproComponent,
    EligeTechComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionIconosComponent,
    SobreTechproComponent,
    EligeTechComponent
  ]
})
export class ComponentsModule { }
