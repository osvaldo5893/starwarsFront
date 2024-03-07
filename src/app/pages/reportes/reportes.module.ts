import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportesRoutingModule } from './reportes-routing.module';
import { RepoComponent } from './repo/repo.component';
import { PrimengModule } from 'app/modules/primeng/primeng.module';


@NgModule({
  declarations: [
    RepoComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ReportesModule { }
