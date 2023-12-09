

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { AcessoModule } from './app/components/acesso/acesso.module';

import { SpinnerComponent } from './app/components/spinner/spinner.component';
import { LoadingInterceptor } from './app/interceptors/loading.interceptor';
import { NewacessoModule } from './app/components/new-acessos/newacesso.module';

import { LoginModule } from './app/components/login/login.module';
import { TokenInterceptor } from './app/token.interceptor';


import { EditarAcessoModule } from './app/components/editar-acessos/editar-acesso.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './app/shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AcessoModule,
    NewacessoModule,
    EditarAcessoModule,
    ModalModule.forRoot(),
    SharedModule



  ],

  providers: [
    {
       provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor,
       multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}