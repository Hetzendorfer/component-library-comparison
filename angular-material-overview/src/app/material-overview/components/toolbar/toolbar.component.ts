import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'toolbar-overview',
  templateUrl: 'toolbar.component.html',
  styleUrl: 'toolbar.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarComponent {}
