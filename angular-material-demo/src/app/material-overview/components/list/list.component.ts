import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

/**
 * @title Basic list
 */
@Component({
  selector: 'list-overview',
  templateUrl: 'list.component.html',
  imports: [MatListModule],
})
export class ListComponent {}
