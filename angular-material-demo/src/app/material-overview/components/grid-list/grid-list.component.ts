import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list-overview',
  styleUrl: 'grid-list.component.scss',
  templateUrl: 'grid-list.component.html',
  imports: [MatGridListModule],
})
export class GridListComponent {}
