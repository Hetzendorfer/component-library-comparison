import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-overview',
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.scss',
  imports: [MatSidenavModule, MatButtonModule],
})
export class SidenavComponent {
  showFiller = false;
}
