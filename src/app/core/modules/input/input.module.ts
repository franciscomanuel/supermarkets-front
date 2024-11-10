import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./main/input/input.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatIconModule],
  exports: [InputComponent]
})
export class InputModule {}
