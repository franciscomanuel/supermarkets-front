import { Component, HostBinding } from '@angular/core';
import { ButtonModule } from '../../../../../core/modules/button/button.module';

@Component({
  selector: 'horus-home-route',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home-route.component.html',
  styleUrl: './home-route.component.sass',
})
export class HomeRouteComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
