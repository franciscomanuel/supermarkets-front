import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { BasicButtonComponent } from './basic-button/basic-button.component';

@NgModule({
  declarations: [BasicButtonComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  exports: [BasicButtonComponent],
})
export class ButtonModule {}
