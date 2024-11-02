import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectComponent } from "./main/select/select.component";
import { SelectWithTriggerComponent } from "./main/select-with-trigger/select-with-trigger.component";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SelectBaseComponent } from "./components/select-base/select-base.component";

@NgModule({
  declarations: [SelectComponent, SelectWithTriggerComponent, SelectBaseComponent],
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [SelectComponent, SelectWithTriggerComponent]
})
export class SelectModule {}
