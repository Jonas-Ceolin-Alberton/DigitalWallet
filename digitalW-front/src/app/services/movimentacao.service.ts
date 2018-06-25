import { Usuario } from './../models/usuario';
import { UsuarioService } from './usuario.service';
import { Movimentacao } from './../models/movimentacao';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';


var httpOptions: RequestOptionsArgs = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}



@Injectable()
export class MovimentacaoService {

    private api = environment;
    private usuario: Usuario;

    constructor(private _http: Http,
        private usuarioService: UsuarioService) {
        this.usuario = this.usuarioService.getUsuario();
    }

    salvar(movimentacao: Movimentacao) {
        movimentacao.idUsuario = this.usuario.id;
        return this._http.post(this.api.hostApi + '/api/movimentacao', movimentacao, httpOptions)
            .map(res => res.json());
    }

    listarReceitasPorIdUsuario() {
        let id = this.usuario.id;
        return this._http.get(this.api.hostApi + '/api/movimentacao/receitas/' + id)
            .map(res => res.json());
    }

    listarDespesasPorIdUsuario() {
        let id = this.usuario.id;
        return this._http.get(this.api.hostApi + '/api/movimentacao/despesas/' + id)
            .map(res => res.json());
    }

    listarMovimentacoesPorUsuario() {
        let id = this.usuario.id;
        return this._http.get(this.api.hostApi + '/api/movimentacao/' + id)
            .map(res => res.json());
    }

    excluir(movimentacao: Movimentacao) {
        let id = this.usuario.id;
        return this._http.delete(this.api.hostApi + '/api/movimentacao/' + movimentacao.id )
            .map(res => res.json());
    }
}
