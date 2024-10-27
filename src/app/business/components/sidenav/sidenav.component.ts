import { Component, HostBinding, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MENU_SIDENAV } from '../../constants/main-content-route.constants';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ApplicationService } from '../../services/application/application.service';

@Component({
  selector: 'horus-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    JsonPipe,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.sass',
})
export class SidenavComponent {
  @HostBinding('class') clasName = 'flex-container';

  readonly menuSidenav = MENU_SIDENAV;

  constructor(public readonly applicationService: ApplicationService) {}
}
