import { Component, Input } from "@angular/core";
import { BaseButtonComponent } from "../base/base-button.component";

@Component({
  selector: "horus-flat-button",
  templateUrl: "./flat-button.component.html",
  styleUrl: "./flat-button.component.sass"
})
export class FlatButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() icon!: string;
}
