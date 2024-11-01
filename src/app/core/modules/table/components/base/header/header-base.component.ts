import { Component, Input, ViewChild } from "@angular/core";
import { MatColumnDef, MatHeaderCellDef } from "@angular/material/table";

@Component({
  template: ""
})
export class HeaderBaseComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) colSpan!: number;

  @ViewChild(MatColumnDef, { static: true }) matColumnDef!: MatColumnDef;
  @ViewChild(MatHeaderCellDef, { static: true })
  matHeaderCellDef!: MatHeaderCellDef;
}
