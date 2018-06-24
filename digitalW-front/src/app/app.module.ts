import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import { routing, appRoutingProviders } from './app-.routing';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { DespesaComponent } from './despesa/despesa.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ReceitaComponent } from './receita/receita.component';
import { CardComponent } from './card/card.component';
import { CurrencyFormatPipe } from './shared/currency-format.pipe';
import { CadastroMovimentacaoComponent } from './cadastro-movimentacao/cadastro-movimentacao.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    AplicacaoComponent,
    MenuPrincipalComponent,
    ReceitaComponent,
    DespesaComponent,
    MovimentacaoComponent,
    RelatorioComponent,
    CardComponent,
    CurrencyFormatPipe,
    CadastroMovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MaterialModule,
    routing,
    CommonModule,
    ReactiveFormsModule,

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
