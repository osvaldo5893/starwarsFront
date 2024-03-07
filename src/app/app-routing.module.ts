import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/authentication/auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NotfoundComponent1 } from './_shared/layout/notfound/notfound.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./pages/auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    data: { breadcrumb: 'Personajes' },
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: '',
    redirectTo: '/location',
    pathMatch: 'full'
  },
  {
    path: 'location',
    data: { breadcrumb: 'location' },
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/reportes/reportes.module').then(
        (m) => m.ReportesModule
      ),
  },
  {
    path: '',
    redirectTo: '/personaje',
    pathMatch: 'full'
  },
  {
    path: 'personaje',
    data: { breadcrumb: 'Personaje' },
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },






  // el final del routing para q se muestre si no existe la ruta
  // {
  //   path: '',
  //   redirectTo: '/notfound',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'notfound',
  //   component: NotfoundComponent,
  // },
  { path: '**', redirectTo: '/404' },
  {
    path: '404',
    component: NotfoundComponent1,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
