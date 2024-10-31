import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAccordionTogglePosition } from '@angular/material/expansion';

@Component({
  selector: 'horus-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.sass',
})
export class AccordionComponent {
  @Input() multi = false;
  @Input() hideToggle = false;
  @Input() togglePosition: MatAccordionTogglePosition = 'after';

  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  onPrevStep(): void {
    this.prevStep.emit();
  }

  onNextStep(): void {
    this.nextStep.emit();
  }
}
