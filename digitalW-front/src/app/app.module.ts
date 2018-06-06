import { MaterialModule } from './material-module/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import { routing, appRoutingProviders } from './app-.routing';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    AplicacaoComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MaterialModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
