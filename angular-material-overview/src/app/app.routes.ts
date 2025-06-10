import { Routes } from '@angular/router';
import { MaterialOverviewComponent } from './material-overview/material-overview.component';
import { ShowcaseComponent } from './showcase/showcase.component';

export const routes: Routes = [
    {
        path: "",
        component: MaterialOverviewComponent
    },
    {
        "path": "showcase",
        component: ShowcaseComponent
    }
];
