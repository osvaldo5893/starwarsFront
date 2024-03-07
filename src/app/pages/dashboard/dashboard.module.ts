import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { PrimengModule } from 'app/modules/primeng/primeng.module';


@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
