import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIconosComponent } from './section-iconos/section-iconos.component';
import { SobreTechproComponent } from './sobre-techpro/sobre-techpro.component';
import { EligeTechComponent } from './elige-tech/elige-tech.component';
import { NewlesterComponent } from './newlester/newlester.component';



@NgModule({
  declarations: [
    SectionIconosComponent,
    SobreTechproComponent,
    EligeTechComponent,
    NewlesterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionIconosComponent,
    SobreTechproComponent,
    EligeTechComponent,
    NewlesterComponent
  ]
})
export class ComponentsModule { }
