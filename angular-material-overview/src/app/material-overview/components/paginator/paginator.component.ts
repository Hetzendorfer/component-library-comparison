import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

/**
 * @title Paginator
 */
@Component({
  selector: 'paginator-overview',
  templateUrl: 'paginator.component.html',
  imports: [MatPaginatorModule],
})
export class PaginatorComponent {}
