import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonComponent {}
