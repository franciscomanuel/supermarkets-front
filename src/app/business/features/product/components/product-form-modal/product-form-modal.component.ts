import { Component, inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { Product } from "../../interfaces";
import { ButtonModule } from "../../../../../core/modules/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { MatButtonModule } from "@angular/material/button";
import { InputModule } from "../../../../../core/modules/input/input.module";
import { FormControl, FormGroup } from "@angular/forms";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "horus-product-form-modal",
  imports: [MatDialogModule, MatButtonModule, ButtonModule, TranslateModule, InputModule],
  templateUrl: "./product-form-modal.component.html",
  styleUrl: "./product-form-modal.component.sass"
})
export class ProductFormModalComponent implements OnInit {
  readonly matDialogRef = inject(MatDialogRef<ProductFormModalComponent>);
  public product: Product = inject(MAT_DIALOG_DATA);

  form!: FormGroup;

  get nameControl(): FormControl<number | string> {
    return this.form.get("name") as FormControl<string>;
  }

  get descriptionControl(): FormControl<number | string> {
    return this.form.get("description") as FormControl<string>;
  }

  get imageControl(): FormControl<number | string> {
    return this.form.get("image") as FormControl<string>;
  }

  ngOnInit(): void {
    this.createForm();
  }

  onSave(): void {
    const product = this.form.value as Product;
    product.productId = this.product?.productId ?? uuidv4();

    this.matDialogRef.close(product);
  }

  onClose(): void {
    this.matDialogRef.close();
  }

  private createForm(): void {
    const { name, description, image } = this.product ?? {};

    this.form = new FormGroup({
      name: new FormControl(name ?? "", { nonNullable: true }),
      description: new FormControl(description ?? "", { nonNullable: true }),
      image: new FormControl(image ?? "", { nonNullable: true })
    });
  }
}
