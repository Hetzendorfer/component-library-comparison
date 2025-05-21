import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview',
  templateUrl: 'form-field.component.html',
  styleUrl: 'form-field.component.scss',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {}
