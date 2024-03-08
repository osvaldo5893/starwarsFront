import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { BreadcrumbComponent } from './_shared/layout/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './_shared/layout/layout/layout.component';
import { MenuComponent } from './_shared/layout/menu/menu.component';
import { MenuitemComponent } from './_shared/layout/menuitem/menuitem.component';
import { ProfilemenuComponent } from './_shared/layout/profilemenu/profilemenu.component';
import { SidebarComponent } from './_shared/layout/sidebar/sidebar.component';
import { TopbarComponent } from './_shared/layout/topbar/topbar.component';
import { NotfoundComponent1 } from './_shared/layout/notfound/notfound.component';
import { PrimengModule } from './modules/primeng/primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    BreadcrumbComponent,
    LayoutComponent,
    MenuComponent,
    MenuitemComponent,
    ProfilemenuComponent,
    SidebarComponent,
    TopbarComponent,
    NotfoundComponent1,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
