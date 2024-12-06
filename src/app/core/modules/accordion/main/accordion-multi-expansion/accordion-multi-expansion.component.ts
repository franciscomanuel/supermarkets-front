import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatAccordionTogglePosition } from "@angular/material/expansion";

@Component({
    selector: "horus-accordion-multi-expansion",
    templateUrl: "./accordion-multi-expansion.component.html",
    styleUrl: "./accordion-multi-expansion.component.sass",
    standalone: false
})
export class AccordionMultiExpansionComponent {
  @Input() multi = false;
  @Input() hideToggle = false;
  @Input() togglePosition: MatAccordionTogglePosition = "after";

  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  onPrevStep(): void {
    this.prevStep.emit();
  }

  onNextStep(): void {
    this.nextStep.emit();
  }
}
