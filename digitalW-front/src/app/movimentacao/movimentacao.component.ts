import { Movimentacao, TipoMovimentacao } from './../models/movimentacao';
import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from '../services/movimentacao.service';

@Component({
    selector: 'app-movimentacao',
    templateUrl: './movimentacao.component.html',
    styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

    movimentacoes: Array<Movimentacao> = new Array();
    mapIcon: Map<TipoMovimentacao, string> = new Map();

    constructor(private movimentacaoService: MovimentacaoService) { 
        this.mapIcon.set(TipoMovimentacao.RECEITA, 'arrow_upward');
        this.mapIcon.set(TipoMovimentacao.DESPESA, 'arrow_downward')
    }

    ngOnInit() {
        this.buscarMovimentacoesPorUsuario();
    }

    buscarMovimentacoesPorUsuario() {
        this.movimentacaoService.listarMovimentacoesPorUsuario().subscribe(
            dado => this.movimentacoes = dado,
            erro => console.log("erro", erro)
        );
    }

    getIconByTipoMovimentacao(movimentacao: Movimentacao): string {
        return this.mapIcon.get(movimentacao.tipoMovimentacao);
    }

}
