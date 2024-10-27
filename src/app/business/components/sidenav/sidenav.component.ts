import { Component, HostBinding } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MENU_SIDENAV } from '../../constants/main-content-route.constants';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ApplicationService } from '../../services/application/application.service';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
  animations: [
    trigger('toggleText', [
      transition(':enter', [
        animate(
          '300ms ease-out',
          keyframes([
            style({ opacity: 0, transform: 'scale(0.8)', offset: 0 }),
            style({ opacity: 0.5, transform: 'scale(1.05)', offset: 0.7 }),
            style({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          keyframes([
            style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
            style({ opacity: 0.5, transform: 'scale(0.9)', offset: 0.5 }),
            style({ opacity: 0, transform: 'scale(0.8)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent {
  @HostBinding('class') clasName = 'flex-container';

  readonly menuSidenav = MENU_SIDENAV;

  constructor(public readonly applicationService: ApplicationService) {}
}
