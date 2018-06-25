import { Usuario } from './../models/usuario';
import { environment } from './../../environments/environment.prod';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

var httpOptions: RequestOptionsArgs = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
@Injectable()
export class UsuarioService {

    private api = environment;

    constructor(private _http: Http) {

    }

    adicionarAoLocalhost(usuario: Usuario) {
        window.localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    getUsuario(): Usuario {
        return JSON.parse(window.localStorage.getItem('usuario'));
    }

    autenticar(usuario: Usuario) {
        return this._http.post( this.api.hostApi + '/api/usuario/autenticar', usuario, httpOptions )
            .map(res =>  res.json());
    }

    buscarUsuarioPorId(id: any) {
        return this._http.get( this.api.hostApi + '/api/usuario/' + id)
        .map(res => res.json());
    }
}
