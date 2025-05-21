import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * @title Basic tooltip
 */
@Component({
  selector: 'tooltip-overview',
  templateUrl: 'tooltip.component.html',
  imports: [MatButtonModule, MatTooltipModule],
})
export class TooltipComponent {}
