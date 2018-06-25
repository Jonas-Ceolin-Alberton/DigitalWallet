import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

var  USUARIO: Usuario = null;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {
    usuario: Usuario;

    constructor(private router: Router,
        private usuarioService: UsuarioService) {
        this.usuario = new Usuario();
    }

    ngOnInit() {
    }

    openApp() {
        this.usuarioService.autenticar(this.usuario).subscribe(
            data => {
               this.usuarioService.adicionarAoLocalhost(data);
                this.router.navigate(['app/movimentacoes']);
            },
            erro => alert("Dados invalidos")
        )
    }

    novoUsuario() {
       this.router.navigate(['/cadastro-usuario']);
    }

}
