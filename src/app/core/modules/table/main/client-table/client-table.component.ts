import { Component, Input } from "@angular/core";
import { BaseTableComponent } from "../base/base-table.component";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: "horus-client-table",
    templateUrl: "../base/table-base.component.html",
    styleUrl: "../base/base.table.component.sass",
    standalone: false
})
export class ClientTableComponent<T> extends BaseTableComponent<T> {
  private _auxiliaryDataSource!: MatTableDataSource<T>;
  @Input() set dataSource(value: MatTableDataSource<T>) {
    this._auxiliaryDataSource = value;
    this._auxiliaryDataSource.paginator = this.paginator;

    this.table.dataSource = this._auxiliaryDataSource;
  }

  firstPage(): void {
    this._auxiliaryDataSource.paginator?.firstPage();
    this.table.dataSource = this._auxiliaryDataSource;
  }
}
