import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    usuario: Usuario;

    constructor(private router: Router) {
        this.usuario = new Usuario();
    }

    ngOnInit() {
    }

    openApp() {
        this.router.navigate(['app/movimentacoes']);
    }

    novoUsuario() {
       this.router.navigate(['/cadastro-usuario']);

    }

}
