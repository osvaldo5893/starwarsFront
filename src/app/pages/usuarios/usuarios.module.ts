import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuComponent } from './usu/usu.component';
import { PrimengModule } from 'app/modules/primeng/primeng.module';


@NgModule({
  declarations: [
    UsuComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UsuariosModule { }
