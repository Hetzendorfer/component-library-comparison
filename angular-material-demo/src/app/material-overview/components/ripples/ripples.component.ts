import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * @title MatRipple basic usage
 */
@Component({
  selector: 'ripples-overview',
  templateUrl: 'ripples.component.html',
  styleUrl: 'ripples.component.scss',
  imports: [
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
})
export class RipplesComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 0;
  color: string = "";
}
