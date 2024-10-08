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
import { ViewReportsComponent } from "../pages/reports/view-reports/view-reports.component";
import path from "path";


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
        path : 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.route').then((m) => m.DASHBOARD_ROUTE ),
      },
      {
        path : 'staffs',
        loadChildren: () => import('../pages/staffs/staffs.route').then((m) => m.STAFF_ROUTE ),
      },
      {
        path : 'task',
        loadChildren: () => import('../pages/task/task.route').then((m) => m.TASK_ROUTE ),
      },
      {
        path : 'reports',
        loadChildren: () => import('../pages/reports/reports.route').then((m) => m.REPORT_ROUTE ),
      },
      {
        path : 'notifications',
        loadChildren: () => import('../pages/notification/notification.route').then((m) => m.NOTIFICATION_ROUTE ),
      },
      {
        path : 'lead',
        loadChildren: () => import('../pages/leads/lead.route').then((m) => m.LEAD_ROUTE ),
      },
      {
        path : 'settings',
        loadChildren: () => import('../pages/settings/settings.route').then((m) => m.SETTINGS_ROUTE ),
      },
    ],
  }
]
