import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Basic icons
 */
@Component({
  selector: 'icon-overview',
  templateUrl: 'icon.component.html',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {}
