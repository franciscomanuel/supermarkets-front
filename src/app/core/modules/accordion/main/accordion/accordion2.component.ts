import { Component, Input } from '@angular/core';
import { MatAccordionTogglePosition } from '@angular/material/expansion';

@Component({
  selector: 'horus-accordion-2',
  templateUrl: './accordion2.component.html',
  styleUrl: './accordion2.component.sass',
})
export class Accordion2Component {
  @Input() multi = false;
  @Input() disabled = false;
  @Input() hideToggle = false;
  @Input() expanded = false;
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() togglePosition: MatAccordionTogglePosition = 'after';
}
