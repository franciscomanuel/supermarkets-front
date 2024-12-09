import { ComponentType } from "@angular/cdk/portal";
import { inject, Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DialogService<T, R> {
  private readonly dialog = inject(MatDialog);

  openDialog(component: ComponentType<T>, matDialogConfig?: MatDialogConfig): Observable<R> {
    const dialogConfig = this.defaultSizeMatDialogConfig(matDialogConfig);

    return this.dialog.open(component, dialogConfig).afterClosed();
  }

  private defaultSizeMatDialogConfig(matDialogConfig?: MatDialogConfig): MatDialogConfig {
    return {
      ...matDialogConfig,
      minWidth: matDialogConfig?.minWidth || "50em"
    };
  }
}
