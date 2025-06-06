import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'progress-spinner-overview',
  templateUrl: 'progress-spinner.component.html',
  imports: [MatProgressSpinnerModule],
})
export class ProgressSpinnerComponent {}
