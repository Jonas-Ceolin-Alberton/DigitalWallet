import { Movimentacao } from './../models/movimentacao';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-despesa',
    templateUrl: './despesa.component.html',
    styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

    editando = false;
    @Input() movimentacao: Movimentacao;
    @Output() removerManifestacaoEvent: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    editar(): void {
        this.editando = true;
    }

    fecharEdicao(): void {
        this.editando = false;
    }

    remover(movimentacao: Movimentacao): void {
        this.removerManifestacaoEvent.emit(movimentacao);
    }

}
