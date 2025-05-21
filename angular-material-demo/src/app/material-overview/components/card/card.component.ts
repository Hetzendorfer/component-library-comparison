import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-overview',
  templateUrl: 'card.component.html',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
