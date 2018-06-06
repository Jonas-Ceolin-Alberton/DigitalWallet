import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

export const appRoutes: Routes = [
    {
        path: 'app',
        component: AplicacaoComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent,
    },

    {path: '**', redirectTo: '/login'},
  
  
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
