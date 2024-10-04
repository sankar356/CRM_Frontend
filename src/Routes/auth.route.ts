import { Routes } from "@angular/router";

export const AUTH_ROUTE: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthModule),
      },
]