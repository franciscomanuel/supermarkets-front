import { Component, Input } from "@angular/core";
import { BaseButtonComponent } from "../../components/base/base-button.component";
import { ButtonType } from "../../types/button.types";

@Component({
  selector: "horus-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.sass"
})
export class ButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) type!: ButtonType;
  @Input() text!: string;
  @Input() icon!: string;
}
