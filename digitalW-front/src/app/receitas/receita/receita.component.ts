
import { Component, OnInit, Input } from '@angular/core';
import { Movimentacao, TipoMovimentacao } from '../../models/movimentacao';

@Component({
    selector: 'app-receita',
    templateUrl: './receita.component.html',
    styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

    editando = false;
    @Input() movimentacao: Movimentacao;
    constructor() { }

    ngOnInit() {
    }

    editar(): void {
    this.editando = true;
    }

    fecharEdicao(): void {
        this.editando = false;
    } 
}
