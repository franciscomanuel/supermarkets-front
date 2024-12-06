import { Component, inject } from "@angular/core";
import { ApplicationService } from "../../services/application/application.service";
import { HeaderComponent } from "../header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
    selector: "horus-toolbar",
    imports: [HeaderComponent, MatIconModule, MatToolbarModule, MatButtonModule, RouterLink],
    templateUrl: "./toolbar.component.html",
    styleUrl: "./toolbar.component.sass"
})
export class ToolbarComponent {
  expanded: boolean = true;

  readonly applicationService: ApplicationService = inject(ApplicationService);

  openClose(): void {
    this.expanded = !this.expanded;
    this.applicationService.setExpanded(this.expanded);
  }
}
