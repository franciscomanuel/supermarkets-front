import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'horus-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('AppComponent');
  }
}
