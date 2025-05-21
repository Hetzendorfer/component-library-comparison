import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

/**
 * @title Basic radios
 */
@Component({
  selector: 'radio-button-overview',
  templateUrl: 'radio-button.component.html',
  styleUrl: 'radio-button.component.scss',
  imports: [MatRadioModule],
})
export class RadioButtonComponent {}
