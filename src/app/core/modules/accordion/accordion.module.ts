import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accordion2Component } from './main/accordion/accordion2.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    Accordion2Component,
    AccordionComponent,
    ExpansionPanelComponent,
  ],
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  exports: [Accordion2Component, AccordionComponent, ExpansionPanelComponent],
})
export class AccordionModule {}
