import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialOverviewComponent } from "./material-overview/material-overview.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-demo';
}
