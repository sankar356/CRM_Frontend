import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { canActivate } from "../auth/auth.guard";
import { LayoutComponent } from "../layout/layout/layout.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { StaffsComponent } from "../pages/staffs/staffs.component";
import { LeadsComponent } from "../pages/leads/leads.component";
import { TaskComponent } from "../pages/task/task.component";
import { NotificationComponent } from "../pages/notification/notification.component";
import { ReportsComponent } from "../pages/reports/reports.component";
import { SettingsComponent } from "../pages/settings/settings.component";

export const MAIN_ROUTE: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(canActivate).canActivate(next, state)],
    // canActivate: [canActivate],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path : 'staffs',
        component : StaffsComponent
      },
      {
        path : 'lead',
        component : LeadsComponent
      },
      {
        path : 'task',
        component : TaskComponent
      },
      {
        path : 'notifications',
        component : NotificationComponent
      },
      {
        path : 'reports',
        component : ReportsComponent
      },
      {
        path : 'settings',
        component : SettingsComponent
      }
    ],
  }]
