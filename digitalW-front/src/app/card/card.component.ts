import { Movimentacao } from './../models/movimentacao';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() movimentacao: Movimentacao;
    @Output() onClickEditar: EventEmitter<any> = new EventEmitter();
    
    constructor() { }

    ngOnInit() {
    }

    clicouEditar(movimentacao: Movimentacao) {
        this.onClickEditar.emit(movimentacao);
    }
}
 