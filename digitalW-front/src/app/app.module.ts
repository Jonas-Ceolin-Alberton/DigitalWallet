import { MovimentacaoService } from './services/movimentacao.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MaterialModule } from './material-module/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


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
import { CurrencyFormatPipe } from './shared/currency-format.pipe';
import { CadastroMovimentacaoComponent } from './cadastro-movimentacao/cadastro-movimentacao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MatDatepickerModule, MAT_DATE_FORMATS } from '@angular/material';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import localePt from '@angular/common/locales/pt';
import { ReceitasComponent } from './receitas/receitas.component';
import { ReceitaComponent } from './receitas/receita/receita.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DespesasComponent } from './despesas/despesas.component';
import { UsuarioService } from './services/usuario.service';


export const MY_FORMATS = {
    parse: {
      dateInput: 'L',
    },
    display: {
      dateInput: 'L',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

  registerLocaleData(localePt, 'pt');


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
        CurrencyFormatPipe,
        CadastroMovimentacaoComponent,
        ReceitasComponent,
        DespesasComponent
    ],
    imports: [
        BrowserModule,
        LoginModule,
        MaterialModule,
        routing,
        CommonModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpModule

    ],
    providers: [
        appRoutingProviders,
        { provide: MAT_DATE_LOCALE, useValue: 'pt' },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        UsuarioService,
        MovimentacaoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
