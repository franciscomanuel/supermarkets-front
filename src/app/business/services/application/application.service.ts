import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  private expanded: boolean = true;

  getExpanded() {
    return this.expanded;
  }

  setExpanded(expanded: boolean) {
    this.expanded = expanded;
  }
}
