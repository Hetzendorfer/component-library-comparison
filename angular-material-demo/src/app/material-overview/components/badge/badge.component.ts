import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Badge overview
 */
@Component({
  selector: 'badge-overview',
  templateUrl: 'badge.component.html',
  styleUrl: 'badge.component.scss',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
