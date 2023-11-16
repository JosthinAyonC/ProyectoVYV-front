import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ClienteComponent } from './pages/usuario/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    NavbarComponent,
    ModalConfirmComponent,
    LoginComponent,
    PageNotFoundComponent,
    UnauthorizeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
