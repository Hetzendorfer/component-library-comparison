import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'input-overview',
  templateUrl: 'input.component.html',
  styleUrl: 'input.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class InputComponent {}
