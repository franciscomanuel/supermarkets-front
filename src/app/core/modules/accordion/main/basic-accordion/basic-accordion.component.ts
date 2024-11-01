import { Component, Input } from '@angular/core';
import { MatAccordionTogglePosition } from '@angular/material/expansion';

@Component({
  selector: 'horus-basic-accordion',
  templateUrl: './basic-accordion.component.html',
  styleUrl: './basic-accordion.component.sass',
})
export class BasicAccordionComponent {
  @Input() multi = false;
  @Input() disabled = false;
  @Input() hideToggle = false;
  @Input() expanded = false;
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() togglePosition: MatAccordionTogglePosition = 'after';
}
