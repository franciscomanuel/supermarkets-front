import { Component, Input } from '@angular/core';
import { BaseButtonComponent } from '../base/base-button.component';

@Component({
  selector: 'horus-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrl: './raised-button.component.sass',
})
export class RaisedButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() icon!: string;
}
