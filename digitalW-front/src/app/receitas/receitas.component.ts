import { MovimentacaoService } from './../services/movimentacao.service';
import { Component, OnInit } from '@angular/core';
import { Movimentacao, TipoMovimentacao } from '../models/movimentacao';

@Component({
    selector: 'app-receitas',
    templateUrl: './receitas.component.html',
    styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
    cadastrarMovimentacao = false;
    movimentacoes: Array<Movimentacao> = new Array();
    constructor(private movimentacaoService: MovimentacaoService) { }

    ngOnInit() {
        this.buscarDespesasPorUsuarios();
    }

    buscarDespesasPorUsuarios() {
        this.movimentacaoService.listarReceitasPorIdUsuario().subscribe(
            data => this.movimentacoes = data,
            erro => console.log('erro', erro)
        );
    }

    adicionarALista(movimentacao: Movimentacao) {
        this.movimentacoes.unshift(movimentacao);
        this.fecharCadastro();
      }
    
      novaMovimentacao() {
        this.cadastrarMovimentacao = true;
      }
    
      fecharCadastro() {
        this.cadastrarMovimentacao = false;
      }
}
