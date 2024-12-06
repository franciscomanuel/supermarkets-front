import { KeyValue } from "@angular/common";
import { Component } from "@angular/core";
import { SelectBaseComponent } from "../../components/select-base/select-base.component";

@Component({
    selector: "horus-select-with-trigger",
    templateUrl: "./select-with-trigger.component.html",
    styleUrl: "./select-with-trigger.component.sass",
    standalone: false
})
export class SelectWithTriggerComponent extends SelectBaseComponent<string[] | number[]> {
  getFirstSelectedValue(): string {
    const selectedKeys = this.formControl.value || [];
    const option = this.getOptionSelected(selectedKeys);
    return option?.value.substring(0, 10) || "";
  }

  private getOptionSelected(selectedKeys: string[] | number[]): KeyValue<string | number, string> | undefined {
    return this.options.find((option: KeyValue<string | number, string>) => option.key === selectedKeys[0]);
  }
}
