import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { LayoutComponent } from 'app/_shared/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[{path:'', component:RepoComponent}] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
