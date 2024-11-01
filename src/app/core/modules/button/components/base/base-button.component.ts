import { Component, Input } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

@Component({
  template: ""
})
export class BaseButtonComponent {
  @Input() color = "primary";
  @Input() disabled = false;
  @Input() link!: string;
  @Input() tooltip!: string;
}
