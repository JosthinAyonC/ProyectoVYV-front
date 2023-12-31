import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { EditarClienteComponent } from './pages/cliente/editar-cliente/editar-cliente.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { EditarHabitacionComponent } from './pages/habitaciones/editar-habitacion/editar-habitacion.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'unauthorize',
    component: UnauthorizeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clientes',
    component: ClienteComponent,
  },
  {
    path: 'cliente/editar',
    component: EditarClienteComponent
  },
  {
    path: 'habitaciones',
    component: HabitacionesComponent,
  },
  {
    path: 'habitacion/editar',
    component: EditarHabitacionComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
