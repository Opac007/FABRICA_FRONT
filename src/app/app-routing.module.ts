import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { IndexComponent } from './modules/index/index.component';
import { LoginComponent } from './modules/auth/login.component';
import { RegistroComponent } from './modules/auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
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
import { ListaEstiloComponent } from './modules/estilo/lista-estilo.component';
import { DetalleEstiloComponent } from './modules/estilo/detalle-estilo.component';
import { NuevoEstiloComponent } from './modules/estilo/nuevo-estilo.component';
import { EditarEstiloComponent } from './modules/estilo/editar-estilo.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  //{ path: '**', component: DashboardComponent },
  { path: 'index', component: IndexComponent  },
  { path: 'inicio', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'listaProducto', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalleProducto/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevoProducto', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarProducto/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'listaMenu', component: ListamenuComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevoMenu', component: NuevomenuComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarMenu/:id', component: EditarmenuComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarUsuario', component: EditarUsuarioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'listaRol', component: ListaRolComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalleRol/:id', component: DetalleRolComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevoRol', component: NuevoRolComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarRol/:id', component: EditarRolComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'listaEstilo', component: ListaEstiloComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalleEstilo/:id', component: DetalleEstiloComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevoEstilo', component: NuevoEstiloComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarEstilo/:id', component: EditarEstiloComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
