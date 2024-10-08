import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { canActivate } from '../auth/auth.guard';
import { inject } from '@angular/core';

export const routes: Routes = [
      {
        path: '', 
        loadChildren: () => import('../Routes/auth.route').then((m) => m.AUTH_ROUTE)
      },
      {
        path: 'crm', 
        // canActivate: [canActivate],
        loadChildren: () => import('../Routes/main.routes').then((m) => m.MAIN_ROUTE),
      },
];
