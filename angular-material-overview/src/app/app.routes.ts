import { Routes } from '@angular/router';
import { MaterialOverviewComponent } from './material-overview/material-overview.component';

export const routes: Routes = [
    {
        path: "",
        component: MaterialOverviewComponent
    },
    {
        "path": "showcase",
        loadComponent: () => import("./showcase/showcase.component").then(m => m.ShowcaseComponent)
    }
];
