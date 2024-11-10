import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { InputTypes } from "../../types/input.types";
import { FormControlErrorStateMatcher } from "../../../../utils/form-control-error-state-matcher";

const MAX_LENGTH_DEFAULT = 1000;
const MIN_LENGTH_DEFAULT = 0;
const MAX_DEFAULT = 2147483647;
const MIN_DEFAULT = 0;
const NUMBER_ROWS_DEFAULT = 1;

@Component({
  selector: "horus-input",
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.sass"
})
export class InputComponent<T> {
  @Input({ required: true }) formControl!: FormControl<T | null>;
  @Input({ required: true }) label!: string;
  @Input() appearance: MatFormFieldAppearance = "fill";
  @Input() placeholder!: string;
  @Input() maxLength = MAX_LENGTH_DEFAULT;
  @Input() minLength = MIN_LENGTH_DEFAULT;
  @Input() textPrefix!: string;
  @Input() iconPrefix!: string;
  @Input() textSuffix!: string;
  @Input() iconSuffix!: string;
  @Input() textHint!: string;
  @Input() type: InputTypes = "text";

  @Input() max = MAX_DEFAULT;
  @Input() min = MIN_DEFAULT;

  @Input() rows = NUMBER_ROWS_DEFAULT;

  matcher = new FormControlErrorStateMatcher();
}
