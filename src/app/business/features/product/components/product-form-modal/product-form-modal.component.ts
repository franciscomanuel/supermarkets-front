import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { Product } from "../../interfaces";

@Component({
  selector: "horus-product-form-modal",
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: "./product-form-modal.component.html",
  styleUrl: "./product-form-modal.component.sass"
})
export class ProductFormModalComponent {
  readonly matDialogRef = inject(MatDialogRef<ProductFormModalComponent>);
  public data: Product = inject(MAT_DIALOG_DATA);

  onClose(): void {
    this.matDialogRef.close();
  }
}
