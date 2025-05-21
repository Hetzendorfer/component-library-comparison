import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview',
  templateUrl: 'slider.component.html',
  styleUrl: 'slider.component.scss',
  imports: [MatSliderModule],
})
export class SliderComponent {}
