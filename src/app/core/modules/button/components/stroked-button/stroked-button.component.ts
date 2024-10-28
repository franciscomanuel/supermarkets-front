import { Component, Input } from '@angular/core';
import { BaseButtonComponent } from '../base/base-button.component';

@Component({
  selector: 'horus-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrl: './stroked-button.component.sass',
})
export class StrokedButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() icon!: string;
}
