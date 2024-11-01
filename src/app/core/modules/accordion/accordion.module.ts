import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicAccordionComponent } from "./main/basic-accordion/basic-accordion.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { ExpansionPanelComponent } from "./components/expansion-panel/expansion-panel.component";
import { AccordionMultiExpansionComponent } from "./main/accordion-multi-expansion/accordion-multi-expansion.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [BasicAccordionComponent, AccordionMultiExpansionComponent, ExpansionPanelComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule, ButtonModule],
  exports: [BasicAccordionComponent, ExpansionPanelComponent, AccordionMultiExpansionComponent]
})
export class AccordionModule {}
