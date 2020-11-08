import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatDividerModule, MatListModule, MatSliderModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ToggleSidebarModule } from './modules/toggle-sidebar/toggle-sidebar.module';
import { HeaderModule } from './modules/header/header.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { IndexModule } from './modules/index/index.module';
import { RegistroComponent } from './modules/auth/registro.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginModule } from './modules/auth/login.module';
import { ToastrModule } from 'ngx-toastr';
import { ListaProductoComponent } from './modules/producto/lista-producto.component';
import { DetalleProductoComponent } from './modules/producto/detalle-producto.component';
import { NuevoProductoComponent } from './modules/producto/nuevo-producto.component';
import { EditarProductoComponent } from './modules/producto/editar-producto.component';
import { ListamenuComponent } from './modules/menu/lista-menu.component';
import { NuevomenuComponent } from './modules/menu/nuevo-menu.component';
import { EditarmenuComponent } from './modules/menu/editar-menu.component';
import { EditarUsuarioComponent } from './modules/usuario/editar-usuario.component';
import { ListaRolComponent } from './modules/rol/lista-rol.component';
import { DetalleRolComponent } from './modules/rol/detalle-rol.component';
import { NuevoRolComponent } from './modules/rol/nuevo-rol.component';
import { EditarRolComponent } from './modules/rol/editar-rol.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    ListamenuComponent,
    NuevomenuComponent,
    EditarmenuComponent,
    EditarUsuarioComponent,
    ListaRolComponent,
    DetalleRolComponent,
    NuevoRolComponent,
    EditarRolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    IndexModule,
    HeaderModule,
    SidebarModule,
    ToggleSidebarModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule,
    CommonModule,
    LoginModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
