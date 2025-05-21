import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview',
  templateUrl: 'menu.component.html',
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuComponent {}
