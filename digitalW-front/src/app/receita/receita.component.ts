import { Movimentacao, TipoMovimentacao } from './../models/movimentacao';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-receita',
    templateUrl: './receita.component.html',
    styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

    receitas: Array<Movimentacao> = new Array();
    editando = false;

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

        this.receitas.push(movim);
        this.receitas.push(teste);
      
    }

    editarReceita(movimentacao: Movimentacao): void  {
        movimentacao.editando = true;
    }
}
