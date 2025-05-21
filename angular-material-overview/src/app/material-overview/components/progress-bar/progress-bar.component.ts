import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

/**
 * @title Indeterminate progress-bar
 */
@Component({
  selector: 'progress-bar-overview',
  templateUrl: 'progress-bar.component.html',
  imports: [MatProgressBarModule],
})
export class ProgressBarComponent {}
