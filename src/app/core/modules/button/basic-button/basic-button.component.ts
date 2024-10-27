import { Component, Input } from '@angular/core';

@Component({
  selector: 'horus-basic-button',
  templateUrl: './basic-button.component.html',
})
export class BasicButtonComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) color!: string;
  @Input() disabled = false;
  @Input() icon!: string;
  @Input() link!: string;
  @Input() tooltip!: string;
}
