import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle-overview',
  templateUrl: 'slide-toggle.component.html',
  imports: [MatSlideToggleModule],
})
export class SlideToggleComponent {}
