import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ClienteComponent } from './pages/usuario/cliente.component';


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
  // {
  //   path: 'cliente/editar',
  //   component: EditarUsuarioComponent,
  // },
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
