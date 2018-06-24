import { Component, OnInit } from '@angular/core';
import { Movimentacao, TipoMovimentacao } from '../models/movimentacao';

@Component({
    selector: 'app-receitas',
    templateUrl: './receitas.component.html',
    styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

    movimentacoes: Array<Movimentacao> = new Array();
    constructor() { }

    ngOnInit() {

        let movim: Movimentacao = new Movimentacao();
        movim.data = new Date();
        movim.descricao = 'Pesque pague beira rio';
        movim.tipoMovimentacao = TipoMovimentacao.RECEITA;
        movim.valor = 50000;


        let teste: Movimentacao = new Movimentacao();
        teste.data = new Date();
        teste.descricao = 'Pesque pague beira rio';
        teste.tipoMovimentacao = TipoMovimentacao.RECEITA;
        teste.valor = 50000;

        this.movimentacoes.push(movim);
        this.movimentacoes.push(teste);
      
    }
}
