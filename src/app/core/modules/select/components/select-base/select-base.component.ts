import { KeyValue } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormControlErrorStateMatcher } from "../../../../utils/form-control-error-state-matcher";

@Component({
    template: "",
    standalone: false
})
export class SelectBaseComponent<T> {
  @Input({ required: true }) formControl!: FormControl<T | null>;
  @Input({ required: true }) options!: KeyValue<string | number, string>[];
  @Input({ required: true }) label!: string;
  /**
   * Indica el tamaño que debe ocupar las opciones del menú.
   * Si se pasa null o "" el tamaño será el máximo de la opción más larga
   * Si se pasa un string o number, el máximo será el indicado.
   * @default null
   */
  @Input() panelWidth: string | number | null = null;
  @Input() placeholder!: string;

  matcher = new FormControlErrorStateMatcher();
}
