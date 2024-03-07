import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuComponent } from './usu/usu.component';
import { LayoutComponent } from 'app/_shared/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[{path:'', component:UsuComponent}] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
