import { Routes } from "@angular/router";
import { ReportsComponent } from "./reports.component";
import { ViewReportsComponent } from "./view-reports/view-reports.component";

export const REPORT_ROUTE: Routes = [
    { path: '', component: ReportsComponent },
    {
        path:'reportdata',
        component: ViewReportsComponent
    },
]