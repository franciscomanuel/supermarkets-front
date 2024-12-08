import { inject, Injectable, Type } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DialogService<T, R> {
  private readonly dialog = inject(MatDialog);

  openDialog(component: Type<T>, matDialogConfig?: MatDialogConfig): Observable<R> {
    return this.dialog.open(component, matDialogConfig).afterClosed();
  }
}
