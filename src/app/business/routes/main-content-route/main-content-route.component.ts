import { Component, HostBinding } from "@angular/core";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";

@Component({
    selector: "horus-main-content-route",
    imports: [SidenavComponent, ToolbarComponent],
    templateUrl: "./main-content-route.component.html",
    styleUrl: "./main-content-route.component.sass"
})
export class MainContentRouteComponent {
  @HostBinding("class") className = "main-layout-route";
}
