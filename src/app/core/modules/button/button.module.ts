import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { BaseButtonComponent } from './components/base/base-button.component';
import { ButtonComponent } from './main/button/button.component';
import { ExtendedFabButtonComponent } from './components/extended-fab-button/extended-fab-button.component';
import { FabButtonComponent } from './components/fab-button/fab-button.component';
import { FlatButtonComponent } from './components/flat-button/flat-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { MiniFabButtonComponent } from './components/mini-fab-button/mini-fab-button.component';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';
import { StrokedButtonComponent } from './components/stroked-button/stroked-button.component';

@NgModule({
  declarations: [
    BaseButtonComponent,
    ButtonComponent,
    BasicButtonComponent,
    ExtendedFabButtonComponent,
    FabButtonComponent,
    FlatButtonComponent,
    IconButtonComponent,
    MiniFabButtonComponent,
    RaisedButtonComponent,
    StrokedButtonComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
