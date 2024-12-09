import { Component, HostBinding, inject, OnInit, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MENU_SIDENAV } from "../../constants/main-content-route.constants";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ApplicationService } from "../../services/application/application.service";
import { animate, keyframes, style, transition, trigger } from "@angular/animations";
import { LoadingService } from "../../../core/services/loading/loading.service";

@Component({
  selector: "horus-sidenav",
  imports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatProgressSpinnerModule
  ],
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.sass",
  animations: [
    trigger("toggleText", [
      transition(":enter", [
        animate(
          "300ms ease-out",
          keyframes([
            style({ opacity: 0, transform: "scale(0.8)", offset: 0 }),
            style({ opacity: 0.5, transform: "scale(1.05)", offset: 0.7 }),
            style({ opacity: 1, transform: "scale(1)", offset: 1.0 })
          ])
        )
      ]),
      transition(":leave", [
        animate(
          "200ms ease-in",
          keyframes([
            style({ opacity: 1, transform: "scale(1)", offset: 0 }),
            style({ opacity: 0.5, transform: "scale(0.9)", offset: 0.5 }),
            style({ opacity: 0, transform: "scale(0.8)", offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @HostBinding("class") clasName = "flex-container";

  readonly applicationService = inject(ApplicationService);
  readonly loadingService = inject(LoadingService);
  readonly menuSidenav = MENU_SIDENAV;

  loading = signal(false);

  ngOnInit(): void {
    this.loading = this.loadingService.getLoading();
  }
}
